import { CircleCheck } from "lucide-react";
import type { Program } from "@/data/site";
import { ButtonLink } from "./button-link";

export function ProgramRecord({ program }: { program: Program }) {
  return (
    <article className="program-record" id={program.id}>
      <div className="program-record__index" aria-hidden="true">{program.index}</div>
      <div className="program-record__photo">
        <img src={program.image} alt={program.alt} />
        <span>{program.marker}</span>
      </div>
      <div className="program-record__copy">
        <h2>{program.name}</h2>
        <p className="program-record__summary">{program.summary}</p>
        <p>{program.details}</p>
        <div className="record-status"><CircleCheck aria-hidden="true" size={18} /><span>{program.status}</span></div>
        <ButtonLink href={program.actionUrl} tone="ink">{program.actionLabel}</ButtonLink>
      </div>
    </article>
  );
}
