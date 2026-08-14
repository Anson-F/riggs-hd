import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { values } from "@/data/site";

export const metadata: Metadata = { title: "About", description: "Meet Terry TJ Riggs and learn how lived experience shaped the Riggs HD model." };

export default function AboutPage() {
  return (
    <>
      <PageHero label="ABOUT RIGGS HD" title={<>Built from the gap<br />between athlete and future.</>} intro="Riggs HD exists so young people can build identity, direction, and opportunity that reach far beyond a final buzzer." image="/images/original/founder-profile.jpeg" imageAlt="Portrait of Terry TJ Riggs" marker="FOUNDER / MENTOR" />

      <section className="founder-story section-shell">
        <div className="founder-story__margin">
          <span>01</span><p>THE EXPERIENCE</p>
        </div>
        <div className="founder-story__copy">
          <p className="lead-copy">Terry “TJ” Riggs knows what it means for basketball to open a door—and what happens when a young person still needs a map after walking through it.</p>
          <p>As a scholarship student-athlete, injury and mental-health struggles forced a difficult transition in identity. Education, advising, and trusted relationships became part of the way forward. Riggs HD turns those lessons into practical support for the next generation.</p>
          <p>The model is deliberately holistic: use sport to earn trust, help students make informed academic and career decisions, and place caring adults around the moments when direction matters most.</p>
        </div>
      </section>

      <section className="belief-statement">
        <div className="belief-statement__photo"><img src="/images/original/founder-graduation.jpg" alt="A graduation group celebrating an educational milestone" /></div>
        <blockquote>“A player should leave with more than a better game. They should leave with a stronger sense of who they are becoming.”</blockquote>
      </section>

      <section className="values-section section-shell">
        <div className="section-heading-row">
          <div><h2>Values with a job to do.</h2></div>
        </div>
        <ol className="values-ledger">
          {values.map((value) => (
            <li key={value.label}><h3>{value.label}</h3><p>{value.copy}</p></li>
          ))}
        </ol>
      </section>

      <section className="paper-cta section-shell">
        <div><h2>Bring the mission into your school, team, or community.</h2></div>
        <ButtonLink href="/contact" tone="ink">Start a conversation</ButtonLink>
      </section>
    </>
  );
}
