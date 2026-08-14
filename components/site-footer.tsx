import Link from "next/link";
import { Camera, Play, Users } from "lucide-react";
import { navItems, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <Link className="wordmark wordmark--footer" href="/" aria-label={`${site.legalName} home`}><span>RIGGS</span><span className="wordmark-blue">HD</span></Link>
          <p>Basketball is the entry point.<br />Holistic development is the mission.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/donate">Donate</Link>
        </nav>
        <div className="footer-contact">
          <p className="micro-label">CONNECT</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
          <div className="social-links">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Riggs HD on Instagram"><Camera aria-hidden="true" /></a>
            <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="Riggs HD on YouTube"><Play aria-hidden="true" /></a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Riggs HD on Facebook"><Users aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {site.legalName}</span>
        <span>Built for the next move—not just the next game.</span>
      </div>
    </footer>
  );
}
