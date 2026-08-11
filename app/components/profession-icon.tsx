import { cn } from "~/lib/utils";
import { PROFESSIONS, type ProfessionSlug } from "~/lib/constants";

const EXTRA_ICONS: Record<string, string> = {
  "first-aid": "/images/professions/first-aid.png",
  lockpicking: "/images/professions/lockpicking.png",
};

type ProfessionIconProps = {
  slug: ProfessionSlug | string;
  className?: string;
};

export function ProfessionIcon({ slug, className }: ProfessionIconProps) {
  const fromCatalog = PROFESSIONS.find((p) => p.slug === slug)?.icon;
  const src = fromCatalog ?? EXTRA_ICONS[slug];
  if (!src) return null;

  return (
    <img src={src} alt="" className={cn("shrink-0 object-contain", className)} />
  );
}
