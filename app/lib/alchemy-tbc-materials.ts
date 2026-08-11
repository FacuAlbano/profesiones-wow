/**
 * Materiales de la guía de Alquimia TBC (y otras guías TBC que comparten items).
 * Nombres en español (MX). Incluye hierbas usadas también en Herboristería.
 */

import type { MaterialEntry } from "~/lib/guide-types";
export type { MaterialEntry };

/** Materiales usados en guías TBC (Alquimia, Herboristería, etc.) */
export const ALCHEMY_TBC_MATERIALS: Record<string, MaterialEntry> = {
  // Hierbas (compartidas con Herboristería)
  earthroot: { name: "Raíz de tierra", itemId: 2449, icon: "inv_misc_herb_07" },
  fadeleaf: { name: "Hoja marchita", itemId: 3818, icon: "inv_misc_herb_12" },
  firebloom: { name: "Flor de fuego", itemId: 4625, icon: "inv_misc_herb_19" },
  ghostMushroom: { name: "Champiñón fantasma", itemId: 8845, icon: "inv_mushroom_08" },
  gromsblood: { name: "Sangre de Grom", itemId: 8846, icon: "inv_misc_herb_16" },
  purpleLotus: { name: "Loto cárdeno", itemId: 8831, icon: "inv_misc_herb_17" },
  plaguebloom: { name: "Flor de peste", itemId: 13466, icon: "inv_misc_herb_plaguebloom" },
  peacebloom: { name: "Flor de paz", itemId: 2447, icon: "inv_misc_flower_02" },
  silverleaf: { name: "Hojaplata", itemId: 765, icon: "inv_misc_herb_10" },
  emptyVial: { name: "Vial vacío", itemId: 3371, icon: "inv_drink_06" },
  briarthorn: { name: "Brezospina", itemId: 2450, icon: "inv_misc_root_01" },
  bruiseweed: { name: "Hierba cardenal", itemId: 2453, icon: "inv_misc_herb_11" },
  leadedVial: { name: "Vial emplomado", itemId: 3372, icon: "inv_drink_06" },
  mageroyal: { name: "Marregal", itemId: 785, icon: "inv_jewelry_talisman_03" },
  stranglekelp: { name: "Alga estranguladora", itemId: 3820, icon: "inv_misc_herb_08" },
  liferoot: { name: "Vidarraíz", itemId: 3357, icon: "inv_misc_root_02" },
  kingsblood: { name: "Sangrerregia", itemId: 3356, icon: "inv_misc_herb_03" },
  goldthorn: { name: "Espina de oro", itemId: 3821, icon: "inv_misc_herb_03" },
  wildSteelbloom: { name: "Acérita salvaje", itemId: 3355, icon: "inv_misc_herb_05" },
  sungrass: { name: "Solea", itemId: 8838, icon: "inv_misc_herb_13" },
  khadgarWhisker: { name: "Mostacho de Khadgar", itemId: 3358, icon: "inv_misc_herb_08" },
  crystalVial: { name: "Vial de cristal", itemId: 8925, icon: "inv_potion_06" },
  arthasTears: { name: "Lágrimas de Arthas", itemId: 8836, icon: "inv_misc_herb_15" },
  blindweed: { name: "Carolina", itemId: 8839, icon: "inv_misc_herb_18" },
  goldenSansam: { name: "Sansam dorado", itemId: 13464, icon: "inv_misc_herb_sansamroot" },
  mountainSilversage: { name: "Salviargenta de montaña", itemId: 13465, icon: "inv_misc_herb_mountainsilversage" },
  imbuedVial: { name: "Vial imbuido", itemId: 18256, icon: "inv_drink_06" },
  felweed: { name: "Hierba vil", itemId: 22785, icon: "inv_misc_herb_felweed" },
  dreamingGlory: { name: "Gloria de ensueño", itemId: 22786, icon: "inv_misc_herb_dreamingglory" },
  netherbloom: { name: "Flor abisal", itemId: 22791, icon: "inv_misc_herb_netherbloom" },
  nightmareVine: { name: "Vid pesadilla", itemId: 22792, icon: "inv_misc_herb_nightmarevine" },
  terocone: { name: "Teropiña", itemId: 22789, icon: "inv_misc_herb_terrocone" },
  dreamfoil: { name: "Hojasueño", itemId: 13463, icon: "inv_misc_herb_dreamfoil" },
  ancientLichen: { name: "Liquen antiguo", itemId: 22790, icon: "inv_misc_herb_ancientlichen" },
  icecap: { name: "Capuchave", itemId: 13467, icon: "inv_misc_herb_icecap" },
  elementalFire: { name: "Fuego elemental", itemId: 7068, icon: "inv_misc_flame_small" },
  dreamDust: { name: "Polvo de ensueño", itemId: 11176, icon: "inv_enchant_dustdream" },
  ragveil: { name: "Velo andrajoso", itemId: 22791, icon: "inv_misc_herb_ragveil" },
  firefinSnapper: { name: "Pargo de fuego", itemId: 6359, icon: "inv_misc_fish_06" },
};

/** Clave del material (para buscar en ALCHEMY_TBC_MATERIALS) */
export type MaterialKey = keyof typeof ALCHEMY_TBC_MATERIALS;
