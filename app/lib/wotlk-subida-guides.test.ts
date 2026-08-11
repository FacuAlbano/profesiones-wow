import { describe, expect, it } from "vitest";
import { subidaRangeCoverage } from "./alchemy-midnight-route";
import { WOTLK_SUBIDA_GUIDES } from "./wotlk-subida-guides";
import { WOTLK_SUBIDA_MATERIALS } from "./wotlk-subida-materials";
import { WOTLK_SUBIDA_NPCS } from "./wotlk-subida-npcs";
import { WOTLK_PROFESSION_CAP } from "./wotlk-subida-types";

const TOKEN = /\{(r|i|n|h):([^}]+)\}/g;

describe("rutas de Subida nativa Wrath of the Lich King", () => {
  it.each(Object.keys(WOTLK_SUBIDA_GUIDES))(
    "%s cubre del 1 al tope sin tramos vacíos",
    (nativeId) => {
      const spec = WOTLK_SUBIDA_GUIDES[nativeId as keyof typeof WOTLK_SUBIDA_GUIDES];
      expect(subidaRangeCoverage(spec.ranges)).toEqual({
        start: 1,
        end: WOTLK_PROFESSION_CAP,
        gaps: [],
      });
    },
  );

  it.each(Object.keys(WOTLK_SUBIDA_GUIDES))(
    "%s solo usa materiales y NPCs del registro WotLK",
    (nativeId) => {
      const spec = WOTLK_SUBIDA_GUIDES[nativeId as keyof typeof WOTLK_SUBIDA_GUIDES];
      expect(WOTLK_SUBIDA_NPCS[spec.trainerHordeKey]).toBeDefined();
      expect(WOTLK_SUBIDA_NPCS[spec.trainerAllianceKey]).toBeDefined();
      for (const extra of spec.extraNpcs ?? []) {
        expect(WOTLK_SUBIDA_NPCS[extra.key]).toBeDefined();
      }
      for (const item of spec.shopping) {
        expect(WOTLK_SUBIDA_MATERIALS[item.materialKey]).toBeDefined();
        if (item.vendorKey) {
          expect(WOTLK_SUBIDA_NPCS[item.vendorKey]).toBeDefined();
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
            expect(WOTLK_SUBIDA_MATERIALS[payload.split(":")[0]]).toBeDefined();
          } else if (kind === "n") {
            expect(WOTLK_SUBIDA_NPCS[payload]).toBeDefined();
          } else if (kind === "r" || kind === "h") {
            const [id, name] = payload.split("|");
            expect(Number(id)).toBeGreaterThan(0);
            expect(name).toBeTruthy();
          }
        }
      }
    },
  );

  it.each([
    "alchemy-wotlk",
    "blacksmithing-wotlk",
    "enchanting-wotlk",
    "engineering-wotlk",
    "leatherworking-wotlk",
    "tailoring-wotlk",
    "cooking-wotlk",
    "jewelcrafting-wotlk",
    "inscription-wotlk",
  ])("%s presenta recetas Wowhead en el tramo Norte", (nativeId) => {
    const spec = WOTLK_SUBIDA_GUIDES[nativeId as keyof typeof WOTLK_SUBIDA_GUIDES];
    const north = spec.ranges
      .filter((range) => range.from >= 350)
      .flatMap((range) => range.steps.map((step) => step.text))
      .join("\n");
    expect(north).toMatch(/\{r:\d+\|/);
  });
});
