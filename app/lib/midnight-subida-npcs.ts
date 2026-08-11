/**
 * NPCs de las Subidas nativas de Midnight.
 * Nombres = Wowhead ES.
 */

import type { NpcEntry } from "~/lib/guide-types";

const IN_SILVERMOON = "en Ciudad de Lunargenta";

export const MIDNIGHT_SUBIDA_NPCS: Record<string, NpcEntry> = {
  bemarrin: { name: "Bemarrin", npcId: 241450, location: IN_SILVERMOON },
  eriden: { name: "Eriden", npcId: 241451, location: IN_SILVERMOON },
  danwe: { name: "Danwe", npcId: 241452, location: IN_SILVERMOON },
  yatheon: { name: "Yatheon", npcId: 241453, location: IN_SILVERMOON },
  lyrendal: { name: "Lyrendal", npcId: 243286, location: IN_SILVERMOON },
  dolothos: { name: "Dolothos", npcId: 243349, location: IN_SILVERMOON },
  lyna: { name: "Lyna", npcId: 243350, location: IN_SILVERMOON },
  jennara: { name: "Jennara Brillosol", npcId: 254051, location: IN_SILVERMOON },
  galana: { name: "Galana", npcId: 243352, location: IN_SILVERMOON },
  amin: { name: "Amin", npcId: 243345, location: IN_SILVERMOON },
  gelanthis: { name: "Gelanthis", npcId: 243346, location: IN_SILVERMOON },
  talmar: { name: "Talmar", npcId: 243500, location: IN_SILVERMOON },
  zaralda: { name: "Zaralda", npcId: 243531, location: IN_SILVERMOON },
  zantasia: { name: "Zantasia", npcId: 243553, location: IN_SILVERMOON },
  camberon: { name: "Camberon", npcId: 243357, location: IN_SILVERMOON },
  nathera: { name: "Botánica Nathera", npcId: 243355, location: IN_SILVERMOON },
  belil: { name: "Belil", npcId: 16663, location: IN_SILVERMOON },
  tyn: { name: "Tyn", npcId: 16692, location: IN_SILVERMOON },
  sylann: { name: "Sylann", npcId: 16676, location: IN_SILVERMOON },
  drathen: { name: "Drathen", npcId: 253468, location: IN_SILVERMOON },
};
