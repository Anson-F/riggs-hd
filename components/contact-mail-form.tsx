"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

export function ContactMailForm() {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const topic = String(data.get("topic") || "General question");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Riggs HD inquiry: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should now open with this message. If it does not, email Riggs HD directly using the address beside the form.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label><span>Name</span><input name="name" autoComplete="name" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label></div>
      <label><span>What would you like to discuss?</span><select name="topic" defaultValue="Program information"><option>Program information</option><option>School or community partnership</option><option>Mentoring or volunteering</option><option>Donation question</option><option>Speaking request</option><option>General question</option></select></label>
      <label><span>Message</span><textarea name="message" rows={7} required /></label>
      <button className="button-link button-link--blue" type="submit">Prepare email <Send aria-hidden="true" size={17} /></button>
      <p className="form-note">This form does not store your information. It prepares an email in your device’s mail app.</p>
      <p className="form-notice" aria-live="polite">{notice}</p>
    </form>
  );
}
