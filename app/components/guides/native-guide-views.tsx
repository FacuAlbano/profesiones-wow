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
      "Guía de nivelado 1-375 para TBC Classic. Instructores y rutas por rangos de herboristería.",
  },
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
};
