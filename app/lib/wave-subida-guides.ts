import type { ExpansionSlug, ProfessionSlug } from "~/lib/constants";
import type { MaterialEntry, NpcEntry } from "~/lib/guide-types";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { CatalogSubidaBundle, CatalogSubidaRange, CatalogShoppingItem } from "~/lib/catalog-subida-types";
import type { WowheadGame } from "~/lib/wowhead";
import {
  BFA_MATERIALS,
  BFA_NPCS,
  BFA_TRAINERS,
  CATA_MATERIALS,
  CATA_NPCS,
  CATA_TRAINERS,
  CLASSIC_MATERIALS,
  CLASSIC_NPCS,
  CLASSIC_PROFS,
  CLASSIC_TRAINERS,
  FULL_PROFS,
  MOP_MATERIALS,
  MOP_NPCS,
  MOP_TRAINERS,
  PROF_NAME,
  PROF_PAIR,
  RACIALS,
  SL_MATERIALS,
  SL_NPCS,
  SL_TRAINERS,
  WOD_MATERIALS,
  WOD_NPCS,
  WOD_TRAINERS,
  isGathering,
  type ClassicProf,
  type FullProf,
} from "~/lib/wave-subida-data";

type Wave = {
  expansion: ExpansionSlug;
  productName: string;
  suffix: string;
  game: WowheadGame;
  cap: number;
  professions: readonly FullProf[] | readonly ClassicProf[];
  trainers: Record<string, { horde: string; alliance: string }>;
  npcs: Record<string, NpcEntry>;
  materials: Record<string, MaterialEntry>;
  tomtom: string;
  hubNote: string;
  note: string;
  ranges: (slug: FullProf) => readonly CatalogSubidaRange[];
  shopping: (slug: FullProf) => readonly CatalogShoppingItem[];
};

function classicRanges(): CatalogSubidaRange[] {
  return [
    { from: 1, to: 75, steps: [{ text: "Aprendé Aprendiz. Cobre, lino, hierbas bajas y platos simples cubren este tramo." }] },
    { from: 75, to: 150, steps: [{ text: "Oficial: bronce, lana y el segundo escalón de recetas de capital." }] },
    { from: 150, to: 225, steps: [{ text: "Experto: hierro, seda y el tramo medio. Artesano a 200." }] },
    { from: 225, to: 300, steps: [{ text: "Artesano: mitril, paño rúnico y el tope clásico." }] },
  ];
}

function stepped(bands: [number, number, string][]): CatalogSubidaRange[] {
  return bands.map(([from, to, text]) => ({ from, to, steps: [{ text }] }));
}

