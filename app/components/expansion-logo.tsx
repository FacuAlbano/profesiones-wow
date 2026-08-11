import { cn } from "~/lib/utils";
import { EXPANSIONS, type ExpansionSlug } from "~/lib/constants";

type ExpansionLogoProps = {
  slug: ExpansionSlug | string;
  className?: string;
};

export function ExpansionLogo({ slug, className }: ExpansionLogoProps) {
  const src = EXPANSIONS.find((e) => e.slug === slug)?.logo;
  if (!src) return null;

  return (
    <img src={src} alt="" className={cn("shrink-0 object-contain", className)} />
  );
}
