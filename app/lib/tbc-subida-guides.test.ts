import { describe, expect, it } from "vitest";
import { subidaRangeCoverage } from "./alchemy-midnight-route";
import { TBC_SUBIDA_GUIDES } from "./tbc-subida-guides";
import { TBC_SUBIDA_MATERIALS } from "./tbc-subida-materials";
import { TBC_SUBIDA_NPCS } from "./tbc-subida-npcs";
import { TBC_PROFESSION_CAP } from "./tbc-subida-types";

const TOKEN = /\{(r|i|n|h):([^}]+)\}/g;

describe("rutas de Subida nativa The Burning Crusade", () => {
  it.each(Object.keys(TBC_SUBIDA_GUIDES))(
    "%s cubre del 1 al tope sin tramos vacíos",
    (nativeId) => {
      const spec = TBC_SUBIDA_GUIDES[nativeId as keyof typeof TBC_SUBIDA_GUIDES];
      expect(subidaRangeCoverage(spec.ranges)).toEqual({
        start: 1,
        end: TBC_PROFESSION_CAP,
        gaps: [],
      });
    },
  );

  it.each(Object.keys(TBC_SUBIDA_GUIDES))(
    "%s solo usa materiales y NPCs del registro TBC",
    (nativeId) => {
      const spec = TBC_SUBIDA_GUIDES[nativeId as keyof typeof TBC_SUBIDA_GUIDES];
      expect(TBC_SUBIDA_NPCS[spec.trainerHordeKey]).toBeDefined();
      expect(TBC_SUBIDA_NPCS[spec.trainerAllianceKey]).toBeDefined();
      if (spec.vendorHordeKey) {
        expect(TBC_SUBIDA_NPCS[spec.vendorHordeKey]).toBeDefined();
      }
      if (spec.vendorAllianceKey) {
        expect(TBC_SUBIDA_NPCS[spec.vendorAllianceKey]).toBeDefined();
      }
      for (const extra of spec.extraNpcs ?? []) {
        expect(TBC_SUBIDA_NPCS[extra.key]).toBeDefined();
      }
      for (const item of spec.shopping) {
        expect(TBC_SUBIDA_MATERIALS[item.materialKey]).toBeDefined();
        if (item.vendorKey) {
          expect(TBC_SUBIDA_NPCS[item.vendorKey]).toBeDefined();
        }
      }

      const blobs = [
        ...spec.intro,
        spec.trainerNote,
        spec.tomtomNote,
        spec.shoppingNote,
        spec.racials,
        ...spec.ranges.flatMap((range) => [
          range.intro ?? "",
          ...range.steps.map((step) => step.text),
        ]),
      ];
      for (const blob of blobs) {
        for (const match of blob.matchAll(TOKEN)) {
          const [, kind, payload] = match;
          if (kind === "i") {
            expect(TBC_SUBIDA_MATERIALS[payload.split(":")[0]]).toBeDefined();
          } else if (kind === "n") {
            expect(TBC_SUBIDA_NPCS[payload]).toBeDefined();
          }
        }
      }
    },
  );
});
