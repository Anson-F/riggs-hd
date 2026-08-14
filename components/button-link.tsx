import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "blue" | "ink" | "paper" | "text";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({ href, children, tone = "blue", className = "", showArrow = true }: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `button-link button-link--${tone} ${className}`.trim();
  const content = <>{children}{showArrow && <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />}</>;

  if (external) {
    return <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>;
  }

  return <Link className={classes} href={href}>{content}</Link>;
}
