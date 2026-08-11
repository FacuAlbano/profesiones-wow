/**
 * El slug `classic` no es una expansión: redirige siempre a Classic Era.
 */

export const CLASSIC_HUB_SLUG = "classic";
export const CLASSIC_ERA_SLUG = "classic-era";

export function classicHubRedirectPath(
  slug: string,
  profSlug?: string,
  tipo?: string,
): string | null {
  if (slug !== CLASSIC_HUB_SLUG) return null;
  const base = `/expansion/${CLASSIC_ERA_SLUG}`;
  if (!profSlug) return base;
  return tipo ? `${base}/profesion/${profSlug}/${tipo}` : `${base}/profesion/${profSlug}`;
}

/** Misma regla, aplicada a un path de request (`/expansion/classic/...`). */
export function classicHubRedirectFromPath(pathname: string, search = ""): string | null {
  if (pathname !== "/expansion/classic" && !pathname.startsWith("/expansion/classic/")) {
    return null;
  }
  return `${pathname.replace(/^\/expansion\/classic/, `/expansion/${CLASSIC_ERA_SLUG}`)}${search}`;
}
