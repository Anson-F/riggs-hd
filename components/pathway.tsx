import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pathway } from "@/data/site";

export function Pathway({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={`pathway ${compact ? "pathway--compact" : ""}`} aria-label="Riggs HD development pathway">
      <ol>
        {pathway.map((stage, index) => (
          <li key={stage} className={index === 0 ? "is-current" : ""}>
            <Link href={`/programs#${index < 2 ? "basketball-development" : index === 2 ? "pre-college" : index === 3 ? "career-exploration" : "speaking-workshops"}`}>
              <span className="pathway__number">0{index + 1}</span>
              <span>{stage}</span>
            </Link>
          </li>
        ))}
      </ol>
      {!compact && <ArrowRight className="pathway__arrow" aria-hidden="true" />}
    </nav>
  );
}
