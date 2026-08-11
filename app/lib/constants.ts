/** Slug de expansiones para rutas */
export const EXPANSION_SLUGS = [
  "the-war-within",
  "midnight",
  "classic",
  "the-burning-crusade",
  "wrath-of-the-lich-king",
  "cataclysm",
  "mists-of-pandaria",
  "warlords-of-draenor",
  "battle-for-azeroth",
  "shadowlands",
] as const;

export type ExpansionSlug = (typeof EXPANSION_SLUGS)[number];

/** Datos de cada expansión: nombre en español, abreviatura y logo */
export const EXPANSIONS = [
  { slug: "the-war-within" as const, name: "La Guerra Interior", short: "TWW", logo: "/images/logo-tww.png" },
  { slug: "midnight" as const, name: "Medianoche", short: "Midnight", logo: "/images/logo-midnight.png" },
  { slug: "classic" as const, name: "World of Warcraft Clásico", short: "Clásico", logo: "/images/logo-classic.png" },
  { slug: "the-burning-crusade" as const, name: "La Cruzada Ardiente", short: "TBC", logo: "/images/logo-tbc.png" },
  { slug: "wrath-of-the-lich-king" as const, name: "La Ira del Rey Exánime", short: "WotLK", logo: "/images/logo-lk.png" },
  { slug: "cataclysm" as const, name: "Cataclysm", short: "Cata", logo: "/images/logo-cata.png" },
  { slug: "mists-of-pandaria" as const, name: "Mistos de Pandaria", short: "MoP", logo: "/images/logo-mop.png" },
  { slug: "warlords-of-draenor" as const, name: "Warlords of Draenor", short: "WoD", logo: "/images/logo-draenor.png" },
  { slug: "battle-for-azeroth" as const, name: "Batalla por Azeroth", short: "BfA", logo: null },
  { slug: "shadowlands" as const, name: "Shadowlands", short: "SL", logo: null },
] as const;

/** Mapa slug → nombre para meta y títulos */
export const EXPANSION_NAMES: Record<ExpansionSlug, string> = Object.fromEntries(
  EXPANSIONS.map((e) => [e.slug, e.name])
) as Record<ExpansionSlug, string>;

/** Profesiones de WoW (nombre para UI y slug para rutas) */
export const PROFESSIONS = [
  { slug: "alchemy", name: "Alquimia" },
  { slug: "blacksmithing", name: "Herrería" },
  { slug: "enchanting", name: "Encantamiento" },
  { slug: "engineering", name: "Ingeniería" },
  { slug: "inscription", name: "Inscripción" },
  { slug: "jewelcrafting", name: "Joyería" },
  { slug: "leatherworking", name: "Peletería" },
  { slug: "tailoring", name: "Sastrería" },
  { slug: "herbalism", name: "Herboristería" },
  { slug: "mining", name: "Minería" },
  { slug: "skinning", name: "Desuello" },
  { slug: "cooking", name: "Cocina" },
  { slug: "fishing", name: "Pesca" },
  { slug: "fishing-cooking", name: "Pesca + Cocina" },
] as const;

export type ProfessionSlug = (typeof PROFESSIONS)[number]["slug"];
