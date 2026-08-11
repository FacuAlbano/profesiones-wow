import { describe, expect, it } from "vitest";
import { loadProfessionGuidePage } from "./profession-guide-loader";

describe("loadProfessionGuidePage", () => {
  it("sirve Subida de nivel cuando no hay segmento de tipo", () => {
    const data = loadProfessionGuidePage({
      slug: "the-burning-crusade",
      profSlug: "alchemy",
    });
    expect(data.page.tipo).toBe("subida-de-nivel");
    expect(data.page.kind).toBe("nativa");
  });

  it("responde 404 si el tipo no existe", () => {
    try {
      loadProfessionGuidePage({
        slug: "midnight",
        profSlug: "alchemy",
        tipo: "nivelado",
      });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(Response);
      expect((error as Response).status).toBe(404);
    }
  });

  it("redirige el segmento subida-de-nivel a la URL canónica", () => {
    try {
      loadProfessionGuidePage({
        slug: "midnight",
        profSlug: "alchemy",
        tipo: "subida-de-nivel",
      });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(Response);
      expect((error as Response).status).toBe(302);
      expect((error as Response).headers.get("Location")).toBe(
        "/expansion/midnight/profesion/alchemy",
      );
    }
  });
});
