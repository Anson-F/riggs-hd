import os
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

BASE_URL = os.getenv("QA_BASE_URL", "http://127.0.0.1:3100").rstrip("/")
APPLICATION_URL = "https://forms.gle/FzfSuPugSC7dZY6L9"
DONATION_URL = "https://givebutter.com/2025-26-career-exploration-and-sponsorship-copy-wjza1h"
APPLICATION_LINK_COUNTS = {"/": 2, "/programs/": 1, "/events/": 2}
ROUTES = ["/", "/about/", "/programs/", "/impact/", "/events/", "/get-involved/", "/donate/", "/contact/"]
REVIEW_DIR = Path(os.getenv("QA_REVIEW_DIR", ".impeccable/review"))
REVIEW_DIR.mkdir(parents=True, exist_ok=True)

failures: list[str] = []
console_errors: list[str] = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    desktop = browser.new_page(viewport={"width": 1600, "height": 1000}, device_scale_factor=1)
    desktop.on("console", lambda msg: console_errors.append(f"console: {msg.text}") if msg.type == "error" else None)
    desktop.on("pageerror", lambda error: console_errors.append(f"pageerror: {error}"))

    for route in ROUTES:
        response = desktop.goto(f"{BASE_URL}{route}", wait_until="networkidle")
        if response is None or not response.ok:
            failures.append(f"{route}: HTTP failure")
            continue
        if desktop.locator("main h1").count() != 1:
            failures.append(f"{route}: expected exactly one main h1")
        if desktop.locator("main").count() != 1:
            failures.append(f"{route}: missing main landmark")
        header_text = " ".join(desktop.locator("header").inner_text().split())
        if "RIGGS HD PROFESSIONALS INC." not in header_text.upper():
            failures.append(f"{route}: full organization name missing from header")
        expected_application_links = APPLICATION_LINK_COUNTS.get(route, 0)
        actual_application_links = desktop.locator(f'a[href="{APPLICATION_URL}"]').count()
        if actual_application_links != expected_application_links:
            failures.append(
                f"{route}: expected {expected_application_links} current-program links, "
                f"found {actual_application_links}"
            )
        if route in {"/", "/events/"}:
            flyer = desktop.locator('img[src*="pathways-to-purpose-2026.webp"]')
            if flyer.count() != 1 or not flyer.first.is_visible():
                failures.append(f"{route}: current program flyer is missing or not visible")
        expected_donation_links = 2 if route == "/donate/" else 1
        actual_donation_links = desktop.locator(f'a[href="{DONATION_URL}"]').count()
        if actual_donation_links != expected_donation_links:
            failures.append(
                f"{route}: expected {expected_donation_links} current donation links, "
                f"found {actual_donation_links}"
            )
        overflow = desktop.evaluate("document.documentElement.scrollWidth - window.innerWidth")
        if overflow > 2:
            culprits = desktop.evaluate("""Array.from(document.querySelectorAll('*')).map(el => ({tag: el.tagName, cls: el.className || '', right: el.getBoundingClientRect().right, width: el.getBoundingClientRect().width})).filter(x => x.right > window.innerWidth + 2).slice(0, 8)""")
            failures.append(f"{route}: horizontal overflow {overflow}px; culprits {culprits}")
        broken = desktop.locator("img").evaluate_all("imgs => imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src)")
        if broken:
            failures.append(f"{route}: broken images {broken}")

    desktop.goto(BASE_URL, wait_until="networkidle")
    desktop.screenshot(path=str(REVIEW_DIR / "desktop-home.png"), full_page=False)
    desktop.screenshot(path=str(REVIEW_DIR / "desktop-home-full.png"), full_page=True)
    with desktop.expect_popup() as popup_info:
        desktop.get_by_role("link", name="Apply now").click()
    application_page = popup_info.value
    application_page.wait_for_load_state("domcontentloaded")
    application_host = urlparse(application_page.url).hostname
    if application_host not in {"forms.gle", "docs.google.com"}:
        failures.append(f"application link opened unexpected host: {application_page.url}")
    application_page.close()

    desktop.goto(f"{BASE_URL}/donate/", wait_until="networkidle")
    with desktop.expect_popup() as donation_popup_info:
        desktop.get_by_role("link", name="Donate securely").click()
    donation_page = donation_popup_info.value
    donation_page.wait_for_load_state("domcontentloaded")
    donation_url = urlparse(donation_page.url)
    if donation_url.hostname != "givebutter.com" or "2025-26-career-exploration-and-sponsorship-copy-wjza1h" not in donation_url.path:
        failures.append(f"donation link opened unexpected page: {donation_page.url}")
    donation_page.close()

    tablet = browser.new_page(viewport={"width": 1024, "height": 900}, device_scale_factor=1)
    tablet.goto(BASE_URL, wait_until="networkidle")
    tablet.screenshot(path=str(REVIEW_DIR / "tablet-home.png"), full_page=False)
    tablet_overflow = tablet.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    if tablet_overflow > 2:
        failures.append(f"tablet home: horizontal overflow {tablet_overflow}px")

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    mobile.on("console", lambda msg: console_errors.append(f"mobile console: {msg.text}") if msg.type == "error" else None)
    mobile.goto(BASE_URL, wait_until="networkidle")
    mobile.screenshot(path=str(REVIEW_DIR / "mobile-home.png"), full_page=False)
    mobile.screenshot(path=str(REVIEW_DIR / "mobile-home-full.png"), full_page=True)
    mobile_home_overflow = mobile.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    if mobile_home_overflow > 2:
        failures.append(f"mobile home: horizontal overflow {mobile_home_overflow}px")
    mobile.get_by_role("button", name="Open menu").click()
    primary_contact = mobile.get_by_label("Primary navigation").get_by_role("link", name="Contact", exact=True)
    if not primary_contact.is_visible():
        failures.append("mobile: navigation did not open")
    primary_contact.click()
    mobile.wait_for_url("**/contact/")
    mobile.wait_for_load_state("networkidle")
    if mobile.locator("form label").count() != 4:
        failures.append("contact: expected four labeled form fields")
    mobile.get_by_label("Name").fill("Website QA")
    mobile.get_by_label("Email").fill("qa@example.com")
    mobile.get_by_label("Message").fill("Checking the contact pathway.")
    mobile.screenshot(path=str(REVIEW_DIR / "mobile-contact.png"), full_page=True)
    mobile_overflow = mobile.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    if mobile_overflow > 2:
        failures.append(f"mobile contact: horizontal overflow {mobile_overflow}px")

    desktop.goto(BASE_URL, wait_until="networkidle")
    donate_href = desktop.locator("a.nav-donate").get_attribute("href")
    if donate_href != DONATION_URL:
        failures.append(f"donate link mismatch: {donate_href}")

    browser.close()

if console_errors:
    failures.extend(console_errors)

if failures:
    print("QA FAILED")
    for failure in failures:
        print(f"- {failure}")
    raise SystemExit(1)

print(
    f"QA PASSED: {len(ROUTES)} routes; desktop/tablet/mobile layouts; full organization name; "
    "current flyer, Google application, current Givebutter campaign; images and form labels."
)
