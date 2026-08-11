import type { TbcCatalogId, TbcSubidaSpec } from "~/lib/tbc-subida-types";

export const TBC_SUBIDA_GUIDES: Record<TbcCatalogId, TbcSubidaSpec> = {
  "blacksmithing-tbc": {
    slug: "blacksmithing",
    nativeId: "blacksmithing-tbc",
    title: "Subida de nivel de Herrería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Herrería de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar. Las cantidades son aproximadas: varias recetas se ponen amarillas.",
      "Minería va de la mano: si fundís la mena vos, te ahorrás un montón. Si no tenés Minería, comprá el lote de una.",
    ],
    trainerHordeKey: "roxok",
    trainerAllianceKey: "humphry",
    trainerNote:
      "Del 1 al 300 aprendé en la capital (Saru en Orgrimmar, Bengus en Forjaz). El tope de Outland (300-375) lo enseñan Rohok en Thrallmar y Humphry en Bastión del Honor.",
    tomtom:
      "/way #1944 53.2 38.2 Rohok\n/way #1944 56.8 63.8 Humphry",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Rohok (Horda) y a Humphry (Alianza).",
    shoppingNote:
      "Lote estimado para 1-375 (clásico + hierro vil). La calidad no aplica: comprá lo más barato. Fundir mena no da habilidad de Herrería.",
    shopping: [
      { materialKey: "roughStone", quantity: 150 },
      { materialKey: "copperBar", quantity: 150 },
      { materialKey: "coarseStone", quantity: 95 },
      { materialKey: "silverBar", quantity: 5 },
      { materialKey: "bronzeBar", quantity: 140 },
      { materialKey: "heavyStone", quantity: 105 },
      { materialKey: "goldBar", quantity: 5 },
      { materialKey: "ironBar", quantity: 230 },
      { materialKey: "greenDye", quantity: 35 },
      { materialKey: "steelBar", quantity: 190 },
      { materialKey: "solidStone", quantity: 480 },
      { materialKey: "mageweaveCloth", quantity: 60 },
      { materialKey: "felIronBar", quantity: 220 },
      { materialKey: "adamantiteBar", quantity: 40 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:saru} o a {n:bengus} y aprendé Herrería.",
        steps: [
          {
            title: "1-75",
            text: "Piedras de afilar férreas y brazales de cobre con {i:roughStone} y {i:copperBar}. Aprendé Oficial a 50.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Pasá a bronce: {i:coarseStone}, {i:bronzeBar} y un toque de {i:silverBar}. Aprendé Experto a 125.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "Hierro y {i:heavyStone}. Las piedras de lastre y los brazales verdes ({i:greenDye}) cubren este tramo. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:steelBar}, {i:solidStone} y {i:mageweaveCloth} (botas/yelmos de mitril). A 275–300 las últimas piedras de lastre densas.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Herrería de Outland con {n:roxok} o {n:humphry}.",
        steps: [
          {
            text: "Piedras de afilar viles y cota de {i:felIronBar} hasta ~330. Después adamantita y pedidos de armas. El tope pide {i:adamantiteBar} o korio si está barato.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Herrería. Los gnomos tienen bonus de Ingeniería, no de esta profesión.",
    pairing: { slug: "mining", name: "Minería en The Burning Crusade" },
  },

  "enchanting-tbc": {
    slug: "enchanting",
    nativeId: "enchanting-tbc",
    title: "Subida de nivel de Encantamiento en The Burning Crusade",
    intro: [
      "Esta guía te lleva Encantamiento de The Burning Crusade del 1 al 375. Desencantá el equipo verde que te sobre: el polvo sale de ahí.",
      "Sastrería es buena pareja: elaborás y desencantás el mismo lote.",
    ],
    trainerHordeKey: "felannia",
    trainerAllianceKey: "johanBarnes",
    extraNpcs: [{ key: "madameRuby", role: "Fórmulas en Shattrath" }],
    trainerNote:
      "Del 1 al 300 aprendé en la capital. Outland lo enseñan Felannia en Thrallmar y Johan Barnes en Bastión del Honor (torre del acantilado, segundo piso).",
    tomtom:
      "/way #1944 52.2 36.0 Felannia\n/way #1944 53.6 66.0 Johan Barnes",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Felannia (Horda) y a Johan Barnes (Alianza).",
    shoppingNote:
      "Lote estimado de polvos y esencias. Si desencantás vos, comprá menos. Poné los encantamientos en varas o vendelos. {n:madameRuby} vende fórmulas limitadas en Shattrath.",
    shopping: [
      { materialKey: "strangeDust", quantity: 125 },
      { materialKey: "lesserMagicEssence", quantity: 1 },
      { materialKey: "greaterMagicEssence", quantity: 12 },
      { materialKey: "lesserAstralEssence", quantity: 25 },
      { materialKey: "soulDust", quantity: 130 },
      { materialKey: "visionDust", quantity: 240 },
      { materialKey: "lesserNetherEssence", quantity: 5 },
      { materialKey: "dreamDust", quantity: 330 },
      { materialKey: "purpleLotus", quantity: 40 },
      { materialKey: "illusionDust", quantity: 82 },
      { materialKey: "arcaneDust", quantity: 220 },
      { materialKey: "largePrismaticShard", quantity: 15 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        steps: [
          {
            title: "1-75",
            text: "{r:7421|Vara rúnica de cobre} y encantamientos menores con {i:strangeDust} y {i:lesserMagicEssence}. Desencantá las varas si te falta polvo.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Encantamientos de brazal/capa con {i:greaterMagicEssence} y {i:lesserAstralEssence}. Experto a 125.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:soulDust} y {i:visionDust} cubren el tramo medio. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:dreamDust}, {i:purpleLotus} (aceite de maná inferior) e {i:illusionDust}. La vara rúnica de arcanita se compra en Claro de la Luna.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Encantamiento de Outland con {n:felannia} o {n:johanBarnes}.",
        steps: [
          {
            text: "Aceites y encantamientos de anillo con {i:arcaneDust}. {n:madameRuby} vende las fórmulas de aceite superior. El tramo final usa {i:largePrismaticShard}.",
          },
        ],
      },
    ],
    racials:
      "Los elfos de sangre no tienen bonus de Encantamiento en The Burning Crusade. No hay una racial que deje las recetas naranjas más tiempo.",
    pairing: { slug: "tailoring", name: "Sastrería en The Burning Crusade" },
  },

  "engineering-tbc": {
    slug: "engineering",
    nativeId: "engineering-tbc",
    title: "Subida de nivel de Ingeniería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Ingeniería de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar.",
      "Minería es la pareja natural: cobre, bronce, hierro y hierro vil entran en casi todo.",
    ],
    trainerHordeKey: "zebig",
    trainerAllianceKey: "lebowski",
    trainerNote:
      "Del 1 al 300 aprendé en la capital (Roxxik u Muello Saltarín). Outland lo enseñan Zebig en Thrallmar y Lebowski en Bastión del Honor. A 350 elegís gnómica o goblin.",
    tomtom: "/way #1944 54.8 38.5 Zebig\n/way #1944 55.7 65.5 Lebowski",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Zebig (Horda) y a Lebowski (Alianza).",
    shoppingNote:
      "Lote estimado para 1-375. La especialización (350) no es obligatoria para el tope. Llevá holgura de piedra: las bombas se ponen amarillas.",
    shopping: [
      { materialKey: "roughStone", quantity: 60 },
      { materialKey: "copperBar", quantity: 66 },
      { materialKey: "coarseStone", quantity: 60 },
      { materialKey: "linenCloth", quantity: 50 },
      { materialKey: "silverBar", quantity: 5 },
      { materialKey: "bronzeBar", quantity: 110 },
      { materialKey: "heavyStone", quantity: 30 },
      { materialKey: "mossAgate", quantity: 10 },
      { materialKey: "woolCloth", quantity: 60 },
      { materialKey: "mediumLeather", quantity: 15 },
      { materialKey: "steelBar", quantity: 4 },
      { materialKey: "solidStone", quantity: 120 },
      { materialKey: "felIronBar", quantity: 90 },
      { materialKey: "adamantiteBar", quantity: 20 },
      { materialKey: "moteOfEarth", quantity: 20 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        steps: [
          {
            title: "1-75",
            text: "Pólvora férrea, dinamita y piezas de cobre con {i:roughStone}, {i:copperBar} y {i:linenCloth}.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Bronce, {i:coarseStone} y {i:woolCloth}. Un par de {i:mossAgate} entran en los primeros juguetes.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:heavyStone}, {i:mediumLeather} y las primeras piezas de hierro. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:solidStone} y mitril: bombas y tubos. A 260–300 las granadas de torio si la piedra está barata.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Ingeniería de Outland con {n:zebig} o {n:lebowski}.",
        steps: [
          {
            text: "Carcasas y tornillos de {i:felIronBar}. Del 350 al tope, adamantita, {i:moteOfEarth} y la receta del robot de reparación si la farmeás en Filospada.",
          },
        ],
      },
    ],
    racials:
      "Los gnomos tienen +15 de Ingeniería con {h:20593|Especialización en ingeniería}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "mining", name: "Minería en The Burning Crusade" },
  },

  "leatherworking-tbc": {
    slug: "leatherworking",
    nativeId: "leatherworking-tbc",
    title: "Subida de nivel de Peletería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Peletería de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar.",
      "Desuello es la pareja natural: el cuero ligero, pesado, basto y el pellejo nudoso salen de las bestias.",
    ],
    trainerHordeKey: "barim",
    trainerAllianceKey: "brumman",
    trainerNote:
      "Del 1 al 300 aprendé en la capital. Outland lo enseñan Barim Pezuña Partida en Thrallmar y Brumman en Bastión del Honor.",
    tomtom: "/way #1944 56.2 38.6 Barim\n/way #1944 54.1 64.0 Brumman",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Barim (Horda) y a Brumman (Alianza).",
    shoppingNote:
      "Lote estimado para 1-375. El pellejo nudoso (Outland) es el cuello de botella: si Desuello está bajo, compralo. Hilo y tintes los vende cualquier suministros.",
    shopping: [
      { materialKey: "ruinedScraps", quantity: 57 },
      { materialKey: "lightLeather", quantity: 380 },
      { materialKey: "mediumLeather", quantity: 345 },
      { materialKey: "heavyHide", quantity: 20 },
      { materialKey: "heavyLeather", quantity: 195 },
      { materialKey: "thickLeather", quantity: 440 },
      { materialKey: "ruggedLeather", quantity: 475 },
      { materialKey: "knothideLeather", quantity: 1510 },
      { materialKey: "felHide", quantity: 24 },
      { materialKey: "heavyClefthoof", quantity: 24 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        steps: [
          {
            title: "1-75",
            text: "Convertí {i:ruinedScraps} en {i:lightLeather} y fabricá refuerzos ligeros.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "{i:mediumLeather} y {i:heavyHide}. Refuerzos medios cubren hasta Experto.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:heavyLeather} y {i:thickLeather}. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:ruggedLeather}: refuerzos bastos y conjuntos de escamas de dragón si farmeás las escamas. Si no, quedate en cuero basto.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Peletería de Outland con {n:barim} o {n:brumman}.",
        steps: [
          {
            text: "Refuerzos de {i:knothideLeather} hasta ~350. Después {i:felHide} y {i:heavyClefthoof} en las recetas naranjas que desbloquees.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Peletería.",
    pairing: { slug: "skinning", name: "Desuello en The Burning Crusade" },
  },

  "tailoring-tbc": {
    slug: "tailoring",
    nativeId: "tailoring-tbc",
    title: "Subida de nivel de Sastrería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Sastrería de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar.",
      "Encantamiento es buena pareja: desencantás el equipo que te sobra y recuperás polvo.",
    ],
    trainerHordeKey: "dalinna",
    trainerAllianceKey: "hama",
    trainerNote:
      "Del 1 al 300 aprendé en la capital. Outland lo enseñan Dalinna en Thrallmar y Hama en Bastión del Honor.",
    tomtom: "/way #1944 56.6 37.1 Dalinna\n/way #1944 54.6 63.6 Hama",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Dalinna (Horda) y a Hama (Alianza).",
    shoppingNote:
      "Lote estimado de paños + hilo. El tejido abisal se farmea de humanoides de Outland. {i:coarseThread} lo vende cualquier vendedor de sastrería.",
    shopping: [
      { materialKey: "linenCloth", quantity: 204 },
      { materialKey: "woolCloth", quantity: 135 },
      { materialKey: "silkCloth", quantity: 804 },
      { materialKey: "mageweaveCloth", quantity: 470 },
      { materialKey: "runecloth", quantity: 940 },
      { materialKey: "ruggedLeather", quantity: 100 },
      { materialKey: "goldBar", quantity: 50 },
      { materialKey: "netherweave", quantity: 200 },
      { materialKey: "knothideLeather", quantity: 10 },
      { materialKey: "netherwebSilk", quantity: 34 },
      { materialKey: "coarseThread", quantity: 59 },
      { materialKey: "arcaneDust", quantity: 40 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        steps: [
          {
            title: "1-75",
            text: "Madejas y piezas de {i:linenCloth} con {i:coarseThread}.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "{i:woolCloth} hasta Experto. Después arrancá seda.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:silkCloth} en madejas y bolsas. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:mageweaveCloth} y después {i:runecloth}. Un toque de {i:ruggedLeather} y {i:goldBar} entra en bolsas del tramo alto.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Sastrería de Outland con {n:dalinna} o {n:hama}.",
        steps: [
          {
            text: "Madejas de {i:netherweave} y {i:imbuedNetherweave}. {i:netherwebSilk} entra en las bolsas y el conjunto imbuido del tope.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Sastrería.",
    pairing: { slug: "enchanting", name: "Encantamiento en The Burning Crusade" },
  },

  "mining-tbc": {
    slug: "mining",
    nativeId: "mining-tbc",
    title: "Subida de nivel de Minería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Minería de The Burning Crusade del 1 al 375 picando de los Reinos del Este / Kalimdor a Outland. No hay lista de compras de oro: la habilidad sale de los filones y de fundir.",
      "Herrería, Ingeniería y Joyería son las parejas naturales.",
    ],
    trainerHordeKey: "krugosh",
    trainerAllianceKey: "hurnak",
    trainerNote:
      "Aprendé en la capital para 1-300. Outland lo enseñan Krugosh en Thrallmar y Hurnak Grimmord en Bastión del Honor. Fundir mena da habilidad hasta cierto punto: no lo saltees.",
    tomtom: "/way #1944 55.4 37.6 Krugosh\n/way #1944 56.7 63.8 Hurnak Grimmord",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Krugosh (Horda) y a Hurnak (Alianza).",
    shoppingNote:
      "No hace falta lote. Un pico lo vende el vendedor de minería al lado del entrenador.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:makaru} o a {n:geofram} y aprendé Minería.",
        steps: [
          {
            text: "Picá y fundí {i:copperOre} en las zonas de inicio. La fundición empuja más rápido que solo picar.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "{i:tinOre} y {i:silverOre}. Los Baldíos, Páramos de Poniente y Loch Modan cubren este tramo.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:ironOre} y {i:goldOre}. Vega de Tuercespina y Tierras Inhóspitas tienen circuitos densos.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:mithrilOre}, {i:truesilverOre} y {i:thoriumOre}. La Garganta de Fuego, Cuna del Invierno e Ungoro cierran el 300.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Minería de Outland con {n:krugosh} o {n:hurnak}.",
        steps: [
          {
            text: "Picá {i:felIronOre} en la Península del Fuego Infernal y {i:adamantiteOre} en Nagrand / Filospada. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Minería.",
    pairing: { slug: "blacksmithing", name: "Herrería en The Burning Crusade" },
  },

  "skinning-tbc": {
    slug: "skinning",
    nativeId: "skinning-tbc",
    title: "Subida de nivel de Desuello en The Burning Crusade",
    intro: [
      "Esta guía te lleva Desuello de The Burning Crusade del 1 al 375 desollando bestias de los Reinos del Este / Kalimdor a Outland. No hay lista de compras de oro.",
      "Peletería es la pareja natural.",
    ],
    trainerHordeKey: "moorutu",
    trainerAllianceKey: "jelena",
    trainerNote:
      "Aprendé en la capital para 1-300. Outland lo enseñan Moorutu en Thrallmar y Jelena Estrellada en Bastión del Honor.",
    tomtom: "/way #1944 56.3 38.6 Moorutu\n/way #1944 54.5 63.2 Jelena Estrellada",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Moorutu (Horda) y a Jelena (Alianza).",
    shoppingNote:
      "No hace falta lote. Un cuchillo de desuello lo vende el vendedor al lado del entrenador.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:thuwd} o a {n:balthus} y aprendé Desuello.",
        steps: [
          {
            text: "Desollá bestias de las zonas de inicio. Cualquier cadáver de tu nivel da {i:ruinedScraps} o {i:lightLeather}.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Bestias de Los Baldíos / Páramos de Poniente / Loch Modan. Empieza a salir {i:mediumLeather}.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "Vega de Tuercespina y Los Humedales: {i:heavyLeather} y {i:thickLeather}.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "Cuna del Invierno, Ungoro y Tierras de la Peste: {i:ruggedLeather}. Si un cadáver se pone verde, cambiate de zona.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Desuello de Outland con {n:moorutu} o {n:jelena}.",
        steps: [
          {
            text: "Bestias de Fuego Infernal y Nagrand sueltan {i:knothideLeather}. {i:felHide} y {i:heavyClefthoof} son extras: no hace falta farmearlos para el tope. La ruta de farm va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Desuello.",
    pairing: { slug: "leatherworking", name: "Peletería en The Burning Crusade" },
  },

  "cooking-tbc": {
    slug: "cooking",
    nativeId: "cooking-tbc",
    title: "Subida de nivel de Cocina en The Burning Crusade",
    intro: [
      "Esta guía te lleva Cocina de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar.",
      "Pesca es la pareja natural: varios platos del tramo medio piden pescado.",
    ],
    trainerHordeKey: "baxter",
    trainerAllianceKey: "gaston",
    extraNpcs: [{ key: "theRokk", role: "Misiones diarias en Shattrath" }],
    trainerNote:
      "Del 1 al 300 aprendé en la capital. Outland lo enseñan Baxter en Thrallmar y Gaston en Bastión del Honor. El Rokk, en Shattrath, da las diarias que empujan el tramo 350-375.",
    tomtom:
      "/way #1944 56.8 37.4 Baxter\n/way #1944 54.1 63.5 Gaston\n/way #1955 61.8 15.6 El Rokk",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Baxter, Gaston y El Rokk.",
    shoppingNote:
      "Lote estimado para 1-350. Del 350 al tope las diarias de {n:theRokk} son más baratas que spamear platos. Especias y harina las vende el vendedor de cocina.",
    shopping: [
      { materialKey: "simpleFlour", quantity: 60 },
      { materialKey: "mildSpices", quantity: 60 },
      { materialKey: "chunkOfBoar", quantity: 35 },
      { materialKey: "bearMeat", quantity: 25 },
      { materialKey: "stringyWolf", quantity: 30 },
      { materialKey: "rawBrilliantSmallfish", quantity: 35 },
      { materialKey: "rawSlitherskin", quantity: 35 },
      { materialKey: "clamMeat", quantity: 65 },
      { materialKey: "refreshingSpringWater", quantity: 65 },
      { materialKey: "coyoteMeat", quantity: 65 },
      { materialKey: "rawLongjaw", quantity: 65 },
      { materialKey: "buzzardMeat", quantity: 65 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        steps: [
          {
            title: "1-75",
            text: "Pan con {i:simpleFlour} y {i:mildSpices}, o carne de jabalí/lobo. Aprendé Oficial a 50.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "{i:rawBrilliantSmallfish}, {i:rawSlitherskin} y {i:clamMeat} con {i:refreshingSpringWater}.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:coyoteMeat} y {i:rawLongjaw}. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "Platos de Cuna del Invierno y las recetas de La Masacre o del libro de cocina que sueltan los jefes. El 300 se cierra con esas recetas.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Cocina de Outland con {n:baxter} o {n:gaston}.",
        steps: [
          {
            text: "{i:buzzardMeat} y recetas de Fuego Infernal hasta ~350. Después hacé las diarias de {n:theRokk} en Shattrath: son la ruta barata al 375.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Cocina.",
    pairing: { slug: "fishing", name: "Pesca en The Burning Crusade" },
  },

  "fishing-tbc": {
    slug: "fishing",
    nativeId: "fishing-tbc",
    title: "Subida de nivel de Pesca en The Burning Crusade",
    intro: [
      "Esta guía te lleva Pesca de The Burning Crusade del 1 al 375. El tope de la expansión es 375, igual que el resto de las profesiones.",
      "Cocina es la pareja natural: el pescado se gasta en la Subida de Cocina.",
    ],
    trainerHordeKey: "lumak",
    trainerAllianceKey: "arnold",
    extraNpcs: [{ key: "juno", role: "Marisma de Zangar (Outland)" }],
    trainerNote:
      "Aprendé en la capital para 1-300. En Outland, Juno Dufrain (Cenarion Refuge, Marisma de Zangar) enseña a ambas facciones.",
    tomtom: "/way #1946 78.0 66.1 Juno Dufrain",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Juno. Lumak está en el valle de Orgrimmar; Arnold, en el Canal de los Enanos de Ventormenta.",
    shoppingNote:
      "No hace falta lote. {i:brightBaubles} ayudan a picar más rápido; no son obligatorias. Una caña la vende el vendedor de pesca.",
    shopping: [{ materialKey: "brightBaubles", quantity: 40 }],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:lumak} o a {n:arnold} y aprendé Pesca.",
        steps: [
          {
            text: "Pescá en las zonas de inicio. El agua abierta suelta más basura: quedate en pozas o muelles. Sale {i:rawBrilliantSmallfish}.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Ríos de Los Baldíos / Páramos de Poniente / Loch Modan. {i:rawSlitherskin} y {i:rawLongjaw} empiezan a aparecer.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "Costa de Vega de Tuercespina o Bahía del Botín. Si el diario te marca la zona en verde, cambiate.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "Azshara, Costa de la Vorágine o las costas de Tanaris. El 300 es tiempo, no oro.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        intro: "Aprendé Pesca de Outland con {n:juno}.",
        steps: [
          {
            text: "Marisma de Zangar (lagos de Cenarion) y después la costa de Nagrand / Filospada. El tramo final es tiempo. La ruta de farm de pescado caro va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "En The Burning Crusade no hay una racial que dispare Pesca.",
    pairing: { slug: "cooking", name: "Cocina en The Burning Crusade" },
  },

  "jewelcrafting-tbc": {
    slug: "jewelcrafting",
    nativeId: "jewelcrafting-tbc",
    title: "Subida de nivel de Joyería en The Burning Crusade",
    intro: [
      "Esta guía te lleva Joyería de The Burning Crusade del 1 al 375 por la ruta más barata que podemos estimar. Joyería nace en esta expansión: el 1-300 también se hace acá.",
      "Minería es la pareja natural: prospectá estaño, hierro, mitril y hierro vil.",
    ],
    trainerHordeKey: "kalaen",
    trainerAllianceKey: "tatiana",
    trainerNote:
      "Horda y Alianza aprenden Joyería en Outland (Kalaen en Thrallmar, Tatiana en Bastión del Honor) o en Lunargenta / El Exodar. No hay entrenador clásico de 1-300 aparte: Joyería es profesión de The Burning Crusade.",
    tomtom: "/way #1944 56.8 37.7 Kalaen\n/way #1944 54.6 63.6 Tatiana",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Kalaen (Horda) y a Tatiana (Alianza).",
    shoppingNote:
      "Lote estimado para 1-375. Prospectar mena barata cubre gran parte de las gemas. La calidad no aplica.",
    shopping: [
      { materialKey: "copperBar", quantity: 110 },
      { materialKey: "tigerseye", quantity: 15 },
      { materialKey: "malachite", quantity: 15 },
      { materialKey: "shadowgem", quantity: 60 },
      { materialKey: "heavyStone", quantity: 80 },
      { materialKey: "mossAgate", quantity: 30 },
      { materialKey: "lesserMoonstone", quantity: 66 },
      { materialKey: "mithrilBar", quantity: 142 },
      { materialKey: "solidStone", quantity: 90 },
      { materialKey: "truesilverBar", quantity: 28 },
      { materialKey: "aquamarine", quantity: 35 },
      { materialKey: "felIronBar", quantity: 20 },
      { materialKey: "adamantiteBar", quantity: 20 },
    ],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:kalaen} o a {n:tatiana} y aprendé Joyería.",
        steps: [
          {
            title: "1-75",
            text: "Alambre de cobre delicado y colgantes con {i:copperBar}, {i:tigerseye} y {i:malachite}.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "{i:shadowgem}, {i:heavyStone} y {i:mossAgate}. Prospectá estaño si te faltan gemas.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "{i:lesserMoonstone} y anillos de plata/oro. Artesano a 200.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "{i:mithrilBar}, {i:solidStone}, {i:truesilverBar} y {i:aquamarine}. Prospectá mitril y torio.",
          },
        ],
      },
      {
        from: 300,
        to: 375,
        steps: [
          {
            text: "Tallá gemas de Outland (prospectá {i:felIronOre} y {i:adamantiteOre}). {i:felIronBar} y {i:adamantiteBar} entran en monturas y anillos del tramo alto.",
          },
        ],
      },
    ],
    racials:
      "Los draenei tienen bonus de Joyería con {h:28875|Talla de gemas}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "mining", name: "Minería en The Burning Crusade" },
  },
};
