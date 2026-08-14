import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CurrentProgramFeature } from "@/components/current-program-feature";
import { pastEvents } from "@/data/site";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = { title: "Events", description: "Apply for the 2026 Pathways to Purpose Career Exploration Program and review past Riggs HD programs." };

export default function EventsPage() {
  return (
    <>
      <PageHero label="EVENTS" title={<>A current opportunity.<br />A clear next move.</>} intro="Applications are open for the 2026 Pathways to Purpose Career Exploration Program. Review the flyer, then use the official application link below." />
      <CurrentProgramFeature />
      <section className="event-archive section-shell" aria-labelledby="archive-title">
        <div className="section-heading-row"><div><h2 id="archive-title">Program archive.</h2></div></div>
        {pastEvents.map((event, index) => (
          <article className="event-record" key={event.title}>
            <div className="event-record__date"><span>{String(index + 1).padStart(2, "0")}</span><p>{event.date}</p></div>
            <div className="event-record__image"><img src={assetPath(event.image)} alt="" /></div>
            <div className="event-record__copy"><p className="status-label">{event.type}</p><h3>{event.title}</h3><p>{event.copy}</p></div>
          </article>
        ))}
      </section>
    </>
  );
}
