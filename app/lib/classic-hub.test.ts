import { describe, expect, it } from "vitest";
import { classicHubRedirectFromPath, classicHubRedirectPath } from "./classic-hub";
import { EXPANSION_SLUGS } from "./constants";
import { resolveProfessionGuide } from "./resolve-profession-guide";

describe("classicHubRedirectPath", () => {
  it("redirige el hub classic al de Classic Era", () => {
    expect(classicHubRedirectPath("classic")).toBe("/expansion/classic-era");
    expect(classicHubRedirectPath("classic", "alchemy")).toBe(
      "/expansion/classic-era/profesion/alchemy",
    );
    expect(classicHubRedirectPath("classic", "alchemy", "farming")).toBe(
      "/expansion/classic-era/profesion/alchemy/farming",
    );
  });

  it("redirige cualquier path bajo /expansion/classic a Classic Era", () => {
    expect(classicHubRedirectFromPath("/expansion/classic")).toBe("/expansion/classic-era");
    expect(classicHubRedirectFromPath("/expansion/classic/profesion/alchemy", "?x=1")).toBe(
      "/expansion/classic-era/profesion/alchemy?x=1",
    );
  });

  it("no redirige slugs que ya son una expansión de primer nivel", () => {
    expect(classicHubRedirectPath("classic-era")).toBeNull();
    expect(classicHubRedirectPath("classic-hardcore")).toBeNull();
    expect(classicHubRedirectPath("season-of-discovery")).toBeNull();
    expect(classicHubRedirectPath("mop-classic")).toBeNull();
  });
});

describe("hubs Classic como expansiones", () => {
  it("acepta Era, Hardcore, SoD y MoP Classic como slugs", () => {
    expect(EXPANSION_SLUGS).toContain("classic-era");
    expect(EXPANSION_SLUGS).toContain("classic-hardcore");
    expect(EXPANSION_SLUGS).toContain("season-of-discovery");
    expect(EXPANSION_SLUGS).toContain("mop-classic");
    expect(EXPANSION_SLUGS).not.toContain("classic");
  });

  it("asocia Era, Hardcore y SoD a nativas distintas (Hardcore y SoD no heredan el espejo)", () => {
    expect(resolveProfessionGuide("classic-era", "alchemy")).toMatchObject({
      kind: "nativa",
      nativeId: "alchemy-classic-era",
    });
    expect(resolveProfessionGuide("classic-hardcore", "alchemy")).toMatchObject({
      kind: "nativa",
      nativeId: "alchemy-classic-hardcore",
    });
    expect(resolveProfessionGuide("season-of-discovery", "alchemy")).toMatchObject({
      kind: "nativa",
      nativeId: "alchemy-sod",
    });
  });

  it("no mezcla MoP Classic con Mists of Pandaria", () => {
    expect(resolveProfessionGuide("mists-of-pandaria", "alchemy")).toMatchObject({
      kind: "nativa",
      nativeId: "alchemy-mop",
    });
    expect(resolveProfessionGuide("mop-classic", "alchemy")).toMatchObject({
      kind: "nativa",
      nativeId: "alchemy-mop-classic",
      path: "/expansion/mop-classic/profesion/alchemy",
    });
  });
});
