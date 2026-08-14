import os
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_URL = os.getenv("QA_BASE_URL", "http://127.0.0.1:3100").rstrip("/")
ROUTES = ["/", "/about/", "/programs/", "/impact/", "/events/", "/get-involved/", "/donate/", "/contact/"]
REVIEW_DIR = Path(".impeccable/review")
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

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    mobile.on("console", lambda msg: console_errors.append(f"mobile console: {msg.text}") if msg.type == "error" else None)
    mobile.goto(BASE_URL, wait_until="networkidle")
    mobile.screenshot(path=str(REVIEW_DIR / "mobile-home.png"), full_page=False)
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

    donate_href = desktop.locator("a.nav-donate").get_attribute("href")
    if donate_href != "https://givebutter.com/pHmvk5":
        failures.append(f"donate link mismatch: {donate_href}")

    browser.close()

if console_errors:
    failures.extend(console_errors)

if failures:
    print("QA FAILED")
    for failure in failures:
        print(f"- {failure}")
    raise SystemExit(1)

print(f"QA PASSED: {len(ROUTES)} routes, desktop/mobile navigation, images, overflow, form labels, and donation target.")
