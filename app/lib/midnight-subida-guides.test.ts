import { describe, expect, it } from "vitest";
import { MIDNIGHT_ALCHEMY_CAP, subidaRangeCoverage } from "./alchemy-midnight-route";
import { MIDNIGHT_SUBIDA_GUIDES } from "./midnight-subida-guides";
import { MIDNIGHT_SUBIDA_MATERIALS } from "./midnight-subida-materials";
import { MIDNIGHT_SUBIDA_NPCS } from "./midnight-subida-npcs";

describe("rutas de Subida nativa Midnight", () => {
  it.each(Object.keys(MIDNIGHT_SUBIDA_GUIDES))(
    "%s cubre del 1 al tope sin tramos vacíos",
    (nativeId) => {
      const spec = MIDNIGHT_SUBIDA_GUIDES[nativeId as keyof typeof MIDNIGHT_SUBIDA_GUIDES];
      expect(subidaRangeCoverage(spec.ranges)).toEqual({
        start: 1,
        end: MIDNIGHT_ALCHEMY_CAP,
        gaps: [],
      });
    },
  );

  it.each(Object.keys(MIDNIGHT_SUBIDA_GUIDES))(
    "%s solo usa materiales y NPCs del registro Midnight",
    (nativeId) => {
      const spec = MIDNIGHT_SUBIDA_GUIDES[nativeId as keyof typeof MIDNIGHT_SUBIDA_GUIDES];
      expect(MIDNIGHT_SUBIDA_NPCS[spec.trainerKey]).toBeDefined();
      if (spec.vendorKey) {
        expect(MIDNIGHT_SUBIDA_NPCS[spec.vendorKey]).toBeDefined();
      }
      for (const item of spec.shopping) {
        expect(MIDNIGHT_SUBIDA_MATERIALS[item.materialKey]).toBeDefined();
      }
    },
  );
});
