/**
 * Materiales de las Subidas nativas de Wrath of the Lich King.
 * Reusa el registro TBC para el tramo 1-350. Nombres Norte = Wowhead ES.
 */

import type { MaterialEntry } from "~/lib/guide-types";
import { TBC_SUBIDA_MATERIALS } from "~/lib/tbc-subida-materials";

export const WOTLK_SUBIDA_MATERIALS: Record<string, MaterialEntry> = {
  ...TBC_SUBIDA_MATERIALS,
  goldclover: { name: "Trébol de oro", itemId: 36901, icon: "inv_misc_herb_goldclover" },
  deadnettle: { name: "Ortiga mortal", itemId: 37921, icon: "inv_misc_herb_evergreenmoss" },
  talandrasRose: { name: "Rosa de Talandra", itemId: 36907, icon: "inv_misc_herb_talandrasrose" },
  tigerLily: { name: "Lirio atigrado", itemId: 36904, icon: "inv_misc_herb_tigerlily" },
  addersTongue: { name: "Lengua de víboris", itemId: 36903, icon: "inv_misc_herb_evergreenmoss" },
  lichbloom: { name: "Flor exánime", itemId: 36905, icon: "inv_misc_herb_whispervine" },
  icethorn: { name: "Espina de hielo", itemId: 36906, icon: "inv_misc_herb_icethorn" },
  frostLotus: { name: "Loto de escarcha", itemId: 36908, icon: "inv_misc_herb_frostlotus" },
  cobaltOre: { name: "Mena de cobalto", itemId: 36909, icon: "inv_ore_cobalt" },
  saroniteOre: { name: "Mena de saronita", itemId: 36912, icon: "inv_ore_saronite_01" },
  titaniumOre: { name: "Mena de titanio", itemId: 36910, icon: "inv_ore_platinum_01" },
  cobaltBar: { name: "Barra de cobalto", itemId: 36916, icon: "inv_ingot_cobalt" },
  saroniteBar: { name: "Barra de saronita", itemId: 36913, icon: "inv_ingot_yoggthorite" },
  titaniumBar: { name: "Barra de titanio", itemId: 41163, icon: "inv_ingot_platinum" },
  boreanLeather: { name: "Cuero boreal", itemId: 33568, icon: "inv_misc_leatherscrap_19" },
  heavyBoreanLeather: { name: "Cuero boreal pesado", itemId: 38425, icon: "inv_misc_leatherscrap_19" },
  arcticFur: { name: "Pelaje ártico", itemId: 44128, icon: "inv_misc_pelt_14" },
  frostweave: { name: "Tejido de Escarcha", itemId: 33470, icon: "inv_fabric_soulcloth" },
  infiniteDust: { name: "Polvo infinito", itemId: 34054, icon: "inv_enchant_dustvision" },
  greaterCosmicEssence: { name: "Esencia cósmica superior", itemId: 34055, icon: "inv_enchant_essencecosmicgreater" },
  dreamShard: { name: "Fragmento onírico", itemId: 34052, icon: "inv_enchant_dreamshard_02" },
  crystallizedEarth: { name: "Tierra cristalizada", itemId: 37701, icon: "inv_elemental_crystal_earth" },
  crystallizedFire: { name: "Fuego cristalizado", itemId: 37702, icon: "inv_elemental_crystal_fire" },
  crystallizedWater: { name: "Agua cristalizada", itemId: 37705, icon: "inv_elemental_crystal_water" },
  crystallizedLife: { name: "Vida cristalizada", itemId: 37704, icon: "inv_elemental_crystal_life" },
  lightParchment: { name: "Pergamino ligero", itemId: 39354, icon: "inv_inscription_papyrus" },
  ivoryInk: { name: "Tinta de marfil", itemId: 37101, icon: "inv_inscription_inkwhite03" },
  midnightInk: { name: "Tinta de medianoche", itemId: 39774, icon: "inv_inscription_inkblack01" },
  lionsInk: { name: "Tinta de león", itemId: 43116, icon: "inv_inscription_inkyellow02" },
  jadefireInk: { name: "Tinta de fuego de jade", itemId: 43118, icon: "inv_inscription_inkgreen03" },
  celestialInk: { name: "Tinta celestial", itemId: 43120, icon: "inv_inscription_inkpurple03" },
  shimmeringInk: { name: "Tinta fulgurante", itemId: 43122, icon: "inv_inscription_inksilver01" },
  etherealInk: { name: "Tinta etérea", itemId: 43124, icon: "inv_inscription_inkpurple04" },
  inkOfTheSea: { name: "Tinta del mar", itemId: 43126, icon: "inv_inscription_inkbluewhite01" },
  snowfallInk: { name: "Tinta de avalancha", itemId: 43127, icon: "inv_inscription_inkpurple01" },
  northernSpices: { name: "Especias nórdicas", itemId: 43007, icon: "inv_misc_food_wheat_02" },
  chilledMeat: { name: "Carne fría", itemId: 43013, icon: "inv_misc_food_91" },
  rhinoMeat: { name: "Carne de rinoceronte", itemId: 43012, icon: "inv_misc_food_90" },
  succulentClam: { name: "Carne de almeja suculenta", itemId: 36782, icon: "inv_misc_food_51" },
  glacialSalmon: { name: "Salmón glacial", itemId: 41809, icon: "inv_misc_fish_67" },
};
