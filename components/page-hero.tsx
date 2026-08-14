import type { ReactNode } from "react";
import { Pathway } from "./pathway";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  intro: string;
  image?: string;
  imageAlt?: string;
  marker?: string;
};

export function PageHero({ label, title, intro, image, imageAlt = "", marker = "FIELD NOTE" }: PageHeroProps) {
  return (
    <>
      <section className={`page-hero ${image ? "page-hero--image" : ""}`}>
        <div className="page-hero__copy">
          <p className="page-code">{label}</p>
          <h1>{title}</h1>
          <p className="page-hero__intro">{intro}</p>
        </div>
        {image && (
          <figure className="page-hero__photo taped-photo">
            <img src={image} alt={imageAlt} />
            <figcaption>{marker}</figcaption>
          </figure>
        )}
      </section>
      <Pathway compact />
    </>
  );
}
