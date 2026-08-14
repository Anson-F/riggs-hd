import type { Metadata } from "next";
import { Handshake, HeartHandshake, MicVocal, UsersRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = { title: "Get Involved", description: "Support, partner with, or bring Riggs HD into your community." };

const actions = [
  { icon: HeartHandshake, index: "01", title: "Give", copy: "Help sustain mentoring, program access, and the practical resources young people need to move forward.", label: "Go to donation page", href: "/donate" },
  { icon: Handshake, index: "02", title: "Partner", copy: "Open a door to education, workplace exposure, space, equipment, or a meaningful learning experience.", label: "Discuss a partnership", href: "/contact" },
  { icon: MicVocal, index: "03", title: "Bring a Speaker", copy: "Request a practical session on leadership, student development, identity, transition, or purpose.", label: "Request Coach Riggs", href: "https://forms.gle/jNHbHj6Z2CnRKKYz8" },
  { icon: UsersRound, index: "04", title: "Mentor or Volunteer", copy: "Share time, professional perspective, or program support as opportunities become available.", label: "Introduce yourself", href: "/contact" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero label="GET INVOLVED" title={<>A future gets bigger<br />when the circle does.</>} intro="Give resources, share access, bring the work into your organization, or add the perspective a young person has not encountered yet." image="/images/original/home-action-3.jpg" imageAlt="Students and mentors gathered together during a learning experience" marker="COMMUNITY MAKES THE PATH" />
      <section className="action-ledger section-shell" aria-label="Ways to get involved">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <article key={action.title}>
              <div className="action-ledger__icon"><Icon aria-hidden="true" /></div>
              <h2>{action.title}</h2><p>{action.copy}</p><ButtonLink href={action.href} tone="text">{action.label}</ButtonLink>
            </article>
          );
        })}
      </section>
      <section className="partner-note">
        <div className="partner-note__paper"><h3 className="list-title">A useful introduction includes</h3><ul><li>Who you are and where you work</li><li>What kind of support or access you can offer</li><li>The age group or community you hope to reach</li><li>Your preferred timeline</li></ul></div>
        <div className="partner-note__copy"><h2>Make the first email easy to act on.</h2><p>A concrete introduction helps Riggs HD understand the opportunity and respond with a useful next step.</p><ButtonLink href="/contact" tone="paper">Start the conversation</ButtonLink></div>
      </section>
    </>
  );
}
