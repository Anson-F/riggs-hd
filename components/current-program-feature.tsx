import { ButtonLink } from "./button-link";
import { currentProgram } from "@/data/site";
import { assetPath } from "@/lib/assets";

export function CurrentProgramFeature({ showEventsLink = false }: { showEventsLink?: boolean }) {
  return (
    <section className="current-program" aria-labelledby="current-program-title">
      <div className="current-program__inner section-shell">
        <div className="current-program__copy">
          <div className="current-program__status">
            <span>Now accepting applications</span>
            <span>{currentProgram.year}</span>
          </div>
          <p className="current-program__type">{currentProgram.type}</p>
          <h2 id="current-program-title">{currentProgram.title}</h2>
          <p className="current-program__tagline">{currentProgram.tagline}</p>
          <p>{currentProgram.description}</p>
          <p>{currentProgram.reward}</p>
          <div className="current-program__deadline">
            <span>Applications close</span>
            <strong>{currentProgram.applicationDeadline}</strong>
          </div>
          <div className="current-program__actions">
            <ButtonLink href={currentProgram.formUrl} tone="blue">Apply now</ButtonLink>
            {showEventsLink && <ButtonLink href="/events" tone="text">View program details</ButtonLink>}
          </div>
        </div>

        <figure className="current-program__flyer">
          <a href={currentProgram.formUrl} target="_blank" rel="noreferrer" aria-label={`Apply for ${currentProgram.title} (opens in a new tab)`}>
            <img src={assetPath(currentProgram.flyerImage)} width="1024" height="1536" alt="Pathways to Purpose Career Exploration Program flyer with a September 6 application deadline and Indiana Pacers experience reward" />
          </a>
          <figcaption>Tap the flyer or application button to apply.</figcaption>
        </figure>
      </div>
    </section>
  );
}
