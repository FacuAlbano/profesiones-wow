import { describe, expect, it } from "vitest";
import { subidaRangeCoverage } from "./alchemy-midnight-route";
import { WAVE_SUBIDA_BUNDLES } from "./wave-subida-guides";

const TOKEN = /\{(r|i|n|h):([^}]+)\}/g;

describe("rutas de Subida nativa oleadas #71-#181", () => {
  it("registra las 110 combinaciones nuevas (sin pisar Sastrería Shadowlands)", () => {
    const ids = WAVE_SUBIDA_BUNDLES.map((bundle) => bundle.spec.nativeId);
    expect(ids).toContain("alchemy-cata");
    expect(ids).toContain("inscription-mop-classic");
    expect(ids).toContain("alchemy-classic-era");
    expect(ids).not.toContain("tailoring-shadowlands");
    expect(ids).toHaveLength(110);
  });

  it.each(WAVE_SUBIDA_BUNDLES.map((bundle) => bundle.spec.nativeId))(
    "%s cubre del 1 al tope sin tramos vacíos",
    (nativeId) => {
      const bundle = WAVE_SUBIDA_BUNDLES.find((item) => item.spec.nativeId === nativeId);
      expect(bundle).toBeDefined();
      const spec = bundle!.spec;
      const end = spec.ranges.at(-1)?.to;
      expect(subidaRangeCoverage(spec.ranges)).toEqual({
        start: 1,
        end,
        gaps: [],
      });
    },
  );

  it.each(WAVE_SUBIDA_BUNDLES.map((bundle) => bundle.spec.nativeId))(
    "%s solo usa materiales y NPCs de su registro",
    (nativeId) => {
      const bundle = WAVE_SUBIDA_BUNDLES.find((item) => item.spec.nativeId === nativeId)!;
      const { spec, materials, npcs } = bundle;
      expect(npcs[spec.trainerHordeKey]).toBeDefined();
      expect(npcs[spec.trainerAllianceKey]).toBeDefined();
      for (const item of spec.shopping) {
        expect(materials[item.materialKey]).toBeDefined();
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
            expect(materials[payload.split(":")[0]]).toBeDefined();
          } else if (kind === "n") {
            expect(npcs[payload]).toBeDefined();
          } else if (kind === "r" || kind === "h") {
            const [id, name] = payload.split("|");
            expect(Number(id)).toBeGreaterThan(0);
            expect(name).toBeTruthy();
          }
        }
      }
    },
  );
});
