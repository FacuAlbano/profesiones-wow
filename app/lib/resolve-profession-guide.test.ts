import { describe, expect, it } from "vitest";
import { parseGuideTipo, resolveProfessionGuide } from "./resolve-profession-guide";

describe("resolveProfessionGuide", () => {
  it("resuelve Alquimia TBC omitiendo tipo como Subida de nivel nativa", () => {
    expect(
      resolveProfessionGuide("the-burning-crusade", "alchemy"),
    ).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
      path: "/expansion/the-burning-crusade/profesion/alchemy",
      nativeId: "alchemy-tbc",
    });
  });

  it("resuelve Alquimia Midnight como Subida de nivel nativa", () => {
    expect(
      resolveProfessionGuide("midnight", "alchemy"),
    ).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
      path: "/expansion/midnight/profesion/alchemy",
      nativeId: "alchemy-midnight",
    });
  });

  it.each([
    ["blacksmithing", "blacksmithing-midnight"],
    ["enchanting", "enchanting-midnight"],
    ["engineering", "engineering-midnight"],
    ["leatherworking", "leatherworking-midnight"],
    ["tailoring", "tailoring-midnight"],
    ["herbalism", "herbalism-midnight"],
    ["mining", "mining-midnight"],
    ["skinning", "skinning-midnight"],
    ["cooking", "cooking-midnight"],
    ["jewelcrafting", "jewelcrafting-midnight"],
    ["fishing", "fishing-midnight"],
    ["inscription", "inscription-midnight"],
  ] as const)("resuelve %s Midnight como Subida de nivel nativa", (profession, nativeId) => {
    expect(resolveProfessionGuide("midnight", profession)).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
      path: `/expansion/midnight/profesion/${profession}`,
      nativeId,
    });
  });

  it.each([
    ["alchemy", "alchemy-tww"],
    ["blacksmithing", "blacksmithing-tww"],
    ["enchanting", "enchanting-tww"],
    ["engineering", "engineering-tww"],
    ["leatherworking", "leatherworking-tww"],
    ["tailoring", "tailoring-tww"],
    ["herbalism", "herbalism-tww"],
    ["mining", "mining-tww"],
    ["skinning", "skinning-tww"],
    ["cooking", "cooking-tww"],
    ["jewelcrafting", "jewelcrafting-tww"],
    ["fishing", "fishing-tww"],
    ["inscription", "inscription-tww"],
  ] as const)("resuelve %s The War Within como Subida de nivel nativa", (profession, nativeId) => {
    expect(resolveProfessionGuide("the-war-within", profession)).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
      path: `/expansion/the-war-within/profesion/${profession}`,
      nativeId,
    });
  });

  it("deja Recetas y conocimiento de Alquimia The War Within como vacío", () => {
    expect(
      resolveProfessionGuide("the-war-within", "alchemy", "recetas-y-conocimiento"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "recetas-y-conocimiento",
    });
  });

  it("deja Recetas y conocimiento de Herrería Midnight como vacío", () => {
    expect(
      resolveProfessionGuide("midnight", "blacksmithing", "recetas-y-conocimiento"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "recetas-y-conocimiento",
    });
  });

  it("deja Recetas y conocimiento de Alquimia Midnight como vacío", () => {
    expect(
      resolveProfessionGuide("midnight", "alchemy", "recetas-y-conocimiento"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "recetas-y-conocimiento",
      path: "/expansion/midnight/profesion/alchemy/recetas-y-conocimiento",
    });
  });

  it.each([
    ["blacksmithing", "blacksmithing-tbc"],
    ["enchanting", "enchanting-tbc"],
    ["engineering", "engineering-tbc"],
    ["leatherworking", "leatherworking-tbc"],
    ["tailoring", "tailoring-tbc"],
    ["mining", "mining-tbc"],
    ["skinning", "skinning-tbc"],
    ["cooking", "cooking-tbc"],
    ["fishing", "fishing-tbc"],
    ["jewelcrafting", "jewelcrafting-tbc"],
  ] as const)("resuelve %s The Burning Crusade como Subida de nivel nativa", (profession, nativeId) => {
    expect(resolveProfessionGuide("the-burning-crusade", profession)).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
      path: `/expansion/the-burning-crusade/profesion/${profession}`,
      nativeId,
    });
  });

  it("deja Recetas y conocimiento de Herrería The Burning Crusade como vacío", () => {
    expect(
      resolveProfessionGuide("the-burning-crusade", "blacksmithing", "recetas-y-conocimiento"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "recetas-y-conocimiento",
    });
  });

  it("resuelve Herboristería TBC como nativa", () => {
    expect(resolveProfessionGuide("the-burning-crusade", "herbalism").kind).toBe(
      "nativa",
    );
  });

  it("resuelve Sastrería Shadowlands como nativa", () => {
    expect(resolveProfessionGuide("shadowlands", "tailoring").kind).toBe("nativa");
  });


  it("resuelve Alquimia Warlords como vacío", () => {
    expect(resolveProfessionGuide("warlords-of-draenor", "alchemy").kind).toBe(
      "vacio",
    );
  });

  it("trata tipo explícito Subida de nivel igual que omitirlo", () => {
    expect(
      resolveProfessionGuide("the-burning-crusade", "alchemy", "subida-de-nivel"),
    ).toMatchObject({
      kind: "nativa",
      tipo: "subida-de-nivel",
    });
  });

  it("resuelve Recetas y conocimiento de Alquimia TBC como vacío", () => {
    expect(
      resolveProfessionGuide("the-burning-crusade", "alchemy", "recetas-y-conocimiento"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "recetas-y-conocimiento",
      path: "/expansion/the-burning-crusade/profesion/alchemy/recetas-y-conocimiento",
    });
  });

  it("resuelve Farming de Alquimia Midnight como vacío", () => {
    expect(
      resolveProfessionGuide("midnight", "alchemy", "farming"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "farming",
    });
  });

  it("resuelve Especializaciones de Alquimia Midnight como vacío", () => {
    expect(
      resolveProfessionGuide("midnight", "alchemy", "especializaciones"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "especializaciones",
    });
  });

  it("no sirve la nativa de Subida cuando el tipo es Farming", () => {
    expect(
      resolveProfessionGuide("the-burning-crusade", "alchemy", "farming"),
    ).toMatchObject({
      kind: "vacio",
      tipo: "farming",
      path: "/expansion/the-burning-crusade/profesion/alchemy/farming",
    });
  });
});

describe("parseGuideTipo", () => {
  it("trata tipo omitido como Subida de nivel", () => {
    expect(parseGuideTipo(undefined)).toBe("subida-de-nivel");
  });

  it("acepta slugs de tipo del glosario", () => {
    expect(parseGuideTipo("subida-de-nivel")).toBe("subida-de-nivel");
    expect(parseGuideTipo("recetas-y-conocimiento")).toBe("recetas-y-conocimiento");
    expect(parseGuideTipo("especializaciones")).toBe("especializaciones");
    expect(parseGuideTipo("farming")).toBe("farming");
  });

  it("marca un slug inválido como no encontrado", () => {
    expect(parseGuideTipo("nivelado")).toBeNull();
    expect(parseGuideTipo("leveling")).toBeNull();
  });
});
