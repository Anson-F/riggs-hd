import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { pastEvents } from "@/data/site";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = { title: "Events", description: "Review past Riggs HD programs and connect for future event announcements." };

export default function EventsPage() {
  return (
    <>
      <PageHero label="EVENTS" title={<>What happened matters.<br />What’s next should be clear.</>} intro="Past programs remain part of the record. Future dates will appear only when they are confirmed—no stale countdowns, no expired registration presented as current." image="/images/original/summer-hoops-2025.jpg" imageAlt="Summer Hoops University 2025 event artwork" marker="PAST PROGRAM / 2025" />
      <section className="event-status section-shell"><span>STATUS</span><h2>No upcoming public event dates are currently confirmed.</h2><p>Use the contact route below to ask about programs, partnerships, or the next announcement.</p><ButtonLink href="/contact" tone="ink">Ask about what’s next</ButtonLink></section>
      <section className="event-archive section-shell" aria-labelledby="archive-title">
        <div className="section-heading-row"><div><h2 id="archive-title">Past work, clearly labeled.</h2></div></div>
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
