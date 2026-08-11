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

  it("resuelve Alquimia Midnight como contenido provisional", () => {
    expect(
      resolveProfessionGuide("midnight", "alchemy"),
    ).toMatchObject({
      kind: "provisional",
      tipo: "subida-de-nivel",
      path: "/expansion/midnight/profesion/alchemy",
      mirrorUrl: "/guides-mirror/midnight/alchemy-guide/index.html",
      aviso: true,
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

  it("resuelve Herrería TBC como provisional", () => {
    expect(resolveProfessionGuide("the-burning-crusade", "blacksmithing").kind).toBe(
      "provisional",
    );
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
