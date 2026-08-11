/**
 * Identidad de entidad Wowhead → URL ES, atributos de tooltip e icono.
 * Host siempre es.wowhead.com (no /mx).
 */

const WOWHEAD_BASE_ES = "https://es.wowhead.com";
const WOW_ZAMIMG_ICONS = "https://wow.zamimg.com/images/wow/icons/small";

export type WowheadGame = "tbc" | "classic" | "shadowlands" | "midnight";

export type WowheadEntityTipo =
  | "objeto"
  | "material"
  | "receta"
  | "habilidad"
  | "npc"
  | "mision"
  | "zona"
  | "profesion";

export type WowheadEntity = {
  tipo: WowheadEntityTipo;
  id: number;
  juego: WowheadGame;
};

export type WowheadKind = "item" | "spell" | "npc" | "quest" | "zone" | "skill";

export type WowheadEntityLink = {
  href: string;
  dataWowhead: string;
  wowheadKind: WowheadKind;
};

const TIPO_TO_KIND: Record<WowheadEntityTipo, WowheadKind> = {
  objeto: "item",
  material: "item",
  receta: "spell",
  habilidad: "spell",
  npc: "npc",
  mision: "quest",
  zona: "zone",
  profesion: "skill",
};

function gamePrefix(juego: WowheadGame): string {
  return juego === "midnight" ? "" : `/${juego}`;
}

export function wowheadEntity(entity: WowheadEntity): WowheadEntityLink {
  const wowheadKind = TIPO_TO_KIND[entity.tipo];
  const href = `${WOWHEAD_BASE_ES}${gamePrefix(entity.juego)}/${wowheadKind}=${entity.id}`;
  const dataWowhead = `${wowheadKind}=${entity.id}&domain=es`;
  return { href, dataWowhead, wowheadKind };
}

/** URL de un item en Wowhead (español) */
export function wowheadItemUrl(itemId: number, game: WowheadGame = "tbc"): string {
  return wowheadEntity({ tipo: "objeto", id: itemId, juego: game }).href;
}

/** URL de un hechizo en Wowhead (español) */
export function wowheadSpellUrl(spellId: number, game: WowheadGame = "tbc"): string {
  return wowheadEntity({ tipo: "habilidad", id: spellId, juego: game }).href;
}

/** URL de un NPC en Wowhead (español) */
export function wowheadNpcUrl(npcId: number, game: WowheadGame = "tbc"): string {
  return wowheadEntity({ tipo: "npc", id: npcId, juego: game }).href;
}

/** URL del icono en Zamimg (nombre en minúsculas, ej. inv_misc_flower_02) */
export function wowheadIconUrl(iconName: string): string {
  const icon = iconName.toLowerCase().replace(/\\/g, "/");
  return `${WOW_ZAMIMG_ICONS}/${icon}.jpg`;
}
