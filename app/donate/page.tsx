import type { Metadata } from "next";
import { ArrowDown, Check } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Donate", description: "Support Riggs HD youth mentorship, education planning, and career exposure." };

export default function DonatePage() {
  return (
    <>
      <PageHero label="DONATE" title={<>Fund the guidance<br />after the game.</>} intro="Your gift helps turn a basketball connection into mentorship, academic planning, career exposure, and practical next steps." image="/images/original/project-10.jpg" imageAlt="Young people standing together on a basketball court" marker="INVEST IN THE WHOLE PERSON" />
      <section className="donation-sheet section-shell">
        <div className="donation-sheet__copy"><h2>The infrastructure around potential.</h2><p>Riggs HD’s public giving page processes donations securely through Givebutter. The button below opens that page in a new tab.</p><ButtonLink href={site.donateUrl} tone="blue">Donate securely</ButtonLink><a className="down-link" href="#giving-note"><ArrowDown aria-hidden="true" />Before you give</a></div>
        <ul className="donation-sheet__uses"><li><Check aria-hidden="true" />Mentoring and student guidance</li><li><Check aria-hidden="true" />Basketball and development programming</li><li><Check aria-hidden="true" />Education and career exposure</li><li><Check aria-hidden="true" />Program materials and access</li></ul>
      </section>
      <section className="giving-note section-shell" id="giving-note"><h2>Verify the current campaign details on Givebutter.</h2><p>The external campaign page may contain goal or date language from a prior fundraising period. Review the live campaign information before completing your gift. Riggs HD can answer questions directly at <a href={`mailto:${site.email}`}>{site.email}</a>.</p></section>
      <section className="home-cta"><h2>Access can be as valuable as funding.</h2><div className="home-cta__actions"><ButtonLink href="/get-involved" tone="paper">Explore other roles</ButtonLink><ButtonLink href="/contact" tone="text">Offer a partnership</ButtonLink></div></section>
    </>
  );
}
