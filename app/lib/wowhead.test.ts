import { describe, expect, it } from "vitest";
import { wowheadEntity, wowheadIconUrl } from "./wowhead";

describe("wowheadEntity", () => {
  it("arma URL ES y tooltip de un material TBC como item", () => {
    expect(
      wowheadEntity({ tipo: "material", id: 2447, juego: "tbc" }),
    ).toEqual({
      href: "https://es.wowhead.com/tbc/item=2447",
      dataWowhead: "item=2447&domain=es",
      wowheadKind: "item",
    });
  });

  it("trata un objeto igual que un material (item Wowhead)", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 1710, juego: "tbc" }).wowheadKind).toBe(
      "item",
    );
  });

  it("arma una receta como spell, no como item", () => {
    expect(wowheadEntity({ tipo: "receta", id: 33732, juego: "tbc" })).toEqual({
      href: "https://es.wowhead.com/tbc/spell=33732",
      dataWowhead: "spell=33732&domain=es",
      wowheadKind: "spell",
    });
  });

  it("usa prefijo wotlk para Wrath of the Lich King", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 36901, juego: "wotlk" })).toEqual({
      href: "https://es.wowhead.com/wotlk/item=36901",
      dataWowhead: "item=36901&domain=es",
      wowheadKind: "item",
    });
  });

  it("usa prefijo cata para Cataclysm", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 52983, juego: "cata" })).toEqual({
      href: "https://es.wowhead.com/cata/item=52983",
      dataWowhead: "item=52983&domain=es",
      wowheadKind: "item",
    });
  });

  it("usa prefijo mop-classic para MoP Classic", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 72234, juego: "mop-classic" })).toEqual({
      href: "https://es.wowhead.com/mop-classic/item=72234",
      dataWowhead: "item=72234&domain=es",
      wowheadKind: "item",
    });
  });

  it("usa host ES sin prefijo para retail (MoP retail, WoD, BfA)", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 152505, juego: "retail" })).toEqual({
      href: "https://es.wowhead.com/item=152505",
      dataWowhead: "item=152505&domain=es",
      wowheadKind: "item",
    });
  });

  it("usa prefijo the-war-within para The War Within", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 210796, juego: "the-war-within" })).toEqual({
      href: "https://es.wowhead.com/the-war-within/item=210796",
      dataWowhead: "item=210796&domain=es",
      wowheadKind: "item",
    });
  });

  it("usa host ES y sin prefijo de juego para Midnight", () => {
    expect(wowheadEntity({ tipo: "objeto", id: 210221, juego: "midnight" })).toEqual({
      href: "https://es.wowhead.com/item=210221",
      dataWowhead: "item=210221&domain=es",
      wowheadKind: "item",
    });
  });

  it("arma un NPC TBC", () => {
    expect(wowheadEntity({ tipo: "npc", id: 19052, juego: "tbc" }).href).toBe(
      "https://es.wowhead.com/tbc/npc=19052",
    );
  });

  it("arma una misión Shadowlands como quest", () => {
    expect(wowheadEntity({ tipo: "mision", id: 62799, juego: "shadowlands" })).toEqual({
      href: "https://es.wowhead.com/shadowlands/quest=62799",
      dataWowhead: "quest=62799&domain=es",
      wowheadKind: "quest",
    });
  });

  it("nunca usa el locale /mx", () => {
    const href = wowheadEntity({ tipo: "objeto", id: 1, juego: "tbc" }).href;
    expect(href.startsWith("https://es.wowhead.com/")).toBe(true);
    expect(href.includes("/mx")).toBe(false);
  });

  it("arma icono Zamimg en minúsculas", () => {
    expect(wowheadIconUrl("INV_Misc_Herb_01")).toBe(
      "https://wow.zamimg.com/images/wow/icons/small/inv_misc_herb_01.jpg",
    );
  });
});
