/** Slug de expansiones para rutas */
export const EXPANSION_SLUGS = [
  "the-war-within",
  "midnight",
] as const;

export type ExpansionSlug = (typeof EXPANSION_SLUGS)[number];

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
  { slug: "archaeology", name: "Arqueología" },
] as const;

export type ProfessionSlug = (typeof PROFESSIONS)[number]["slug"];
