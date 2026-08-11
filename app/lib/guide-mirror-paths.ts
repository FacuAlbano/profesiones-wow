/**
 * Mapeo (expansión, profesión) → ruta en el mirror de wow-professions.
 * Las guías se sirven desde public/guides-mirror/ (copiar desde wow-professions-mirror o wow-professions-mirror-cleaned).
 * Si una combinación tiene guía en React (ej. Alquimia TBC), se usa esa y no esta ruta.
 */

import type { ExpansionSlug } from "~/lib/constants";
import type { ProfessionSlug } from "~/lib/constants";

/** Ruta relativa a /guides-mirror/ (ej. "tbc/alchemy-leveling-guide-burning-crusade-classic/index.html") */
export const GUIDE_MIRROR_PATHS: Partial<Record<ExpansionSlug, Partial<Record<ProfessionSlug, string>>>> = {
  "the-burning-crusade": {
    alchemy: "tbc/alchemy-leveling-guide-burning-crusade-classic/index.html",
    blacksmithing: "tbc/blacksmithing-leveling-guide-burning-crusade-classic/index.html",
    cooking: "tbc/cooking-leveling-guide-tbc-classic/index.html",
    enchanting: "tbc/enchanting-leveling-guide-burning-crusade-classic/index.html",
    engineering: "tbc/engineering-leveling-guide-burning-crusade-classic/index.html",
    fishing: "tbc/fishing-leveling-guide-burning-crusade-classic/index.html",
    "fishing-cooking": "tbc/fishing-and-cooking-leveling-guide-burning-crusade-classic/index.html",
    herbalism: "tbc/herbalism-leveling-guide-tbc-classic/index.html",
    jewelcrafting: "tbc/jewelcrafting-leveling-guide-burning-crusade-classic/index.html",
    leatherworking: "tbc/leatherworking-leveling-guide-burning-crusade-classic/index.html",
    mining: "tbc/mining-leveling-guide-tbc-classic/index.html",
    skinning: "tbc/skinning-leveling-guide-tbc-classic/index.html",
    tailoring: "tbc/tailoring-leveling-guide-burning-crusade-classic/index.html",
  },
  "wrath-of-the-lich-king": {
    alchemy: "wotlk/alchemy-leveling-guide-wotlk-classic/index.html",
    blacksmithing: "wotlk/blacksmithing-leveling-guide-wotlk-classic/index.html",
    cooking: "wotlk/cooking-leveling-guide-wotlk-classic/index.html",
    enchanting: "wotlk/enchanting-leveling-guide-wotlk-classic/index.html",
    engineering: "wotlk/engineering-leveling-guide-wotlk-classic/index.html",
    fishing: "wotlk/fishing-leveling-guide-wotlk-classic/index.html",
    "fishing-cooking": "wotlk/fishing-and-cooking-leveling-guide-wotlk-classic/index.html",
    herbalism: "wotlk/herbalism-leveling-guide-wotlk-classic/index.html",
    inscription: "wotlk/inscription-leveling-guide-wotlk-classic/index.html",
    jewelcrafting: "wotlk/jewelcrafting-leveling-guide-wotlk-classic/index.html",
    leatherworking: "wotlk/leatherworking-leveling-guide-wotlk-classic/index.html",
    mining: "wotlk/mining-leveling-guide-wotlk-classic/index.html",
    skinning: "wotlk/skinning-leveling-guide-wotlk-classic/index.html",
    tailoring: "wotlk/tailoring-leveling-guide-wotlk-classic/index.html",
  },
  cataclysm: {
    alchemy: "cataclysm/alchemy-leveling-guide-cataclysm-classic/index.html",
    blacksmithing: "cataclysm/blacksmithing-leveling-guide-cataclysm-classic/index.html",
    cooking: "cataclysm/cooking-leveling-guide-cataclysm-classic/index.html",
    enchanting: "cataclysm/enchanting-leveling-guide-cataclysm-classic/index.html",
    engineering: "cataclysm/engineering-leveling-guide-cataclysm-classic/index.html",
    fishing: "cataclysm/fishing-leveling-guide-cataclysm-classic/index.html",
    "fishing-cooking": "cataclysm/fishing-and-cooking-leveling-guide-cataclysm-classic/index.html",
    herbalism: "cataclysm/herbalism-leveling-guide-cataclysm-classic/index.html",
    inscription: "cataclysm/inscription-leveling-guide-cataclysm-classic/index.html",
    jewelcrafting: "cataclysm/jewelcrafting-leveling-guide-cataclysm-classic/index.html",
    leatherworking: "cataclysm/leatherworking-leveling-guide-cataclysm-classic/index.html",
    mining: "cataclysm/mining-leveling-guide-cataclysm-classic/index.html",
    skinning: "cataclysm/skinning-leveling-guide-cataclysm-classic/index.html",
    tailoring: "cataclysm/tailoring-leveling-guide-cataclysm-classic/index.html",
  },
  "mists-of-pandaria": {
    alchemy: "mop/alchemy-leveling-guide-mop-classic/index.html",
    blacksmithing: "mop/blacksmithing-leveling-guide-mop-classic/index.html",
    cooking: "mop/cooking-leveling-guide-mop-classic/index.html",
    enchanting: "mop/enchanting-leveling-guide-mop-classic/index.html",
    engineering: "mop/engineering-leveling-guide-mop-classic/index.html",
    fishing: "mop/fishing-leveling-guide-and-overview/index.html",
    herbalism: "mop/herbalism-leveling-guide-mop-classic/index.html",
    inscription: "mop/inscription-leveling-guide-mop-classic/index.html",
    jewelcrafting: "mop/jewelcrafting-leveling-guide-mop-classic/index.html",
    leatherworking: "mop/leatherworking-leveling-guide-mop-classic/index.html",
    mining: "mop/mining-leveling-guide-mop-classic/index.html",
    skinning: "mop/skinning-leveling-guide-mop-classic/index.html",
    tailoring: "mop/tailoring-leveling-guide-mop-classic/index.html",
  },
  classic: {
    alchemy: "classic/alchemy-leveling-guide-classic-wow/index.html",
    blacksmithing: "classic/blacksmithing-leveling-guide-classic-wow/index.html",
    cooking: "classic/cooking-leveling-guide-classic-wow/index.html",
    enchanting: "classic/enchanting-leveling-guide-classic-wow/index.html",
    engineering: "classic/engineering-leveling-guide-classic-wow/index.html",
    fishing: "classic/fishing-leveling-guide-classic-wow/index.html",
    "fishing-cooking": "classic/fishing-and-cooking-leveling-guide-classic-wow/index.html",
    herbalism: "classic/herbalism-leveling-guide-classic-wow/index.html",
    leatherworking: "classic/leatherworking-leveling-guide-classic-wow/index.html",
    mining: "classic/mining-leveling-guide-classic-wow/index.html",
    skinning: "classic/skinning-leveling-guide-classic-wow/index.html",
    tailoring: "classic/tailoring-leveling-guide-classic-wow/index.html",
  },
  midnight: {
    alchemy: "midnight/alchemy-guide/index.html",
    blacksmithing: "midnight/blacksmithing-guide/index.html",
    enchanting: "midnight/enchanting-guide/index.html",
    inscription: "midnight/inscription-guide/index.html",
    jewelcrafting: "midnight/jewelcrafting-guide/index.html",
    leatherworking: "midnight/leatherworking-guide/index.html",
    tailoring: "midnight/tailoring-guide/index.html",
  },
  "the-war-within": {
    alchemy: "the-war-within/khaz-algar-alchemy-leveling-guide/index.html",
    blacksmithing: "the-war-within/khaz-algar-blacksmithing-leveling-guide/index.html",
    cooking: "the-war-within/khaz-algar-cooking-leveling-guide/index.html",
    enchanting: "the-war-within/khaz-algar-enchanting-leveling-guide/index.html",
    herbalism: "the-war-within/khaz-algar-herbalism-leveling-guide/index.html",
    inscription: "the-war-within/khaz-algar-inscription-leveling-guide/index.html",
    jewelcrafting: "the-war-within/khaz-algar-jewelcrafting-leveling-guide/index.html",
    leatherworking: "the-war-within/khaz-algar-leatherworking-leveling-guide/index.html",
    mining: "the-war-within/khaz-algar-mining-leveling-guide/index.html",
    skinning: "the-war-within/khaz-algar-skinning-leveling-guide/index.html",
    tailoring: "the-war-within/khaz-algar-tailoring-leveling-guide/index.html",
  },
  "battle-for-azeroth": {
    alchemy: "guides/bfa-alchemy/index.html",
    blacksmithing: "guides/bfa-blacksmithing/index.html",
    enchanting: "guides/bfa-enchanting/index.html",
    engineering: "guides/bfa-engineering/index.html",
    inscription: "guides/bfa-inscription/index.html",
    jewelcrafting: "guides/bfa-jewelcrafting/index.html",
    leatherworking: "guides/bfa-leatherworking/index.html",
    tailoring: "guides/bfa-tailoring/index.html",
  },
  shadowlands: {
    blacksmithing: "guides/shadowlands-blacksmithing-guide/index.html",
    enchanting: "guides/shadowlands-enchanting-guide/index.html",
    engineering: "guides/shadowlands-engineering-guide/index.html",
    inscription: "guides/shadowlands-inscription-guide/index.html",
    jewelcrafting: "guides/shadowlands-jewelcrafting-guide/index.html",
    leatherworking: "guides/shadowlands-leatherworking-guide/index.html",
    tailoring: "guides/shadowlands-tailoring-guide/index.html",
  },
};

const BASE = "/guides-mirror";

/** URL pública de la guía en el mirror (para iframe o enlace). */
export function guideMirrorUrl(expansionSlug: ExpansionSlug, professionSlug: ProfessionSlug): string | null {
  const expansionPaths = GUIDE_MIRROR_PATHS[expansionSlug];
  if (!expansionPaths) return null;
  const path = expansionPaths[professionSlug];
  if (!path) return null;
  return `${BASE}/${path}`;
}

