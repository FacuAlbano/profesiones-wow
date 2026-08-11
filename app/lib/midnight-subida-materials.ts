/**
 * Materiales compartidos de las Subidas nativas de Midnight.
 * Nombres = Wowhead ES.
 */

import type { MaterialEntry } from "~/lib/guide-types";
import { ALCHEMY_MIDNIGHT_MATERIALS } from "~/lib/alchemy-midnight-materials";

export const MIDNIGHT_SUBIDA_MATERIALS: Record<string, MaterialEntry> = {
  ...ALCHEMY_MIDNIGHT_MATERIALS,
  refulgentCopperOre: {
    name: "Mena de cobre refulgente",
    itemId: 237359,
    icon: "inv_ore_refulgentcopper",
  },
  refulgentCopperIngot: {
    name: "Lingote de cobre refulgente",
    itemId: 238197,
    icon: "inv_12_profession_blacksmithing_blacksmithingalloys_thoriuminfused",
  },
  brilliantSilverOre: {
    name: "Mena de plata brillante",
    itemId: 237364,
    icon: "inv_ore_brilliantsilver",
  },
  umbralTinOre: {
    name: "Mena de estaño umbrío",
    itemId: 237362,
    icon: "inv_ore_umbraltin",
  },
  duskshroudedStone: {
    name: "Piedra velocrepúsculo",
    itemId: 242788,
    icon: "inv_12_profession_jewelcrafting_stone_reagent_raw_purple",
  },
  luminantFlux: {
    name: "Flujo luminiscente",
    itemId: 243060,
    icon: "inv_10_blacksmithing_craftedoptional_blacksmithdye_fire",
  },
  blacksmithHammer: {
    name: "Martillo de herrero",
    itemId: 5956,
    icon: "inv_hammer_20",
  },
  eversingingDust: {
    name: "Polvo cantoeterno",
    itemId: 243599,
    icon: "inv_12_profession_enchanting_enchantingdust_green",
  },
  radiantShard: {
    name: "Fragmento radiante",
    itemId: 243602,
    icon: "inv_12_profession_enchanting_enchantingshard_blue",
  },
  refulgentCopperRod: {
    name: "Vara de cobre refulgente",
    itemId: 244174,
    icon: "inv_misc_1h_enchantingbloodelf_b_01",
  },
  enchantingVellum: {
    name: "Vitela de encantamiento",
    itemId: 38682,
    icon: "inv_inscription_armorscroll01",
  },
  evercore: {
    name: "Núcleo eterno",
    itemId: 243581,
    icon: "inv_12_profession_engineering_manufacturedparts_battery_purple",
  },
  soulSprocket: {
    name: "Piñón de almas",
    itemId: 243576,
    icon: "inv_12_profession_engineering_manufacturedparts_lightbulb_purple",
  },
  aetherlume: {
    name: "Eterluminiscencia",
    itemId: 243578,
    icon: "inv_10_engineering_manufacturedparts_electricalparts_color2",
  },
  voidTemperedLeather: {
    name: "Cuero templado por el Vacío",
    itemId: 238511,
    icon: "inv_12_profession_skinning_thalassianleather_brown",
  },
  voidTemperedScales: {
    name: "Escamas templadas por el Vacío",
    itemId: 238513,
    icon: "inv_12_profession_skinning_thalassianscale_violet",
  },
  voidTemperedHide: {
    name: "Pellejo templado por el Vacío",
    itemId: 238518,
    icon: "inv_12_profession_skinning_thalassianhide_brown",
  },
  voidTemperedPlating: {
    name: "Blindaje templado por el Vacío",
    itemId: 238520,
    icon: "inv_12_profession_skinning_pristinescale_violet",
  },
  peerlessPlumage: {
    name: "Plumaje incomparable",
    itemId: 238522,
    icon: "inv_12_profession_skinning_animalparts_feathers",
  },
  carvingCanine: {
    name: "Canino trinchante",
    itemId: 238523,
    icon: "inv_12_profession_skinning_animalparts_tetth",
  },
  fantasticFur: {
    name: "Pelaje fantástico",
    itemId: 238525,
    icon: "inv_misc_pelt_13",
  },
  silverleafThread: {
    name: "Hilo de hojaplata",
    itemId: 251665,
    icon: "inv_12_profession_tailoring_tailoringspecializations_fiberarts",
  },
  brightLinen: {
    name: "Lino brillante",
    itemId: 236963,
    icon: "inv_12_profession_tailoring_commoncloth_orange",
  },
  brightLinenBolt: {
    name: "Rollo de lino brillante",
    itemId: 239701,
    icon: "inv_12_profession_tailoring_commonclothbolt_orange",
  },
  imbuedBrightLinenBolt: {
    name: "Rollo de lino brillante imbuido",
    itemId: 239702,
    icon: "inv_12_profession_tailoring_commonclothbolt_arcane",
  },
  embroideryFloss: {
    name: "Filamento de bordado",
    itemId: 251691,
    icon: "inv_12_profession_tailoring_spellthread_blue",
  },
  sunfireSilk: {
    name: "Seda de fuego solar",
    itemId: 237015,
    icon: "inv_12_profession_tailoring_rarecloth_gold",
  },
  arcanoweave: {
    name: "Tejido Arcano",
    itemId: 237018,
    icon: "inv_12_profession_tailoring_rarecloth_purple",
  },
  glimmeringGemdust: {
    name: "Polvo de gema de luz trémula",
    itemId: 242620,
    icon: "inv_12_profession_jewelcrafting_gem_dust_red",
  },
  crystallineGlass: {
    name: "Vidrio cristalino",
    itemId: 242786,
    icon: "inv_12_profession_jewelcrafting_glass_reagent_raw_blue",
  },
  sanguineGarnet: {
    name: "Granate sanguino",
    itemId: 242553,
    icon: "inv_12_profession_jewelcrafting_uncommon_gem_uncut_red",
  },
  tenebrousAmethyst: {
    name: "Amatista tenebrosa",
    itemId: 242606,
    icon: "inv_12_profession_jewelcrafting_uncommon_gem_uncut_purple",
  },
  harandarPeridot: {
    name: "Peridoto de Harandar",
    itemId: 242607,
    icon: "inv_12_profession_jewelcrafting_uncommon_gem_uncut_green",
  },
  amaniLapis: {
    name: "Lapislázuli Amani",
    itemId: 242554,
    icon: "inv_12_profession_jewelcrafting_uncommon_gem_uncut_blue",
  },
  jewelerToolset: {
    name: "Herramientas de joyero",
    itemId: 20815,
    icon: "inv_box_02",
  },
  petrifiedRoot: {
    name: "Raíz petrificada",
    itemId: 251285,
    icon: "inv_misc_herb_liferoot_stem",
  },
  butterStick: {
    name: "Un cacho de mantequilla de toda la vida",
    itemId: 242643,
    icon: "inv_misc_food_vendor_blackpepper",
  },
  pouchOfSpices: {
    name: "Faltriquera de especias",
    itemId: 242646,
    icon: "inv_enchant_dustspirit",
  },
  plantProtein: {
    name: "Proteína vegetal",
    itemId: 242640,
    icon: "inv_12_profession_cooking_rootlandsbeastiary_yellowgreen",
  },
  eversongTrout: {
    name: "Trucha de Canción Eterna",
    itemId: 238383,
    icon: "inv_fishing_lanesnapper",
  },
  restoredSongfish: {
    name: "Pecicanto restaurado",
    itemId: 238372,
    icon: "inv_misc_fish_36",
  },
  thalassianFilet: {
    name: "Filete thalassiano",
    itemId: 253403,
    icon: "inv_fishing_innards_meat_sleeper",
  },
  lynxfish: {
    name: "Pecelince",
    itemId: 238366,
    icon: "inv_12_profession_fishing_lynxfish_yellow",
  },
};
