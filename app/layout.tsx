import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/caveat/600.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: { default: "Riggs HD Professionals Inc. | Beyond the Game", template: "%s | Riggs HD Professionals Inc." },
  description: "Basketball-centered mentorship, education planning, career exploration, and leadership development for young people.",
  keywords: ["youth mentorship", "basketball development", "college planning", "career exploration", "Illinois"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const assetVariables = {
    "--hero-image": `url("${assetPath("/images/original/home-hero.jpg")}")`,
    "--paper-texture": `url("${assetPath("/textures/manila-paper.png")}")`,
  } as CSSProperties;

  return (
    <html lang="en">
      <body data-direction-seed="bf45349c" style={assetVariables}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
