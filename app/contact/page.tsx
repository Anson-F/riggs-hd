import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactMailForm } from "@/components/contact-mail-form";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Riggs HD about programs, partnerships, mentoring, speaking, or giving." };

export default function ContactPage() {
  return (
    <>
      <PageHero label="CONTACT" title={<>Start with the next<br />useful conversation.</>} intro="Tell us what you are trying to make possible. A clear first message helps Riggs HD route you toward the right program or partnership." image="/images/original/home-program-strip.webp" imageAlt="Coach Riggs speaking with students in a gym" marker="LET’S TALK" />
      <section className="contact-layout section-shell">
        <div className="contact-layout__details"><h2>Reach the organization.</h2><div className="contact-method"><Mail aria-hidden="true" /><div><span>EMAIL</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-method"><MapPin aria-hidden="true" /><div><span>LOCATION</span><p>{site.location}</p></div></div><div className="contact-expectation"><p>For faster routing, include:</p><ul><li>Your organization or community</li><li>The program or opportunity</li><li>Your timing and intended audience</li></ul></div></div>
        <div><h2 className="form-title">Prepare your email.</h2><ContactMailForm /></div>
      </section>
    </>
  );
}
