import { ButtonLink } from "./button-link";
import { Pathway } from "./pathway";
import { assetPath } from "@/lib/assets";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__gym" aria-hidden="true" />
      <div className="home-hero__shade" aria-hidden="true" />
      <div className="home-hero__copy">
        <h1 id="home-title">Beyond the game.<br />Into the future.</h1>
        <p>Basketball is the entry point. <strong>Holistic development is the mission.</strong></p>
        <ButtonLink href="/programs" tone="blue">Explore programs</ButtonLink>
      </div>

      <div className="court-line" aria-hidden="true"><span /></div>

      <aside className="dossier" aria-label="Coach Riggs mentoring profile">
        <div className="dossier__background-scene" aria-hidden="true">
          <div className="whiteboard">
            <p>PLAN + PURPOSE</p>
            <ul>
              <li>BASKETBALL DEVELOPMENT</li>
              <li>PRE-COLLEGE PLANNING</li>
              <li>CAREER EXPLORATION</li>
              <li>LEADERSHIP</li>
              <li>LIFE SKILLS</li>
            </ul>
          </div>
          <div className="future-pennant">FUTURE</div>
        </div>
        <div className="dossier__folder">
          <span className="folder-spine">STUDENT PROFILE</span>
          <div className="folder-tabs" aria-hidden="true">
            <span>ACADEMICS</span><span>LEADERSHIP</span><span>OPPORTUNITIES</span><span>NEXT STEPS</span>
          </div>
          <figure className="profile-photo taped-photo">
            <img src={assetPath("/images/original/founder-profile.jpeg")} alt="Coach Terry TJ Riggs in professional attire" />
          </figure>
          <div className="profile-note">
            <p><span>MENTOR:</span>Coach Riggs</p>
            <p><span>FOCUS:</span>Leadership<br />Education<br />Life Skills</p>
            <p><span>MISSION:</span>Unlock potential.<br />Create pathways.<br />Build futures.</p>
          </div>
          <blockquote>Increase graduation. Decrease incarceration. Create community wealth.</blockquote>
        </div>
      </aside>
      <Pathway />
    </section>
  );
}
