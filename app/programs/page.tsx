import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProgramRecord } from "@/components/program-record";
import { programs } from "@/data/site";

export const metadata: Metadata = { title: "Programs", description: "Explore Riggs HD basketball, college-planning, career-exploration, and speaking programs." };

export default function ProgramsPage() {
  return (
    <>
      <PageHero label="PROGRAMS" title={<>The court opens<br />the conversation.</>} intro="Every program starts with a real point of connection and works toward a clearer plan for education, leadership, career, and life." image="/images/original/about-program.png" imageAlt="Coach Riggs working with young basketball players" marker="THE ENTRY POINT" />
      <section className="records-shell section-shell" aria-label="Riggs HD programs">
        {programs.map((program) => <ProgramRecord key={program.id} program={program} />)}
      </section>
      <section className="truth-note section-shell">
        <h2>Ready to ask about fit?</h2>
        <p>Program dates and cohort capacity can change. Each action above goes to the most current request or interest form available from Riggs HD.</p>
      </section>
    </>
  );
}
