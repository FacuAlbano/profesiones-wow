/** Slug de expansiones para rutas */
export const EXPANSION_SLUGS = [
  "the-war-within",
  "midnight",
  "classic-era",
  "classic-hardcore",
  "season-of-discovery",
  "mop-classic",
  "the-burning-crusade",
  "wrath-of-the-lich-king",
  "cataclysm",
  "mists-of-pandaria",
  "warlords-of-draenor",
  "battle-for-azeroth",
  "shadowlands",
] as const;

export type ExpansionSlug = (typeof EXPANSION_SLUGS)[number];

/** Datos de cada expansión: nombre oficial (sin traducir), abreviatura y logo */
export const EXPANSIONS = [
  { slug: "the-war-within" as const, name: "The War Within", short: "TWW", logo: "/images/logo-tww.png" },
  { slug: "midnight" as const, name: "Midnight", short: "Midnight", logo: "/images/logo-midnight.png" },
  { slug: "classic-era" as const, name: "Classic Era", short: "Era", logo: "/images/logo-classic.png" },
  { slug: "classic-hardcore" as const, name: "Hardcore", short: "HC", logo: "/images/logo-classic.png" },
  { slug: "season-of-discovery" as const, name: "Season of Discovery", short: "SoD", logo: "/images/logo-classic.png" },
  { slug: "mop-classic" as const, name: "MoP Classic", short: "MoP Classic", logo: "/images/logo-mop.png" },
  { slug: "the-burning-crusade" as const, name: "The Burning Crusade", short: "TBC", logo: "/images/logo-tbc.png" },
  { slug: "wrath-of-the-lich-king" as const, name: "Wrath of the Lich King", short: "WotLK", logo: "/images/logo-lk.png" },
  { slug: "cataclysm" as const, name: "Cataclysm", short: "Cata", logo: "/images/logo-cata.png" },
  { slug: "mists-of-pandaria" as const, name: "Mists of Pandaria", short: "MoP", logo: "/images/logo-mop.png" },
  { slug: "warlords-of-draenor" as const, name: "Warlords of Draenor", short: "WoD", logo: "/images/logo-draenor.png" },
  { slug: "battle-for-azeroth" as const, name: "Battle for Azeroth", short: "BfA", logo: null },
  { slug: "shadowlands" as const, name: "Shadowlands", short: "SL", logo: null },
] as const;

/** Mapa slug → nombre para meta y títulos */
export const EXPANSION_NAMES: Record<ExpansionSlug, string> = Object.fromEntries(
  EXPANSIONS.map((e) => [e.slug, e.name])
) as Record<ExpansionSlug, string>;

/** Profesiones de WoW (nombre para UI y slug para rutas) */
export const PROFESSIONS = [
  { slug: "alchemy", name: "Alquimia", icon: "/images/professions/alchemy.png" },
  { slug: "blacksmithing", name: "Herrería", icon: "/images/professions/blacksmithing.png" },
  { slug: "enchanting", name: "Encantamiento", icon: "/images/professions/enchanting.png" },
  { slug: "engineering", name: "Ingeniería", icon: "/images/professions/engineering.png" },
  { slug: "inscription", name: "Inscripción", icon: "/images/professions/inscription.png" },
  { slug: "jewelcrafting", name: "Joyería", icon: "/images/professions/jewelcrafting.png" },
  { slug: "leatherworking", name: "Peletería", icon: "/images/professions/leatherworking.png" },
  { slug: "tailoring", name: "Sastrería", icon: "/images/professions/tailoring.png" },
  { slug: "herbalism", name: "Herboristería", icon: "/images/professions/herbalism.png" },
  { slug: "mining", name: "Minería", icon: "/images/professions/mining.png" },
  { slug: "skinning", name: "Desuello", icon: "/images/professions/skinning.png" },
  { slug: "cooking", name: "Cocina", icon: "/images/professions/cooking.png" },
  { slug: "fishing", name: "Pesca", icon: "/images/professions/fishing.png" },
  { slug: "fishing-cooking", name: "Pesca + Cocina", icon: "/images/professions/fishing-cooking.png" },
] as const;

export type ProfessionSlug = (typeof PROFESSIONS)[number]["slug"];
