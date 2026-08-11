/**
 * NPCs de la guía de Alquimia Midnight.
 * Nombres = Wowhead ES.
 */

import type { NpcEntry } from "~/lib/guide-types";

export const ALCHEMY_MIDNIGHT_NPCS: Record<string, NpcEntry> = {
  camberon: {
    name: "Camberon",
    npcId: 243357,
    location: "en Ciudad de Lunargenta",
  },
  melaris: {
    name: "Melaris",
    npcId: 16641,
    location: "en Ciudad de Lunargenta",
  },
};
