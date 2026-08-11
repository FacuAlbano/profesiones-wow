/**
 * Materiales de la guía de Alquimia Midnight.
 * Nombres = Wowhead ES.
 */

import type { MaterialEntry } from "~/lib/guide-types";

export const ALCHEMY_MIDNIGHT_MATERIALS: Record<string, MaterialEntry> = {
  tranquilityBloom: {
    name: "Flor de tranquilidad",
    itemId: 236761,
    icon: "inv_misc_herb_peacebloom",
  },
  sunglassVial: {
    name: "Frasco de vidriosolar",
    itemId: 240991,
    icon: "inv_12_profession_alchemy_lightpotion_basic",
  },
};
