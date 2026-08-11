import { describe, expect, it } from "vitest";
import { ALCHEMY_MIDNIGHT_MATERIALS } from "./alchemy-midnight-materials";
import {
  ALCHEMY_MIDNIGHT_RANGES,
  ALCHEMY_MIDNIGHT_SHOPPING,
  MIDNIGHT_ALCHEMY_CAP,
  subidaRangeCoverage,
} from "./alchemy-midnight-route";

describe("ruta de Subida de nivel de Alquimia Midnight", () => {
  it("cubre del 1 al tope sin tramos vacíos", () => {
    expect(subidaRangeCoverage(ALCHEMY_MIDNIGHT_RANGES)).toEqual({
      start: 1,
      end: MIDNIGHT_ALCHEMY_CAP,
      gaps: [],
    });
  });

  it("la lista de compras solo usa materiales del registro Midnight", () => {
    for (const item of ALCHEMY_MIDNIGHT_SHOPPING) {
      expect(ALCHEMY_MIDNIGHT_MATERIALS[item.materialKey]).toBeDefined();
    }
  });
});
