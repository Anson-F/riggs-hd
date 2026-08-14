import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ButtonLink } from "@/components/button-link";
import { programs } from "@/data/site";
import { assetPath } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="mission-ledger section-shell">
        <div className="mission-ledger__title">
          <h2>The scoreboard is only one measure.</h2>
        </div>
        <div className="mission-ledger__copy">
          <p className="lead-copy">Riggs HD uses sport to build trusted relationships—then turns that trust into guidance, exposure, and a plan for what comes next.</p>
          <div className="mission-outcomes" aria-label="Long-term mission outcomes">
            <span>Increase graduation</span>
            <span>Decrease incarceration</span>
            <span>Create community wealth</span>
          </div>
        </div>
      </section>

      <section className="program-index section-shell" aria-labelledby="program-index-title">
        <div className="section-heading-row">
          <div>
            <h2 id="program-index-title">One relationship.<br />Multiple next moves.</h2>
          </div>
          <ButtonLink href="/programs" tone="text">View all programs</ButtonLink>
        </div>
        <div className="program-index__list">
          {programs.slice(0, 3).map((program) => (
            <a className="program-index__row" href={`/programs#${program.id}`} key={program.id}>
              <span className="program-index__number">{program.index}</span>
              <div>
                <span className="program-index__marker">{program.marker}</span>
                <h3>{program.name}</h3>
              </div>
              <p>{program.summary}</p>
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="field-story">
        <div className="field-story__image"><img src={assetPath("/images/original/project-10.jpg")} alt="Young people standing together on a basketball court" /></div>
        <div className="field-story__paper">
          <p className="impact-number">30<span>+</span></p>
          <h2>Students and entrepreneurs helped so far.</h2>
          <p>This figure is carried forward from the current Riggs HD website. The reporting period is awaiting confirmation, so we present it honestly as a directional milestone—not a finished story.</p>
          <ButtonLink href="/impact" tone="ink">See the work</ButtonLink>
        </div>
      </section>

      <section className="founder-bridge section-shell">
        <div className="founder-bridge__photo taped-photo"><img src={assetPath("/images/original/founder-profile.jpeg")} alt="Coach Terry TJ Riggs" /></div>
        <div className="founder-bridge__copy">
          <h2>Experience made the method personal.</h2>
          <p>As a scholarship student-athlete, Terry “TJ” Riggs experienced both the possibility sport can create and the difficult identity transition that can follow injury. His work connects the court to education, mental wellbeing, and a future young people can name for themselves.</p>
          <ButtonLink href="/about" tone="text">Read Coach Riggs’s story</ButtonLink>
        </div>
      </section>

      <section className="home-cta">
        <h2>Help a young person see further.</h2>
        <div className="home-cta__actions">
          <ButtonLink href="/get-involved" tone="paper">Get involved</ButtonLink>
          <ButtonLink href="/donate" tone="text">Make a donation</ButtonLink>
        </div>
      </section>
    </>
  );
}
