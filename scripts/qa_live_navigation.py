import os
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
from playwright.sync_api import sync_playwright


BASE_URL = os.getenv("QA_BASE_URL", "https://anson-f.github.io/riggs-hd/").rstrip("/") + "/"
BASE_PATH = urlparse(BASE_URL).path.rstrip("/")
ROUTES = ["", "about/", "programs/", "impact/", "events/", "get-involved/", "donate/", "contact/"]
REVIEW_DIR = Path(os.getenv("QA_REVIEW_DIR", ".impeccable/review"))
REVIEW_DIR.mkdir(parents=True, exist_ok=True)


def is_project_url(url: str) -> bool:
    parsed = urlparse(url)
    base = urlparse(BASE_URL)
    return parsed.netloc == base.netloc and (
        parsed.path == BASE_PATH or parsed.path.startswith(f"{BASE_PATH}/")
    )


failures: list[str] = []
console_errors: list[str] = []
link_cases: dict[str, tuple[str, str]] = {}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1600, "height": 1000}, device_scale_factor=1)
    page.on(
        "console",
        lambda message: console_errors.append(f"console: {message.text}")
        if message.type == "error"
        else None,
    )
    page.on("pageerror", lambda error: console_errors.append(f"pageerror: {error}"))

    # Reconnaissance: load every exported route and collect every rendered link.
    for route in ROUTES:
        source_url = f"{BASE_URL}{route}"
        response = page.goto(source_url, wait_until="networkidle")
        if response is None or not response.ok:
            failures.append(f"direct load failed: {source_url}")
            continue
        if "There isn't a GitHub Pages site here" in page.locator("body").inner_text():
            failures.append(f"GitHub Pages 404: {source_url}")
        anchors = page.locator("a[href]").evaluate_all(
            """anchors => anchors.map(anchor => ({
                absolute: anchor.href,
                raw: anchor.getAttribute('href'),
                text: (anchor.innerText || anchor.getAttribute('aria-label') || '').trim()
            }))"""
        )
        for anchor in anchors:
            absolute = anchor["absolute"]
            parsed = urlparse(absolute)
            if anchor["raw"] == "#main-content":
                continue
            if parsed.scheme not in {"http", "https"}:
                continue
            if parsed.netloc != urlparse(BASE_URL).netloc:
                continue
            # One real click per unique rendered destination is enough to cover
            # repeated header/footer links while still exercising every route/hash.
            link_cases.setdefault(absolute, (source_url, anchor["raw"]))

    # Action: revisit the source and click the rendered anchor itself.
    for index, (expected_url, (source_url, raw_href)) in enumerate(link_cases.items(), start=1):
        page.goto(source_url, wait_until="networkidle")
        rendered_hrefs = page.locator("a[href]").evaluate_all(
            "anchors => anchors.map(anchor => anchor.getAttribute('href'))"
        )
        if raw_href not in rendered_hrefs:
            failures.append(f"link disappeared: {source_url} -> {raw_href}")
            continue
        locator = page.locator("a[href]").nth(rendered_hrefs.index(raw_href))
        try:
            locator.scroll_into_view_if_needed()
            locator.click(timeout=5_000)
        except PlaywrightTimeoutError:
            failures.append(f"link was not clickable: {source_url} -> {raw_href}")
            continue
        try:
            page.wait_for_load_state("networkidle", timeout=10_000)
        except PlaywrightTimeoutError:
            failures.append(f"navigation timeout: {source_url} -> {raw_href}")
        page.wait_for_timeout(150)

        actual_url = page.url
        body_text = page.locator("body").inner_text()
        escaped = not is_project_url(actual_url)
        pages_404 = "There isn't a GitHub Pages site here" in body_text
        if escaped or pages_404:
            failures.append(
                f"broken click: {source_url} --[{raw_href}]--> {actual_url} "
                f"(escaped_base_path={escaped}, pages_404={pages_404})"
            )
            page.screenshot(path=str(REVIEW_DIR / f"live-nav-failure-{index}.png"), full_page=False)

    page.goto(BASE_URL, wait_until="networkidle")
    page.screenshot(path=str(REVIEW_DIR / "live-home.png"), full_page=False)
    browser.close()

if console_errors:
    failures.extend(console_errors)

if failures:
    print(f"LIVE NAVIGATION FAILED: {len(link_cases)} unique same-origin links clicked")
    for failure in failures:
        print(f"- {failure}")
    raise SystemExit(1)

print(
    f"LIVE NAVIGATION PASSED: {len(ROUTES)} direct routes and "
    f"{len(link_cases)} unique same-origin links clicked inside {BASE_PATH}/."
)
