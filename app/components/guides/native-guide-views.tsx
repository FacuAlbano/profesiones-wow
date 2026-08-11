import type { ComponentType } from "react";
import type { GuideIndexSection } from "~/lib/guide-types";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import {
  AlchemyMidnightGuide,
  ALCHEMY_MIDNIGHT_INDEX,
} from "~/components/guides/alchemy-midnight-guide";
import { AlchemyTBCGuide, ALCHEMY_TBC_INDEX } from "~/components/guides/alchemy-tbc-guide";
import { HerbalismTBCGuide, HERBALISM_TBC_INDEX } from "~/components/guides/herbalism-tbc-guide";
import {
  MidnightSubidaGuide,
  midnightSubidaIndex,
} from "~/components/guides/midnight-subida-guide";
import {
  ShadowlandsTailoringGuide,
  SHADOWLANDS_TAILORING_INDEX,
} from "~/components/guides/shadowlands-tailoring-guide";
import { MIDNIGHT_SUBIDA_GUIDES } from "~/lib/midnight-subida-guides";
import type { MidnightSubidaSpec } from "~/lib/midnight-subida-types";
import { TbcSubidaGuide, tbcSubidaIndex } from "~/components/guides/tbc-subida-guide";
import { TBC_SUBIDA_GUIDES } from "~/lib/tbc-subida-guides";
import type { TbcSubidaSpec } from "~/lib/tbc-subida-types";
import { TwwSubidaGuide, twwSubidaIndex } from "~/components/guides/tww-subida-guide";
import { TWW_SUBIDA_GUIDES } from "~/lib/tww-subida-guides";
import type { TwwSubidaSpec } from "~/lib/tww-subida-types";
import { WotlkSubidaGuide, wotlkSubidaIndex } from "~/components/guides/wotlk-subida-guide";
import { WOTLK_SUBIDA_GUIDES } from "~/lib/wotlk-subida-guides";
import type { WotlkSubidaSpec } from "~/lib/wotlk-subida-types";

export type NativeGuideView = {
  Guide: ComponentType;
  index: GuideIndexSection[];
  summary: string;
};

function midnightSubidaView(spec: MidnightSubidaSpec): NativeGuideView {
  return {
    Guide: function MidnightNativeGuide() {
      return <MidnightSubidaGuide spec={spec} />;
    },
    index: midnightSubidaIndex(spec),
    summary:
      "Subida de nivel 1-100 para Midnight. Lista de compras, entrenador y ruta por rangos.",
  };
}

function tbcSubidaView(spec: TbcSubidaSpec): NativeGuideView {
  return {
    Guide: function TbcNativeGuide() {
      return <TbcSubidaGuide spec={spec} />;
    },
    index: tbcSubidaIndex(spec),
    summary:
      "Subida de nivel 1-375 para The Burning Crusade. Lista de compras, entrenadores y ruta por rangos.",
  };
}

function wotlkSubidaView(spec: WotlkSubidaSpec): NativeGuideView {
  return {
    Guide: function WotlkNativeGuide() {
      return <WotlkSubidaGuide spec={spec} />;
    },
    index: wotlkSubidaIndex(spec),
    summary:
      "Subida de nivel 1-450 para Wrath of the Lich King. Lista de compras, entrenadores y ruta por rangos.",
  };
}

function twwSubidaView(spec: TwwSubidaSpec): NativeGuideView {
  const cap = spec.ranges.at(-1)?.to ?? 100;
  return {
    Guide: function TwwNativeGuide() {
      return <TwwSubidaGuide spec={spec} />;
    },
    index: twwSubidaIndex(spec),
    summary: `Subida de nivel 1-${cap} para The War Within. Lista de compras, entrenador y ruta por rangos.`,
  };
}

