import { describe, expect, it } from "vitest";
import { subidaRangeCoverage } from "./alchemy-midnight-route";
import { TWW_FISHING_CAP, TWW_PROFESSION_CAP } from "./tww-subida-types";
import { TWW_SUBIDA_GUIDES } from "./tww-subida-guides";
import { TWW_SUBIDA_MATERIALS } from "./tww-subida-materials";
import { TWW_SUBIDA_NPCS } from "./tww-subida-npcs";

describe("rutas de Subida nativa The War Within", () => {
  it.each(Object.keys(TWW_SUBIDA_GUIDES))(
    "%s cubre del 1 al tope sin tramos vacíos",
    (nativeId) => {
      const spec = TWW_SUBIDA_GUIDES[nativeId as keyof typeof TWW_SUBIDA_GUIDES];
      const cap = nativeId === "fishing-tww" ? TWW_FISHING_CAP : TWW_PROFESSION_CAP;
      expect(subidaRangeCoverage(spec.ranges)).toEqual({
        start: 1,
        end: cap,
        gaps: [],
      });
    },
  );

  it.each(Object.keys(TWW_SUBIDA_GUIDES))(
    "%s solo usa materiales y NPCs del registro The War Within",
    (nativeId) => {
      const spec = TWW_SUBIDA_GUIDES[nativeId as keyof typeof TWW_SUBIDA_GUIDES];
      expect(TWW_SUBIDA_NPCS[spec.trainerKey]).toBeDefined();
      if (spec.vendorKey) {
        expect(TWW_SUBIDA_NPCS[spec.vendorKey]).toBeDefined();
      }
      for (const extra of spec.extraNpcs ?? []) {
        expect(TWW_SUBIDA_NPCS[extra.key]).toBeDefined();
      }
      for (const item of spec.shopping) {
        expect(TWW_SUBIDA_MATERIALS[item.materialKey]).toBeDefined();
        if (item.vendorKey) {
          expect(TWW_SUBIDA_NPCS[item.vendorKey]).toBeDefined();
        }
      }
    },
  );
});
