/**
 * Helpers para enlaces e iconos de Wowhead (español México).
 * Usa es.wowhead.com para URLs y wow.zamimg.com para iconos.
 */

const WOWHEAD_BASE_ES = "https://es.wowhead.com";
const WOW_ZAMIMG_ICONS = "https://wow.zamimg.com/images/wow/icons/small";

export type WowheadGame = "tbc" | "classic" | "shadowlands";

/** URL de un item en Wowhead (español) */
export function wowheadItemUrl(itemId: number, game: WowheadGame = "tbc"): string {
  return `${WOWHEAD_BASE_ES}/${game}/item=${itemId}`;
}

/** URL de un hechizo en Wowhead (español) */
export function wowheadSpellUrl(spellId: number, game: WowheadGame = "tbc"): string {
  return `${WOWHEAD_BASE_ES}/${game}/spell=${spellId}`;
}

/** URL de un NPC en Wowhead (español) */
export function wowheadNpcUrl(npcId: number, game: WowheadGame = "tbc"): string {
  return `${WOWHEAD_BASE_ES}/${game}/npc=${npcId}`;
}

/** URL del icono en Zamimg (nombre en minúsculas, ej. inv_misc_flower_02) */
export function wowheadIconUrl(iconName: string): string {
  const icon = iconName.toLowerCase().replace(/\\/g, "/");
  return `${WOW_ZAMIMG_ICONS}/${icon}.jpg`;
}