const WAVES: Wave[] = [
  {
    expansion: "classic-era",
    productName: "Classic Era",
    suffix: "classic-era",
    game: "classic",
    cap: 300,
    professions: CLASSIC_PROFS,
    trainers: CLASSIC_TRAINERS,
    npcs: CLASSIC_NPCS,
    materials: CLASSIC_MATERIALS,
    tomtom: "/way #1454 55.6 45.8 Yelmak\n/way #1453 55.6 85.6 Lilyssia Brisa Nocturna",
    hubNote: "#1454 es Orgrimmar; #1453 es Ciudad de Ventormenta. El resto de instructores está en la misma capital.",
    note: "El tope de Classic Era es 300. No hay Joyería ni Inscripción.",
    ranges: classicRanges,
    shopping: classicShopping,
  },
  {
    expansion: "classic-hardcore",
    productName: "Classic Hardcore",
    suffix: "classic-hardcore",
    game: "classic",
    cap: 300,
    professions: CLASSIC_PROFS,
    trainers: CLASSIC_TRAINERS,
    npcs: CLASSIC_NPCS,
    materials: CLASSIC_MATERIALS,
    tomtom: "/way #1454 55.6 45.8 Yelmak\n/way #1453 55.6 85.6 Lilyssia Brisa Nocturna",
    hubNote: "#1454 es Orgrimmar; #1453 es Ciudad de Ventormenta.",
    note: "En Hardcore una muerte termina el personaje: recolectá en zonas seguras y no te metas a mazmorras solo por un nodo.",
    ranges: classicRanges,
    shopping: classicShopping,
  },
  {
    expansion: "season-of-discovery",
    productName: "Season of Discovery",
    suffix: "sod",
    game: "classic",
    cap: 300,
    professions: CLASSIC_PROFS,
    trainers: CLASSIC_TRAINERS,
    npcs: CLASSIC_NPCS,
    materials: CLASSIC_MATERIALS,
    tomtom: "/way #1454 55.6 45.8 Yelmak\n/way #1453 55.6 85.6 Lilyssia Brisa Nocturna",
    hubNote: "SoD usa las mismas capitales. Wowhead ES comparte el prefijo classic.",
    note: "SoD añade runas y recetas de fase; el tope de profesión sigue siendo 300.",
    ranges: classicRanges,
    shopping: classicShopping,
  },
  {
    expansion: "cataclysm",
    productName: "Cataclysm",
    suffix: "cata",
    game: "cata",
    cap: 525,
    professions: FULL_PROFS,
    trainers: CATA_TRAINERS,
    npcs: CATA_NPCS,
    materials: CATA_MATERIALS,
    tomtom: "/way #85 55.6 45.8 Yelmak\n/way #84 55.6 85.6 Lilyssia Brisa Nocturna",
    hubNote: "#85 es Orgrimmar; #84 es Ciudad de Ventormenta (mapas Cataclysm).",
    note: "El 1-450 es la ruta clásica + Rasganorte; el 450-525 se hace con materiales de Cataclysm.",
    ranges: (slug) =>
      stepped([
        [1, 300, "Seguí la ruta clásica en las capitales hasta Artesano."],
        [300, 450, "Terrallende y Rasganorte hasta Gran Maestro."],
        [450, 525, cataHint(slug)],
      ]),
    shopping: cataShopping,
  },
  {
    expansion: "mists-of-pandaria",
    productName: "Mists of Pandaria",
    suffix: "mop",
    game: "retail",
    cap: 600,
    professions: FULL_PROFS,
    trainers: MOP_TRAINERS,
    npcs: MOP_NPCS,
    materials: MOP_MATERIALS,
    tomtom:
      "/way #390 61.6 21.6 Santuario de las Dos Lunas\n/way #390 84.6 60.4 Santuario de las Siete Estrellas\n/way #376 53.6 51.2 Sungshin Zarpa Férrea",
    hubNote: "#390 es el Valle de la Flor Eterna; #376 es el Valle de los Cuatro Vientos (Media Colina).",
    note: "El 1-525 es la ruta previa; el 525-600 se hace en Pandaria.",
    ranges: (slug) =>
      stepped([
        [1, 525, "Cubrí el tramo previo (clásico a Cataclysm) antes de viajar a Pandaria."],
        [525, 600, mopHint(slug)],
      ]),
    shopping: mopShopping,
  },
  {
    expansion: "mop-classic",
    productName: "MoP Classic",
    suffix: "mop-classic",
    game: "mop-classic",
    cap: 600,
    professions: FULL_PROFS,
    trainers: MOP_TRAINERS,
    npcs: MOP_NPCS,
    materials: MOP_MATERIALS,
    tomtom:
      "/way #390 61.6 21.6 Santuario de las Dos Lunas\n/way #390 84.6 60.4 Santuario de las Siete Estrellas\n/way #376 53.6 51.2 Sungshin Zarpa Férrea",
    hubNote: "MoP Classic usa los mismos santuarios que Mists of Pandaria. Wowhead va con prefijo mop-classic.",
    note: "El 1-525 es la ruta previa; el 525-600 se hace en Pandaria.",
    ranges: (slug) =>
      stepped([
        [1, 525, "Cubrí el tramo previo (clásico a Cataclysm) antes de viajar a Pandaria."],
        [525, 600, mopHint(slug)],
      ]),
    shopping: mopShopping,
  },
  {
    expansion: "warlords-of-draenor",
    productName: "Warlords of Draenor",
    suffix: "wod",
    game: "retail",
    cap: 700,
    professions: FULL_PROFS,
    trainers: WOD_TRAINERS,
    npcs: WOD_NPCS,
    materials: WOD_MATERIALS,
    tomtom: "/way #590 37.0 50.0 Ciudadela Horda\n/way #582 37.0 50.0 Ciudadela Alianza",
    hubNote: "#590 es la ciudadela Horda; #582 es la ciudadela Alianza. Los instructores viven en el edificio de la profesión.",
    note: "El 1-600 es la ruta previa; el 600-700 se hace con órdenes de trabajo de la ciudadela.",
    ranges: (slug) =>
      stepped([
        [1, 600, "Cubrí el tramo previo hasta el tope de Mists of Pandaria."],
        [600, 700, wodHint(slug)],
      ]),
    shopping: wodShopping,
  },
  {
    expansion: "battle-for-azeroth",
    productName: "Battle for Azeroth",
    suffix: "bfa",
    game: "retail",
    cap: 175,
    professions: FULL_PROFS,
    trainers: BFA_TRAINERS,
    npcs: BFA_NPCS,
    materials: BFA_MATERIALS,
    tomtom: "/way #1165 44.2 32.6 Kumali la Lista\n/way #1161 74.2 6.6 Elric Whalgrene",
    hubNote: "#1165 es Dazar'alor; #1161 es Boralus. Cada profesión de Battle for Azeroth arranca en 1.",
    note: "Battle for Azeroth tiene línea de habilidad propia (1-175). No hace falta el 1-700 previo.",
    ranges: (slug) =>
      stepped([
        [1, 75, "Aprendé en Dazar'alor o Boralus. El primer tramo es barato."],
        [75, 150, bfaHint(slug)],
        [150, 175, "El tramo final pide materiales de zona alta o diarias de oficio."],
      ]),
    shopping: bfaShopping,
  },
  {
    expansion: "shadowlands",
    productName: "Shadowlands",
    suffix: "shadowlands",
    game: "shadowlands",
    cap: 175,
    professions: FULL_PROFS.filter((slug) => slug !== "tailoring"),
    trainers: SL_TRAINERS,
    npcs: SL_NPCS,
    materials: SL_MATERIALS,
    tomtom: "/way #1670 39.0 40.0 Salón de las Formas",
    hubNote: "#1670 es Oribos. Todos los instructores están en el Salón de las Formas (misma habitación, ambas facciones).",
    note: "Shadowlands tiene línea de habilidad propia (1-175). Sastrería ya tiene guía nativa propia.",
    ranges: (slug) =>
      stepped([
        [1, 50, "Aprendé en Oribos. El primer tramo usa materiales de Bastión / Maldraxxus."],
        [50, 100, slHint(slug)],
        [100, 175, "El tramo alto pide inventario de las cuatro zonas y, si aplica, legendarios."],
      ]),
    shopping: slShopping,
  },
];

function classicShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "cooking") return [{ materialKey: "chunkOfBoar", quantity: 60 }];
  return [
    { materialKey: "copperBar", quantity: 80 },
    { materialKey: "linenCloth", quantity: 80 },
  ];
}

function classicHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:2330|Poción de sanación menor} con {i:peacebloom} cubre el arranque.";
  if (slug === "blacksmithing") return "{r:2660|Piedra de afilar férrea} con {i:copperBar}.";
  if (slug === "enchanting") return "{r:7418|Encantar brazales: salud menor}.";
  if (slug === "engineering") return "{r:3918|Pólvora férrea}.";
  if (slug === "leatherworking") return "{r:2152|Refuerzo para armadura ligero}.";
  if (slug === "tailoring") return "{r:2963|Madeja de paño de lino}.";
  if (slug === "cooking") return "{r:2538|Carne de lobo carbonizada}.";
  return "Picá, desollá o pescá en las zonas de inicio y subí de zona cuando el nodo se ponga verde.";
}

function cataShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "alchemy" || slug === "inscription") {
    return [
      { materialKey: "cinderbloom", quantity: 80 },
      { materialKey: "stormvine", quantity: 40 },
      { materialKey: "twilightJasmine", quantity: 30 },
    ];
  }
  if (slug === "blacksmithing" || slug === "engineering" || slug === "jewelcrafting") {
    return [
      { materialKey: "obsidiumBar", quantity: 80 },
      { materialKey: "elementiumBar", quantity: 60 },
    ];
  }
  if (slug === "tailoring") return [{ materialKey: "embersilk", quantity: 200 }];
  if (slug === "leatherworking") return [{ materialKey: "savageLeather", quantity: 200 }];
  if (slug === "enchanting") return [{ materialKey: "volatileLife", quantity: 40 }];
  return [{ materialKey: "cinderbloom", quantity: 40 }];
}

function cataHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:80490|Poción del Tol'vir} con {i:cinderbloom} y {i:stormvine} hasta 500; {i:twilightJasmine} cierra el 525.";
  if (slug === "blacksmithing") return "Piezas de {i:obsidiumBar} y después {i:elementiumBar}.";
  if (slug === "tailoring") return "Madejas de {i:embersilk} hasta el tope.";
  if (slug === "leatherworking") return "Refuerzos de {i:savageLeather}.";
  if (isGathering(slug)) return "Nodos de Hyjal, Vashj'ir y Tierras Altas Crepusculares.";
  return "Materiales de Cataclysm en las capitales remozadas.";
}

function mopShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "alchemy" || slug === "inscription") {
    return [
      { materialKey: "greenTea", quantity: 80 },
      { materialKey: "silkweed", quantity: 60 },
    ];
  }
  if (slug === "blacksmithing" || slug === "engineering" || slug === "jewelcrafting") {
    return [{ materialKey: "ghostIron", quantity: 120 }];
  }
  if (slug === "tailoring") return [{ materialKey: "windwool", quantity: 200 }];
  if (slug === "leatherworking") return [{ materialKey: "exoticLeather", quantity: 200 }];
  return [{ materialKey: "greenTea", quantity: 40 }];
}

function mopHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:114751|Poción de sanación magistral} con {i:greenTea}.";
  if (slug === "cooking") return "Las diarias de {n:sungshin} en Media Colina empujan el tramo alto.";
  if (slug === "tailoring") return "Madejas de {i:windwool} y {r:125557|Seda imperial}.";
  if (isGathering(slug)) return "Valle de los Cuatro Vientos, Cima Kun-Lai y Desierto del Pavor.";
  return "Materiales de Pandaria en los santuarios del Valle de la Flor Eterna.";
}

function wodShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "alchemy" || slug === "inscription") {
    return [
      { materialKey: "frostweed", quantity: 80 },
      { materialKey: "fireweed", quantity: 40 },
    ];
  }
  if (slug === "blacksmithing" || slug === "engineering" || slug === "jewelcrafting") {
    return [
      { materialKey: "blackrockOre", quantity: 80 },
      { materialKey: "trueIronOre", quantity: 80 },
    ];
  }
  if (slug === "tailoring") return [{ materialKey: "hexweave", quantity: 60 }];
  if (slug === "leatherworking") return [{ materialKey: "sumptuousFur", quantity: 120 }];
  return [{ materialKey: "frostweed", quantity: 40 }];
}

function wodHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:156561|Frasco draénico de agilidad} y órdenes de trabajo de la ciudadela.";
  if (isGathering(slug)) return "Nagrand y Gorgrond cubren el tramo de Draenor.";
  return "Colocá el edificio de oficio en la ciudadela y spameá órdenes de trabajo.";
}

function bfaShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "alchemy" || slug === "inscription") {
    return [
      { materialKey: "riverbud", quantity: 80 },
      { materialKey: "sirensPollen", quantity: 40 },
    ];
  }
  if (slug === "blacksmithing" || slug === "engineering" || slug === "jewelcrafting") {
    return [
      { materialKey: "monelite", quantity: 80 },
      { materialKey: "stormsSilver", quantity: 40 },
    ];
  }
  if (slug === "tailoring") return [{ materialKey: "tidespray", quantity: 120 }];
  if (slug === "leatherworking") return [{ materialKey: "coarseLeather", quantity: 120 }];
  return [{ materialKey: "riverbud", quantity: 40 }];
}

function bfaHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:252382|Poción de sanación costera} con {i:riverbud}.";
  if (isGathering(slug)) return "Tiragarde / Zuldazar al arranque; Nazmir y Drustvar después.";
  return "Recetas de Kul Tiras / Zandalar. Las diarias de oficio ayudan en el tramo alto.";
}

function slShopping(slug: FullProf): CatalogShoppingItem[] {
  if (isGathering(slug)) return [];
  if (slug === "alchemy" || slug === "inscription") {
    return [
      { materialKey: "deathBlossom", quantity: 80 },
      { materialKey: "risingGlory", quantity: 40 },
    ];
  }
  if (slug === "blacksmithing" || slug === "engineering" || slug === "jewelcrafting") {
    return [{ materialKey: "laestrite", quantity: 100 }];
  }
  if (slug === "tailoring") return [{ materialKey: "shroudedCloth", quantity: 120 }];
  if (slug === "leatherworking") return [{ materialKey: "desolateLeather", quantity: 120 }];
  return [{ materialKey: "deathBlossom", quantity: 40 }];
}

function slHint(slug: FullProf): string {
  if (slug === "alchemy") return "{r:307142|Poción de sanación espiritual} con {i:deathBlossom}.";
  if (slug === "tailoring") return "{r:310877|Brazales de tela sombría} con {i:shroudedCloth}.";
  if (isGathering(slug)) return "Bastión y Maldraxxus al arranque; Ardenweald y Revendreth después.";
  return "Todo se aprende en Oribos. Las cuatro zonas alimentan el tramo medio.";
}

function buildWave(wave: Wave): CatalogSubidaBundle[] {
  return wave.professions.map((slug) => {
    const trainers = wave.trainers[slug];
    const pair = PROF_PAIR[slug];
    const gather = isGathering(slug);
    const shopping = wave.shopping(slug);
    const nativeId = `${slug}-${wave.suffix}` as NativeGuideId;
    return {
      spec: {
        slug: slug as ProfessionSlug,
        nativeId,
        title: `Subida de nivel de ${PROF_NAME[slug]} en ${wave.productName}`,
        intro: [
          `Esta guía te lleva ${PROF_NAME[slug]} de ${wave.productName} del 1 al ${wave.cap}. ${wave.note}`,
          `${PROF_NAME[pair]} es la pareja natural.`,
        ],
        trainerHordeKey: trainers.horde,
        trainerAllianceKey: trainers.alliance,
        trainerNote: `Aprendé con {n:${trainers.horde}} (Horda) y {n:${trainers.alliance}} (Alianza). ${wave.hubNote}`,
        tomtom: wave.tomtom,
        tomtomNote: `Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom. Marcá a {n:${trainers.horde}} y a {n:${trainers.alliance}}. ${wave.hubNote}`,
        shoppingNote: gather
          ? "No hace falta lote de oro: la habilidad sale de los nodos o de pescar."
          : `Lote estimado para el tramo de ${wave.productName}. Sin precios de casa de subastas.`,
        shopping,
        ranges: wave.ranges(slug),
        racials: RACIALS[slug],
        pairing: {
          slug: pair,
          name: `${PROF_NAME[pair]} en ${wave.productName}`,
        },
      },
      materials: wave.materials,
      npcs: wave.npcs,
      game: wave.game,
      expansionSlug: wave.expansion,
    };
  });
}

export const WAVE_SUBIDA_BUNDLES: CatalogSubidaBundle[] = WAVES.flatMap(buildWave);

export function waveNativeEntries(): Record<string, NativeGuideId> {
  return Object.fromEntries(
    WAVE_SUBIDA_BUNDLES.map((bundle) => [
      `${bundle.expansionSlug}:${bundle.spec.slug}`,
      bundle.spec.nativeId,
    ]),
  );
}