export const NATIVE_GUIDE_VIEWS: Record<NativeGuideId, NativeGuideView> = {
  "alchemy-tbc": {
    Guide: AlchemyTBCGuide,
    index: ALCHEMY_TBC_INDEX,
    summary:
      "Subida de nivel 1-375 para The Burning Crusade. Lista de compras, entrenadores y ruta por rangos.",
  },
  "alchemy-midnight": {
    Guide: AlchemyMidnightGuide,
    index: ALCHEMY_MIDNIGHT_INDEX,
    summary:
      "Subida de nivel 1-100 para Midnight. Lista de compras, entrenador y ruta por rangos.",
  },
  "herbalism-tbc": {
    Guide: HerbalismTBCGuide,
    index: HERBALISM_TBC_INDEX,
    summary:
      "Subida de nivel 1-375 para The Burning Crusade. Instructores y rutas por rangos de herboristería.",
  },
  "blacksmithing-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["blacksmithing-tbc"]),
  "enchanting-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["enchanting-tbc"]),
  "engineering-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["engineering-tbc"]),
  "leatherworking-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["leatherworking-tbc"]),
  "tailoring-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["tailoring-tbc"]),
  "mining-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["mining-tbc"]),
  "skinning-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["skinning-tbc"]),
  "cooking-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["cooking-tbc"]),
  "fishing-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["fishing-tbc"]),
  "jewelcrafting-tbc": tbcSubidaView(TBC_SUBIDA_GUIDES["jewelcrafting-tbc"]),
  "tailoring-shadowlands": {
    Guide: ShadowlandsTailoringGuide,
    index: SHADOWLANDS_TAILORING_INDEX,
    summary:
      "Resumen de Sastrería en Shadowlands: instructor, materiales, bases legendarias, armaduras y bolsas en español.",
  },
  "blacksmithing-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["blacksmithing-midnight"]),
  "enchanting-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["enchanting-midnight"]),
  "engineering-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["engineering-midnight"]),
  "leatherworking-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["leatherworking-midnight"]),
  "tailoring-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["tailoring-midnight"]),
  "herbalism-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["herbalism-midnight"]),
  "mining-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["mining-midnight"]),
  "skinning-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["skinning-midnight"]),
  "cooking-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["cooking-midnight"]),
  "jewelcrafting-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["jewelcrafting-midnight"]),
  "fishing-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["fishing-midnight"]),
  "inscription-midnight": midnightSubidaView(MIDNIGHT_SUBIDA_GUIDES["inscription-midnight"]),
  "alchemy-tww": twwSubidaView(TWW_SUBIDA_GUIDES["alchemy-tww"]),
  "blacksmithing-tww": twwSubidaView(TWW_SUBIDA_GUIDES["blacksmithing-tww"]),
  "enchanting-tww": twwSubidaView(TWW_SUBIDA_GUIDES["enchanting-tww"]),
  "engineering-tww": twwSubidaView(TWW_SUBIDA_GUIDES["engineering-tww"]),
  "leatherworking-tww": twwSubidaView(TWW_SUBIDA_GUIDES["leatherworking-tww"]),
  "tailoring-tww": twwSubidaView(TWW_SUBIDA_GUIDES["tailoring-tww"]),
  "herbalism-tww": twwSubidaView(TWW_SUBIDA_GUIDES["herbalism-tww"]),
  "mining-tww": twwSubidaView(TWW_SUBIDA_GUIDES["mining-tww"]),
  "skinning-tww": twwSubidaView(TWW_SUBIDA_GUIDES["skinning-tww"]),
  "cooking-tww": twwSubidaView(TWW_SUBIDA_GUIDES["cooking-tww"]),
  "jewelcrafting-tww": twwSubidaView(TWW_SUBIDA_GUIDES["jewelcrafting-tww"]),
  "fishing-tww": twwSubidaView(TWW_SUBIDA_GUIDES["fishing-tww"]),
  "inscription-tww": twwSubidaView(TWW_SUBIDA_GUIDES["inscription-tww"]),
  "alchemy-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["alchemy-wotlk"]),
  "blacksmithing-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["blacksmithing-wotlk"]),
  "enchanting-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["enchanting-wotlk"]),
  "engineering-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["engineering-wotlk"]),
  "leatherworking-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["leatherworking-wotlk"]),
  "tailoring-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["tailoring-wotlk"]),
  "herbalism-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["herbalism-wotlk"]),
  "mining-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["mining-wotlk"]),
  "skinning-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["skinning-wotlk"]),
  "cooking-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["cooking-wotlk"]),
  "jewelcrafting-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["jewelcrafting-wotlk"]),
  "fishing-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["fishing-wotlk"]),
  "inscription-wotlk": wotlkSubidaView(WOTLK_SUBIDA_GUIDES["inscription-wotlk"]),
};
