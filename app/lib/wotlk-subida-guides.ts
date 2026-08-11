import type { WotlkNativeId, WotlkSubidaSpec } from "~/lib/wotlk-subida-types";

const CLASSIC_TO_NORTHREND =
  "Del 1 al 350 seguí la ruta clásica / The Burning Crusade (mismas recetas baratas). A 350 aprendé Gran Maestro en Rasganorte y pasá a materiales del Norte.";

export const WOTLK_SUBIDA_GUIDES: Record<WotlkNativeId, WotlkSubidaSpec> = {
  "alchemy-wotlk": {
    slug: "alchemy",
    nativeId: "alchemy-wotlk",
    title: "Subida de nivel de Alquimia en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Alquimia de Wrath of the Lich King del 1 al 450. El tramo 1-350 es la ruta clásica / The Burning Crusade; el 350-450 se hace con hierbas de Rasganorte.",
      "Herboristería es la pareja natural: si farmeás {i:goldclover} y {i:lichbloom} vos, te ahorrás un montón.",
    ],
    trainerHordeKey: "arthur",
    trainerAllianceKey: "falorn",
    extraNpcs: [{ key: "linzy", role: "Gran Maestra en Dalaran" }],
    trainerNote:
      "Gran Maestro lo enseñan {n:arthur} (Horda) y {n:falorn} (Alianza) en Tundra Boreal, o {n:linzy} en Dalaran para las dos facciones. El 1-350 se aprende en las capitales de siempre.",
    tomtom:
      "/way #114 52.2 73.5 Arthur Henslowe\n/way #114 57.8 71.8 Falorn Susurro Nocturno\n/way #125 42.6 32.1 Linzy Pernonegro",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom. #114 es Tundra Boreal; #125 es Dalaran.",
    shoppingNote:
      "Lote estimado para 350-450 (Norte). El 1-350 usa el lote clásico / The Burning Crusade. Viales los vende cualquier suministros. La calidad no aplica.",
    shopping: [
      { materialKey: "goldclover", quantity: 80 },
      { materialKey: "deadnettle", quantity: 20 },
      { materialKey: "tigerLily", quantity: 20 },
      { materialKey: "talandrasRose", quantity: 20 },
      { materialKey: "addersTongue", quantity: 20 },
      { materialKey: "lichbloom", quantity: 60 },
      { materialKey: "icethorn", quantity: 20 },
      { materialKey: "frostLotus", quantity: 10 },
      { materialKey: "crystallizedLife", quantity: 15 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Seguí pociones y elixires clásicos hasta Artesano / Maestro." }] },
      { from: 300, to: 350, steps: [{ text: "Cerrá el 350 con recetas de Terrallende (hierba vil, gloria de ensueño) antes de viajar a Rasganorte." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:linzy}, {n:arthur} o {n:falorn}.",
        steps: [
          {
            text: "{r:53900|Poción de pesadillas} y {r:54218|Elixir de fuerza poderosa} con {i:goldclover}, {i:talandrasRose} y {i:tigerLily} hasta ~400. Después {i:lichbloom}, {i:icethorn} y un toque de {i:frostLotus}. Transmutar {i:crystallizedLife} da puntos si las hierbas están caras.",
          },
        ],
      },
    ],
    racials:
      "Los trols tienen +15 de Alquimia. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "herbalism", name: "Herboristería en Wrath of the Lich King" },
  },

  "blacksmithing-wotlk": {
    slug: "blacksmithing",
    nativeId: "blacksmithing-wotlk",
    title: "Subida de nivel de Herrería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Herrería de Wrath of the Lich King del 1 al 450. Minería va de la mano: cobalto y saronita se funden en Dalaran.",
    ],
    trainerHordeKey: "alard",
    trainerAllianceKey: "alard",
    trainerNote:
      "Gran Maestro lo enseña {n:alard} en Dalaran (ambas facciones). El 1-350 se aprende en las capitales de siempre.",
    tomtom: "/way #125 45.5 28.0 Alard Schmied",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Alard en Dalaran.",
    shoppingNote:
      "Lote estimado para 350-450. El 1-350 usa el lote clásico / The Burning Crusade (cobre → hierro vil).",
    shopping: [
      { materialKey: "cobaltBar", quantity: 180 },
      { materialKey: "saroniteBar", quantity: 320 },
      { materialKey: "crystallizedEarth", quantity: 20 },
      { materialKey: "titaniumBar", quantity: 10 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Hierro, acero y mitril como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Hierro vil y adamantita de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:alard}.",
        steps: [
          {
            text: "{r:54918|Botas de cobalto claveteadas} y otras piezas de {i:cobaltBar} hasta ~400. Después {r:55017|Brazales de saronita templada} con {i:saroniteBar} hasta el tope. {i:titaniumBar} entra en un par de recetas naranjas del final.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Herrería.",
    pairing: { slug: "mining", name: "Minería en Wrath of the Lich King" },
  },

  "enchanting-wotlk": {
    slug: "enchanting",
    nativeId: "enchanting-wotlk",
    title: "Subida de nivel de Encantamiento en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Encantamiento de Wrath of the Lich King del 1 al 450. Desencantá el equipo verde de Rasganorte: el {i:infiniteDust} sale de ahí.",
    ],
    trainerHordeKey: "nalthanis",
    trainerAllianceKey: "nalthanis",
    extraNpcs: [{ key: "ildine", role: "Vendedora de varas y fórmulas" }],
    trainerNote:
      "Gran Maestro lo enseña {n:nalthanis} en Dalaran. {n:ildine}, al lado, vende varas y fórmulas.",
    tomtom: "/way #125 39.0 40.5 Encantador Nalthanis",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Nalthanis.",
    shoppingNote:
      "Lote estimado para 350-450. Si desencantás vos, comprá menos polvo. {n:ildine} vende las varas.",
    shopping: [
      { materialKey: "infiniteDust", quantity: 220 },
      { materialKey: "greaterCosmicEssence", quantity: 25 },
      { materialKey: "dreamShard", quantity: 15 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Polvo de visión, onírico e ilusión como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Polvo Arcano de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:nalthanis}.",
        steps: [
          {
            text: "{r:60609|Encantar capa: velocidad} con {i:infiniteDust} hasta ~425. El tramo final usa {r:62256|Encantar brazales: aguante sublime} con {i:greaterCosmicEssence} y {i:dreamShard}.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Encantamiento.",
    pairing: { slug: "tailoring", name: "Sastrería en Wrath of the Lich King" },
  },

  "engineering-wotlk": {
    slug: "engineering",
    nativeId: "engineering-wotlk",
    title: "Subida de nivel de Ingeniería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Ingeniería de Wrath of the Lich King del 1 al 450. Minería es la pareja natural: cobalto y saronita entran en casi todo el Norte.",
    ],
    trainerHordeKey: "timofey",
    trainerAllianceKey: "timofey",
    trainerNote:
      "Gran Maestro lo enseña {n:timofey} en Dalaran (ambas facciones). A 350-400 podés seguir gnómica o goblin; no es obligatorio para el tope.",
    tomtom: "/way #125 39.0 26.2 Timofey Oshenko",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Timofey.",
    shoppingNote: "Lote estimado para 350-450. El 1-350 usa el lote clásico / The Burning Crusade.",
    shopping: [
      { materialKey: "cobaltBar", quantity: 120 },
      { materialKey: "saroniteBar", quantity: 180 },
      { materialKey: "crystallizedEarth", quantity: 30 },
      { materialKey: "crystallizedWater", quantity: 15 },
      { materialKey: "crystallizedFire", quantity: 10 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Hierro, mitril y torio como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Hierro vil de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:timofey}.",
        steps: [
          {
            text: "{r:56464|Condensador sobrecargado} y piezas de {i:cobaltBar} hasta ~400. Después {i:saroniteBar} y motas cristalizadas hasta el tope.",
          },
        ],
      },
    ],
    racials:
      "Los gnomos tienen +15 de Ingeniería con {h:20593|Especialización en ingeniería}.",
    pairing: { slug: "mining", name: "Minería en Wrath of the Lich King" },
  },

  "leatherworking-wotlk": {
    slug: "leatherworking",
    nativeId: "leatherworking-wotlk",
    title: "Subida de nivel de Peletería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Peletería de Wrath of the Lich King del 1 al 450. Desuello es la pareja natural: el {i:boreanLeather} sale de las bestias de Rasganorte.",
    ],
    trainerHordeKey: "diane",
    trainerAllianceKey: "diane",
    trainerNote: "Gran Maestro lo enseña {n:diane} en Dalaran (ambas facciones).",
    tomtom: "/way #125 34.7 28.6 Diane Latas",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Diane.",
    shoppingNote: "Lote estimado para 350-450. El 1-350 usa el lote clásico / The Burning Crusade.",
    shopping: [
      { materialKey: "boreanLeather", quantity: 450 },
      { materialKey: "heavyBoreanLeather", quantity: 200 },
      { materialKey: "arcticFur", quantity: 8 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Cuero pesado, grueso y basto como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Pellejo nudoso de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:diane}.",
        steps: [
          {
            text: "{r:50962|Refuerzo para armadura boreal} con {i:boreanLeather} hasta ~400. Convertí a {r:50936|Cuero boreal pesado} y elaborá hasta el tope. {i:arcticFur} entra en un par de recetas naranjas.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Peletería.",
    pairing: { slug: "skinning", name: "Desuello en Wrath of the Lich King" },
  },

  "tailoring-wotlk": {
    slug: "tailoring",
    nativeId: "tailoring-wotlk",
    title: "Subida de nivel de Sastrería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Sastrería de Wrath of the Lich King del 1 al 450. El {i:frostweave} se farmea de humanoides de Rasganorte.",
    ],
    trainerHordeKey: "charles",
    trainerAllianceKey: "charles",
    trainerNote: "Gran Maestro lo enseña {n:charles} en Dalaran (ambas facciones).",
    tomtom: "/way #125 36.3 33.6 Charles Valor",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Charles.",
    shoppingNote: "Lote estimado para 350-450. El 1-350 usa lino → tejido abisal.",
    shopping: [
      { materialKey: "frostweave", quantity: 600 },
      { materialKey: "infiniteDust", quantity: 20 },
      { materialKey: "crystallizedWater", quantity: 10 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Seda, tejido mágico y paño rúnico como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Tejido abisal de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:charles}.",
        steps: [
          {
            text: "{r:55899|Madeja de tejido de Escarcha} y {r:56007|Bolsa de tejido de Escarcha} hasta el tope. Un toque de {i:infiniteDust} y {i:crystallizedWater} entra en las telas imbuidas.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Sastrería.",
    pairing: { slug: "enchanting", name: "Encantamiento en Wrath of the Lich King" },
  },

  "herbalism-wotlk": {
    slug: "herbalism",
    nativeId: "herbalism-wotlk",
    title: "Subida de nivel de Herboristería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Herboristería de Wrath of the Lich King del 1 al 450. No hay lista de compras de oro: la habilidad sale de los nodos.",
      "Alquimia e Inscripción son las parejas naturales.",
    ],
    trainerHordeKey: "dorothy",
    trainerAllianceKey: "dorothy",
    trainerNote:
      "Gran Maestro lo enseña {n:dorothy} en Dalaran (ambas facciones). El 1-350 se aprende en las capitales de siempre.",
    tomtom: "/way #125 43.9 34.8 Dorothy Egan",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Dorothy.",
    shoppingNote: "No hace falta lote. Activá el rastreo de hierbas en el minimapa.",
    shopping: [],
    ranges: [
      { from: 1, to: 150, steps: [{ text: "Zonas de inicio → Baldíos / Páramos de Poniente. {i:peacebloom}, {i:silverleaf}, {i:mageroyal}." }] },
      { from: 150, to: 300, steps: [{ text: "Tuercespina, Tanaris, Frondavil. {i:sungrass}, {i:gromsblood}, {i:dreamfoil}." }] },
      { from: 300, to: 350, steps: [{ text: "Terrallende: {i:felweed} y {i:dreamingGlory} hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:dorothy}.",
        steps: [
          {
            text: "Tundra Boreal y Fiordo Aquilonal: {i:goldclover} y {i:tigerLily}. Cuenca de Sholazar: {i:addersTongue}. Cumbres Tormentosas y Corona de Hielo: {i:lichbloom} e {i:icethorn} cierran el 450.",
          },
        ],
      },
    ],
    racials: "Los tauren tienen bonus de Herboristería con {h:20552|Cultivo}.",
    pairing: { slug: "alchemy", name: "Alquimia en Wrath of the Lich King" },
  },

  "mining-wotlk": {
    slug: "mining",
    nativeId: "mining-wotlk",
    title: "Subida de nivel de Minería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Minería de Wrath of the Lich King del 1 al 450. No hay lista de compras de oro: la habilidad sale de los filones y de fundir.",
    ],
    trainerHordeKey: "jedidiah",
    trainerAllianceKey: "jedidiah",
    trainerNote: "Gran Maestro lo enseña {n:jedidiah} en Dalaran (ambas facciones). Fundir mena da habilidad: no lo saltees.",
    tomtom: "/way #125 41.3 25.6 Jedidiah Handers",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Jedidiah.",
    shoppingNote: "No hace falta lote. Un pico lo vende el vendedor de minería al lado del entrenador.",
    shopping: [],
    ranges: [
      { from: 1, to: 150, steps: [{ text: "Cobre, estaño y plata. Fundí todo lo que saques." }] },
      { from: 150, to: 300, steps: [{ text: "Hierro, mitril y torio. Garganta de Fuego y Cuna del Invierno cierran el 300." }] },
      { from: 300, to: 350, steps: [{ text: "Hierro vil y adamantita de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:jedidiah}.",
        steps: [
          {
            text: "Picá {i:cobaltOre} en Tundra Boreal / Fiordo hasta ~400. Después {i:saroniteOre} en Cumbres Tormentosas y Corona de Hielo. El {i:titaniumOre} es extra: no hace falta para el tope.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Minería.",
    pairing: { slug: "blacksmithing", name: "Herrería en Wrath of the Lich King" },
  },

  "skinning-wotlk": {
    slug: "skinning",
    nativeId: "skinning-wotlk",
    title: "Subida de nivel de Desuello en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Desuello de Wrath of the Lich King del 1 al 450. No hay lista de compras de oro. Peletería es la pareja natural.",
    ],
    trainerHordeKey: "derik",
    trainerAllianceKey: "derik",
    trainerNote: "Gran Maestro lo enseña {n:derik} en Dalaran (ambas facciones).",
    tomtom: "/way #125 34.8 28.0 Derik Marks",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Derik.",
    shoppingNote: "No hace falta lote. Un cuchillo lo vende el vendedor al lado del entrenador.",
    shopping: [],
    ranges: [
      { from: 1, to: 150, steps: [{ text: "Bestias de zonas de inicio y Baldíos / Páramos de Poniente." }] },
      { from: 150, to: 300, steps: [{ text: "Tuercespina, Cuna del Invierno y el Cráter de Un'Goro. {i:ruggedLeather}." }] },
      { from: 300, to: 350, steps: [{ text: "Bestias de Terrallende: {i:knothideLeather} hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:derik}.",
        steps: [
          {
            text: "Bestias de Tundra Boreal y Cuenca de Sholazar sueltan {i:boreanLeather}. El {i:arcticFur} es extra. Si un cadáver se pone verde, cambiate de zona.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Desuello.",
    pairing: { slug: "leatherworking", name: "Peletería en Wrath of the Lich King" },
  },

  "cooking-wotlk": {
    slug: "cooking",
    nativeId: "cooking-wotlk",
    title: "Subida de nivel de Cocina en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Cocina de Wrath of the Lich King del 1 al 450. Pesca es la pareja natural. En Dalaran las diarias empujan el tramo 400-450.",
    ],
    trainerHordeKey: "awilo",
    trainerAllianceKey: "katherine",
    trainerNote:
      "Gran Maestro lo enseñan {n:awilo} (Horda) y {n:katherine} (Alianza) en Dalaran, cada uno en su taberna. El 1-350 se aprende en las capitales.",
    tomtom: "/way #125 70.0 38.6 Awilo Lon'gomba\n/way #125 40.6 65.8 Katherine Lee",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom. Awilo está en el Solaz Púrpura; Katherine, en el Descanso del Cazador.",
    shoppingNote:
      "Lote estimado para 350-400. Del 400 al tope las diarias de Dalaran son más baratas que spamear platos. {i:northernSpices} las da la diaria.",
    shopping: [
      { materialKey: "chilledMeat", quantity: 80 },
      { materialKey: "rhinoMeat", quantity: 40 },
      { materialKey: "succulentClam", quantity: 30 },
      { materialKey: "glacialSalmon", quantity: 30 },
      { materialKey: "northernSpices", quantity: 40 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Platos clásicos y el libro de recetas hasta Maestro." }] },
      { from: 300, to: 350, steps: [{ text: "Diarias de El Rokk en Shattrath o platos de Terrallende hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:awilo} o {n:katherine}.",
        steps: [
          {
            text: "{r:57421|Estofado del Norte} con {i:chilledMeat} y {i:rhinoMeat} hasta ~400. Después hacé las diarias de cocina en Dalaran: dan {i:northernSpices} y puntos hasta 450.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Cocina.",
    pairing: { slug: "fishing", name: "Pesca en Wrath of the Lich King" },
  },

  "jewelcrafting-wotlk": {
    slug: "jewelcrafting",
    nativeId: "jewelcrafting-wotlk",
    title: "Subida de nivel de Joyería en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Joyería de Wrath of the Lich King del 1 al 450. Minería es la pareja: prospectá cobalto y saronita.",
    ],
    trainerHordeKey: "timothy",
    trainerAllianceKey: "timothy",
    trainerNote: "Gran Maestro lo enseña {n:timothy} en Dalaran (ambas facciones).",
    tomtom: "/way #125 40.7 35.4 Timothy Jones",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Timothy.",
    shoppingNote: "Lote estimado para 350-450 (prospectar cubre gran parte). El 1-350 usa el lote clásico / The Burning Crusade.",
    shopping: [
      { materialKey: "cobaltOre", quantity: 80 },
      { materialKey: "saroniteOre", quantity: 120 },
      { materialKey: "crystallizedEarth", quantity: 20 },
      { materialKey: "titaniumBar", quantity: 8 },
    ],
    ranges: [
      { from: 1, to: 150, steps: [{ text: CLASSIC_TO_NORTHREND }] },
      { from: 150, to: 300, steps: [{ text: "Mitril, veraplata y aguamarinas como en la ruta clásica." }] },
      { from: 300, to: 350, steps: [{ text: "Prospectá hierro vil / adamantita hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:timothy}.",
        steps: [
          {
            text: "Prospectá {i:cobaltOre} y tallá {r:53831|Sangrita llamativa} hasta ~400. Después {i:saroniteOre} y {r:58146|Anillo de poder de sombra}. {i:titaniumBar} entra en anillos del tramo alto.",
          },
        ],
      },
    ],
    racials: "Los draenei tienen bonus de Joyería con {h:28875|Talla de gemas}.",
    pairing: { slug: "mining", name: "Minería en Wrath of the Lich King" },
  },

  "fishing-wotlk": {
    slug: "fishing",
    nativeId: "fishing-wotlk",
    title: "Subida de nivel de Pesca en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Pesca de Wrath of the Lich King del 1 al 450. El tope de la expansión es 450, igual que el resto. Cocina es la pareja natural.",
    ],
    trainerHordeKey: "marcia",
    trainerAllianceKey: "marcia",
    trainerNote:
      "Gran Maestro lo enseña {n:marcia} en Dalaran (ambas facciones), en la fuente de El Anochecer. El 1-350 se aprende en las capitales.",
    tomtom: "/way #125 53.0 64.9 Marcia Sedal",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Marcia.",
    shoppingNote: "No hace falta lote. Una caña la vende el vendedor de pesca.",
    shopping: [],
    ranges: [
      { from: 1, to: 150, steps: [{ text: "Pozas de las zonas de inicio y ríos de Los Baldíos / Páramos de Poniente." }] },
      { from: 150, to: 300, steps: [{ text: "Costa de Tuercespina, Azshara o Tanaris." }] },
      { from: 300, to: 350, steps: [{ text: "Marisma de Zangar y Nagrand hasta Gran Maestro." }] },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:marcia}.",
        steps: [
          {
            text: "Pescá en Tundra Boreal / Fiordo y después en la fuente de Dalaran o los lagos de Sholazar. {i:glacialSalmon} entra en Cocina. El tramo final es tiempo.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Pesca.",
    pairing: { slug: "cooking", name: "Cocina en Wrath of the Lich King" },
  },

  "inscription-wotlk": {
    slug: "inscription",
    nativeId: "inscription-wotlk",
    title: "Subida de nivel de Inscripción en Wrath of the Lich King",
    intro: [
      "Esta guía te lleva Inscripción de Wrath of the Lich King del 1 al 450. La profesión nace en esta expansión: el 1-350 también se hace acá, moliendo hierbas clásicas.",
      "Herboristería es la pareja natural.",
    ],
    trainerHordeKey: "pallin",
    trainerAllianceKey: "pallin",
    trainerNote:
      "Toda la profesión se aprende con {n:pallin} en Dalaran (ambas facciones), o con los instructores de Inscripción de las capitales.",
    tomtom: "/way #125 41.8 37.1 Profesor Palin",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Palin.",
    shoppingNote:
      "Lote de hierbas para moler (1-350 clásicas + Norte). Del 350 al tope usá {i:inkOfTheSea} y {i:snowfallInk}. El pergamino lo vende {n:pallin}.",
    shopping: [
      { materialKey: "peacebloom", quantity: 60 },
      { materialKey: "silverleaf", quantity: 60 },
      { materialKey: "goldclover", quantity: 80 },
      { materialKey: "lichbloom", quantity: 40 },
      { materialKey: "inkOfTheSea", quantity: 80 },
      { materialKey: "snowfallInk", quantity: 20 },
      { materialKey: "lightParchment", quantity: 200, vendorKey: "pallin" },
    ],
    ranges: [
      {
        from: 1,
        to: 150,
        intro: "Visitá a {n:pallin} y aprendé Inscripción.",
        steps: [
          {
            text: "Molé hierbas bajas y fabricá {r:52738|Tinta de marfil}, {r:53462|Tinta de medianoche} y {i:lionsInk} sobre {i:lightParchment}.",
          },
        ],
      },
      {
        from: 150,
        to: 300,
        steps: [
          {
            text: "{i:jadefireInk}, {i:celestialInk} y {i:shimmeringInk}. Glifos menores cubren este tramo.",
          },
        ],
      },
      {
        from: 300,
        to: 350,
        steps: [
          {
            text: "{i:etherealInk} y los últimos glifos de Terrallende hasta Gran Maestro.",
          },
        ],
      },
      {
        from: 350,
        to: 450,
        intro: "Aprendé Gran Maestro con {n:pallin}.",
        steps: [
          {
            text: "Molé {i:goldclover} y {i:lichbloom} para {r:57715|Tinta del mar} y {r:57716|Tinta de avalancha}. Spameá glifos menores/mayores naranjas hasta 450.",
          },
        ],
      },
    ],
    racials: "En Wrath of the Lich King no hay una racial que dispare Inscripción.",
    pairing: { slug: "herbalism", name: "Herboristería en Wrath of the Lich King" },
  },
};
