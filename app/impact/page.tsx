import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = { title: "Impact", description: "See the people, partnerships, and development experiences behind Riggs HD." };

export default function ImpactPage() {
  return (
    <>
      <PageHero label="IMPACT & STORIES" title={<>Progress looks like<br />a wider horizon.</>} intro="The work is measured in relationships, informed choices, meaningful exposure, and young people who can see a future they know how to pursue." image="/images/original/project-10.jpg" imageAlt="Young people gathered in a gym" marker="THE WORK IN MOTION" />

      <section className="impact-ledger section-shell">
        <div className="impact-ledger__number"><span>30</span><sup>+</sup></div>
        <div>
          <h2>Students and entrepreneurs helped so far.</h2>
          <p>This is the public figure currently reported by Riggs HD. Because the original site does not identify a reporting period, the redesigned site keeps the number visible while clearly marking that context for future confirmation.</p>
          <p className="source-note">Reporting period pending confirmation from Riggs HD.</p>
        </div>
      </section>

      <section className="story-gallery section-shell" aria-labelledby="gallery-title">
        <div className="section-heading-row"><div><h2 id="gallery-title">Relationship becomes opportunity.</h2></div></div>
        <div className="story-gallery__grid">
          <figure className="story-gallery__wide"><img src="/images/original/home-action-3.jpg" alt="Students and mentors during a Pacers learning experience" /><figcaption><span>OPPORTUNITY</span>Exposure helps a possible future feel concrete.</figcaption></figure>
          <figure><img src="/images/original/about-program.png" alt="Coach Riggs speaking to young basketball players" /><figcaption><span>RELATIONSHIP</span>Coaching opens the door to deeper guidance.</figcaption></figure>
          <figure><img src="/images/original/founder-graduation.jpg" alt="A group celebrating graduation" /><figcaption><span>FUTURE</span>Education milestones belong in the same story as sport.</figcaption></figure>
        </div>
      </section>

      <section className="video-file section-shell">
        <div className="video-file__copy"><h2>See the energy in the room.</h2><p id="reel-description">A short video from Riggs HD’s existing media archive. Captions and a transcript are pending source materials.</p></div>
        <video controls preload="metadata" poster="/images/original/home-program-strip.webp" aria-describedby="reel-description"><source src="/videos/original/program-reel.mp4" type="video/mp4" />Your browser does not support embedded video.</video>
      </section>

      <section className="home-cta">
        <h2>Turn access into a pathway.</h2>
        <div className="home-cta__actions"><ButtonLink href="/get-involved" tone="paper">Get involved</ButtonLink><ButtonLink href="/contact" tone="text">Talk with us</ButtonLink></div>
      </section>
    </>
  );
}
