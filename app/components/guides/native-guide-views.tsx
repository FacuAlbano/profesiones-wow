import type { ComponentType } from "react";
import type { GuideIndexSection } from "~/lib/guide-types";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import { AlchemyTBCGuide, ALCHEMY_TBC_INDEX } from "~/components/guides/alchemy-tbc-guide";
import { HerbalismTBCGuide, HERBALISM_TBC_INDEX } from "~/components/guides/herbalism-tbc-guide";
import {
  ShadowlandsTailoringGuide,
  SHADOWLANDS_TAILORING_INDEX,
} from "~/components/guides/shadowlands-tailoring-guide";

export type NativeGuideView = {
  Guide: ComponentType;
  index: GuideIndexSection[];
  summary: string;
};

export const NATIVE_GUIDE_VIEWS: Record<NativeGuideId, NativeGuideView> = {
  "alchemy-tbc": {
    Guide: AlchemyTBCGuide,
    index: ALCHEMY_TBC_INDEX,
    summary:
      "Guía de nivelado 1-375 para TBC Classic. Lista de compras, instructores y pasos por rangos.",
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
};
