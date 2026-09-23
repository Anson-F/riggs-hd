"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { assetPath } from "@/lib/assets";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand-logo-link brand-logo-link--header" href="/" aria-label={`${site.legalName} home`}>
        <img className="brand-logo brand-logo--header" src={assetPath(site.logoImage)} alt="" aria-hidden="true" />
      </Link>

      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        <div className="primary-nav__links">
          {navItems.map((item) => {
            const current = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
        </div>
        <a className="nav-donate" href={site.donateUrl} target="_blank" rel="noreferrer">Donate</a>
      </nav>
    </header>
  );
}
