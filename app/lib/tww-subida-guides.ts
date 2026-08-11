import type { TwwNativeId, TwwSubidaSpec } from "~/lib/tww-subida-types";

export const TWW_SUBIDA_GUIDES: Record<TwwNativeId, TwwSubidaSpec> = {
  "alchemy-tww": {
    slug: "alchemy",
    nativeId: "alchemy-tww",
    title: "Subida de nivel de Alquimia en The War Within",
    intro: [
      "Esta guía te lleva Alquimia de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy. Las cantidades son aproximadas: Experimentación salvaje y meticulosa comen hierbas de más.",
      "Herboristería es la pareja natural: si farmeás {i:mycobloom} vos, te ahorrás un montón en la casa de subastas.",
    ],
    trainerKey: "tarig",
    vendorKey: "hotharn",
    trainerNote:
      "Horda y Alianza aprenden Alquimia en el mismo lugar: Dornogal. Tarig enseña la profesión; Hotharn vende viales y el catalizador al lado.",
    tomtom: "/way #2339 47.1 70.7 Tarig",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Tarig.",
    shoppingNote:
      "Lote estimado para 1-100 con pociones + experimentación. La calidad no importa para subir: comprá lo más barato. {i:gildedVial} y {i:corewayCatalyst} los vende {n:hotharn}.",
    shopping: [
      { materialKey: "mycobloom", quantity: 106 },
      { materialKey: "blessingBlossom", quantity: 45 },
      { materialKey: "orbinid", quantity: 40 },
      { materialKey: "luredrop", quantity: 20 },
      { materialKey: "arathorsSpear", quantity: 11 },
      { materialKey: "gildedVial", quantity: 80, vendorKey: "hotharn" },
      { materialKey: "corewayCatalyst", quantity: 20, vendorKey: "hotharn" },
    ],
    ranges: [
      {
        from: 1,
        to: 30,
        intro: "Visitá a {n:tarig} y aprendé Alquimia de Khaz Algar.",
        steps: [
          {
            title: "1-30",
            text: "Fabricá {r:430590|Poción de sanación algariana} hasta ~30. Llevá holgura de {i:mycobloom}, {i:blessingBlossom} y {i:gildedVial}: los últimos puntos se ponen amarillos.",
          },
        ],
      },
      {
        from: 30,
        to: 60,
        steps: [
          {
            title: "30-60",
            text: "Usá {r:427214|Neutralizar brebajes} con las pociones que te sobren y pasá a {r:427174|Experimentación salvaje}. Guardá cada descubrimiento: te desbloquea recetas del tramo alto.",
          },
        ],
      },
      {
        from: 60,
        to: 100,
        intro:
          "A 50 se te abre la primera especialización. Para el tope no hace falta un árbol concreto.",
        steps: [
          {
            title: "60-100",
            text: "Spameá {r:430345|Experimentación meticulosa} y {r:430591|Poción de maná algariana}. Si las hierbas están caras, alterná con {r:430604|Frasco de maestría templada} cuando esté naranja.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "herbalism", name: "Herboristería en The War Within" },
  },

  "blacksmithing-tww": {
    slug: "blacksmithing",
    nativeId: "blacksmithing-tww",
    title: "Subida de nivel de Herrería en The War Within",
    intro: [
      "Esta guía te lleva Herrería de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy. Las cantidades son aproximadas.",
      "Minería va de la mano: si fundís {i:bismuth} vos, te ahorrás muchísimo. Si no tenés Minería, comprá el lote de una.",
    ],
    trainerKey: "darean",
    vendorKey: "borgos",
    trainerNote:
      "Horda y Alianza aprenden Herrería en Dornogal. Darean enseña; Borgos vende flujo y herramientas al lado.",
    tomtom: "/way #2339 49.2 63.5 Darean",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Darean.",
    shoppingNote:
      "Lote estimado para 1-50 (Núcleo de aleación + primeras elaboraciones). Del 50 al tope depende de pedidos de fabricación y equipo de profesión. La calidad no importa para subir.",
    shopping: [
      { materialKey: "bismuth", quantity: 565 },
      { materialKey: "ironclawOre", quantity: 63 },
      { materialKey: "aqirite", quantity: 5 },
      { materialKey: "crystallinePowder", quantity: 40 },
      { materialKey: "echoingFlux", quantity: 80, vendorKey: "borgos" },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:darean} y aprendé Herrería de Khaz Algar.",
        steps: [
          {
            title: "1-25",
            text: "Spameá {r:450216|Núcleo de aleación} con {i:bismuth} y {i:echoingFlux}. Activá el filtro de bonus de primera elaboración y fabricá cada receta nueva una vez.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí con aleación y las primeras armas/herramientas baratas ({r:450273|Martillo de herrería competente} si está naranja).",
          },
        ],
      },
      {
        from: 50,
        to: 100,
        intro:
          "Del 50 al tope la ruta barata se mueve con el parche: equipo de profesión o pedidos de fabricación.",
        steps: [
          {
            text: "Priorizá pedidos de armas y armaduras que sigan naranja. Si el equipo de profesión no pide moneda ligada, elaboralo hasta el tope. Los pedidos de patrón (NPC) son tuyos: nadie te los saca.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "mining", name: "Minería en The War Within" },
  },

  "enchanting-tww": {
    slug: "enchanting",
    nativeId: "enchanting-tww",
    title: "Subida de nivel de Encantamiento en The War Within",
    intro: [
      "Esta guía te lleva Encantamiento de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy. Varias recetas se ponen amarillas: llevá holgura de {i:stormDust}.",
      "Si venís de Sastrería o Herrería, desencantar el equipo de quest y mazmorras te da puntos y te devuelve polvo.",
    ],
    trainerKey: "nagad",
    vendorKey: "iliani",
    trainerNote:
      "Horda y Alianza aprenden Encantamiento con Nagad en Dornogal. Iliani vende varas y vitelas al lado.",
    tomtom: "/way #2339 52.9 71.3 Nagad",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Nagad.",
    shoppingNote:
      "Lote estimado para 1-70. Del 70 al tope depende de qué encantamientos caros desbloquees. Poné los encantamientos en vitela y vendelos. La calidad no importa para subir.",
    shopping: [
      { materialKey: "stormDust", quantity: 673 },
      { materialKey: "leylineResidue", quantity: 23 },
      { materialKey: "verdantSpores", quantity: 22 },
      { materialKey: "gleamingShard", quantity: 26 },
      { materialKey: "ringingDeepsIngot", quantity: 5 },
      { materialKey: "refulgentCrystal", quantity: 5 },
      { materialKey: "bismuthRod", quantity: 20, vendorKey: "iliani" },
    ],
    ranges: [
      {
        from: 1,
        to: 27,
        intro: "Visitá a {n:nagad} y aprendé Encantamiento de Khaz Algar.",
        steps: [
          {
            title: "1-27",
            text: "Fabricá varas rúnicas con {i:bismuthRod} y {i:stormDust}, desencantalas y recuperá parte del polvo. Después pasá a los encantamientos brillantes baratos.",
          },
        ],
      },
      {
        from: 27,
        to: 70,
        steps: [
          {
            title: "27-70",
            text: "Spameá {r:445384|Celeridad brillante} o {r:445358|Golpe crítico brillante} en {i:enchantingVellum} (la vende {n:iliani}). Usá {i:gleamingShard} y {i:leylineResidue} cuando la receta lo pida.",
          },
        ],
      },
      {
        from: 70,
        to: 100,
        steps: [
          {
            text: "Pasá a encantamientos de anillo/capa de mayor nivel cuando estén naranja. Si el polvo está caro, desencantá equipo de mazmorra antes de comprar más {i:stormDust}.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "tailoring", name: "Sastrería en The War Within" },
  },

  "engineering-tww": {
    slug: "engineering",
    nativeId: "engineering-tww",
    title: "Subida de nivel de Ingeniería en The War Within",
    intro: [
      "Esta guía te lleva Ingeniería de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Minería es la pareja natural: {i:bismuth} y {i:aqirite} entran en casi todo el tramo bajo.",
    ],
    trainerKey: "arhdas",
    vendorKey: "lyrendal",
    trainerNote:
      "Horda y Alianza aprenden Ingeniería con el Videntérmico Arhdas en Dornogal. Lyrendal, del Consorcio de artesanos, vende recetas de equipo de profesión.",
    tomtom: "/way #2339 49.2 55.9 Videntérmico Arhdas",
    tomtomNote:
      "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Arhdas.",
    shoppingNote:
      "Lote estimado para 1-40 (mena). Del 40 al tope la chatarra no se compra: sale de {r:447310|Buscar entre la chatarra} y de nodos de Ingeniería. La calidad no importa para subir.",
    shopping: [
      { materialKey: "bismuth", quantity: 260 },
      { materialKey: "aqirite", quantity: 22 },
      { materialKey: "crystallinePowder", quantity: 4 },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:arhdas} y aprendé Ingeniería de Khaz Algar.",
        steps: [
          {
            title: "1-25",
            text: "Fabricá piezas y herramientas baratas con {i:bismuth}. Activá el bonus de primera elaboración en cada receta nueva.",
          },
        ],
      },
      {
        from: 25,
        to: 40,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí con piezas de {i:aqirite} y {i:crystallinePowder} hasta que se pongan verdes.",
          },
        ],
      },
      {
        from: 40,
        to: 100,
        steps: [
          {
            text: "Spameá {r:447310|Buscar entre la chatarra} y {r:447311|Saquear las piezas} con {i:heapOfUnstableScrap}. Si Lyrendal te desbloqueó equipo de profesión, elaboralo: suele quedar naranja hasta el tope.",
          },
        ],
      },
    ],
    racials:
      "Los gnomos tienen bonus de Ingeniería con {h:20593|Especialización en ingeniería}. Los kul tiranos tienen +2 con {h:291442|Factótum}.",
    pairing: { slug: "mining", name: "Minería en The War Within" },
  },

  "leatherworking-tww": {
    slug: "leatherworking",
    nativeId: "leatherworking-tww",
    title: "Subida de nivel de Peletería en The War Within",
    intro: [
      "Esta guía te lleva Peletería de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Desuello es la pareja natural: {i:stormchargedLeather} y {i:gloomChitin} salen de las bestias de Khaz Algar.",
    ],
    trainerKey: "marbb",
    extraNpcs: [{ key: "balwurz", role: "Conocimiento de artesano" }],
    trainerNote:
      "Horda y Alianza aprenden Peletería con Marbb en Dornogal. El Auditor Balwurz, en el Consorcio, canjea conocimiento si te trabás con recetas.",
    tomtom: "/way #2339 54.4 58.8 Marbb",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Marbb.",
    shoppingNote:
      "Lote estimado para 1-62. Del 62 al tope depende de armaduras y pedidos. La calidad no importa para subir.",
    shopping: [
      { materialKey: "stormchargedLeather", quantity: 340 },
      { materialKey: "gloomChitin", quantity: 305 },
      { materialKey: "sunlessCarapace", quantity: 4 },
      { materialKey: "thunderousHide", quantity: 6 },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:marbb} y aprendé Peletería de Khaz Algar.",
        steps: [
          {
            title: "1-25",
            text: "Fabricá refuerzos y piezas baratas con {i:stormchargedLeather}. Primera elaboración de cada receta nueva.",
          },
        ],
      },
      {
        from: 25,
        to: 62,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Alterná cuero y {i:gloomChitin} según qué esté más barato. Guardá {i:sunlessCarapace} y {i:thunderousHide} para las recetas que los pidan.",
          },
        ],
      },
      {
        from: 62,
        to: 100,
        steps: [
          {
            text: "Armaduras y pedidos de fabricación. Si una receta se pone verde, cambiate a la que siga naranja. Los pedidos de patrón (NPC) no te los saca nadie.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "skinning", name: "Desuello en The War Within" },
  },

  "tailoring-tww": {
    slug: "tailoring",
    nativeId: "tailoring-tww",
    title: "Subida de nivel de Sastrería en The War Within",
    intro: [
      "Esta guía te lleva Sastrería de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "{i:weavercloth} sale de humanoides de Khaz Algar y de la casa de subastas. Encantamiento es buena pareja si desencantás el equipo que te sobra.",
    ],
    trainerKey: "kotag",
    vendorKey: "vorig",
    trainerNote:
      "Horda y Alianza aprenden Sastrería con Kotag en Dornogal. Vorig vende hilo y suministros al lado.",
    tomtom: "/way #2339 54.6 63.5 Kotag",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Kotag.",
    shoppingNote:
      "Lote estimado para 1-65 en rollos de tejetela. Del 65 al tope entra tejido del ocaso/amanecer. La calidad no importa para subir.",
    shopping: [
      { materialKey: "weavercloth", quantity: 400 },
      { materialKey: "stormDust", quantity: 10 },
      { materialKey: "writhingSample", quantity: 30 },
      { materialKey: "leylineResidue", quantity: 4 },
      { materialKey: "duskThread", quantity: 30, vendorKey: "vorig" },
      { materialKey: "dawnThread", quantity: 10, vendorKey: "vorig" },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:kotag} y aprendé Sastrería de Khaz Algar.",
        steps: [
          {
            title: "1-25",
            text: "Convertí {i:weavercloth} en rollos y fabricá las primeras bolsas/vendas. Primera elaboración de cada receta nueva.",
          },
        ],
      },
      {
        from: 25,
        to: 65,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí con rollos y piezas de tela baratas. {i:writhingSample} entra en un par de recetas del medio.",
          },
        ],
      },
      {
        from: 65,
        to: 100,
        steps: [
          {
            text: "Pasá a {i:duskweaveBolt} y {i:dawnweaveBolt} cuando las recetas estén naranja. Si el hilo está caro, quedate en tejetela hasta que se ponga verde y recién ahí cambiá.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "enchanting", name: "Encantamiento en The War Within" },
  },

  "herbalism-tww": {
    slug: "herbalism",
    nativeId: "herbalism-tww",
    title: "Subida de nivel de Herboristería en The War Within",
    intro: [
      "Esta guía te lleva Herboristería de Khaz Algar del 1 al 100 recolectando en Isla de Dorn y el resto del continente. No hay lista de compras de oro: la habilidad sale de los nodos.",
      "Alquimia e Inscripción son las parejas naturales: lo que farmeás acá se gasta en pociones y tintas.",
    ],
    trainerKey: "akdan",
    vendorKey: "berred",
    trainerNote:
      "Aprendé Herboristería de Khaz Algar con Akdan en Dornogal. Berred vende la hoz si no tenés herramienta de profesión.",
    tomtom: "/way #2339 44.8 69.3 Akdan",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Akdan.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Llevá té de recolección si querés más Destreza. El equipo de profesión ayuda, no es obligatorio para el tope.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:akdan} y aprendé Herboristería de Khaz Algar.",
        steps: [
          {
            text: "Recolectá {i:mycobloom} alrededor de Dornogal y la Isla de Dorn. Cualquier nodo de Khaz Algar da habilidad al principio.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Priorizá Destreza si querés ir más rápido. Sumá {i:blessingBlossom} cuando empiece a aparecer.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Bajá a Las Cavernas Resonantes y Santificación: {i:orbinid}, {i:luredrop} y {i:arathorsSpear} empujan este tramo. Los nodos cargados dan extra: no los saltees.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Azj-Kahet y los nodos raros cierran el tope. Si un nodo se pone verde, cambiate de zona. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los tauren tienen bonus de Herboristería con {h:20552|Cultivo}. Los kul tiranos tienen +2 con {h:291442|Factótum}.",
    pairing: { slug: "alchemy", name: "Alquimia en The War Within" },
  },

  "mining-tww": {
    slug: "mining",
    nativeId: "mining-tww",
    title: "Subida de nivel de Minería en The War Within",
    intro: [
      "Esta guía te lleva Minería de Khaz Algar del 1 al 100 picando en Isla de Dorn y el resto del continente. No hay lista de compras de oro: la habilidad sale de los filones.",
      "Herrería, Ingeniería y Joyería son las parejas naturales: fundís o prospectás lo que sacás.",
    ],
    trainerKey: "tarib",
    vendorKey: "gareb",
    trainerNote:
      "Aprendé Minería de Khaz Algar con Tarib en Dornogal. Gareb vende el pico si no tenés herramienta de profesión.",
    tomtom: "/way #2339 52.6 52.5 Tarib",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Tarib.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Un pico lo vende {n:gareb} si no tenés herramienta.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:tarib} y aprendé Minería de Khaz Algar.",
        steps: [
          {
            text: "Picá {i:bismuth} alrededor de Dornogal y la Isla de Dorn. Fundir no es obligatorio para subir, pero te deja mena lista para Herrería o Ingeniería.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí el circuito de bismuto; cuando veas {i:ironclawOre}, picalo también.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Priorizá {i:aqirite} y filones enriquecidos en Las Cavernas Resonantes. El {i:crystallinePowder} sale de nodos cargados: no los ignores.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Filones de mayor nivel en Santificación y Azj-Kahet. Si un filón se pone verde, cambiate de zona. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja los filones naranjas más tiempo.",
    pairing: { slug: "blacksmithing", name: "Herrería en The War Within" },
  },

  "skinning-tww": {
    slug: "skinning",
    nativeId: "skinning-tww",
    title: "Subida de nivel de Desuello en The War Within",
    intro: [
      "Esta guía te lleva Desuello de Khaz Algar del 1 al 100 desollando bestias de Isla de Dorn y el resto del continente. No hay lista de compras de oro: la habilidad sale de los cueros.",
      "Peletería es la pareja natural.",
    ],
    trainerKey: "ginnad",
    trainerNote:
      "Aprendé Desuello de Khaz Algar con Ginnad en Dornogal, cerca de Peletería. Las bestias de Khaz Algar sueltan cuero cargado y quitina.",
    tomtom: "/way #2339 54.3 57.4 Ginnad",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Ginnad.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Un cuchillo de desuello lo vende el vendedor al lado del entrenador si no tenés herramienta.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:ginnad} y aprendé Desuello de Khaz Algar.",
        steps: [
          {
            text: "Desollá bestias cerca de Dornogal. Al principio cualquier cadáver de Khaz Algar da habilidad y {i:stormchargedLeather} o {i:gloomChitin}.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí un circuito de bestias densas en Isla de Dorn. No tires {i:thunderousHide} ni {i:sunlessCarapace}: Peletería los pide.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Buscá packs más altos en Las Cavernas Resonantes y Santificación. Los extras salen con Percepción: no hace falta farmearlos para subir.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Bestias de Azj-Kahet y eventos de abundancia empujan el tope. Si los cueros se ponen verdes, cambiate de zona. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los huargen tienen bonus de Desuello con {h:68978|Despellejador}. Los kul tiranos tienen +2 con {h:291442|Factótum}.",
    pairing: { slug: "leatherworking", name: "Peletería en The War Within" },
  },

  "cooking-tww": {
    slug: "cooking",
    nativeId: "cooking-tww",
    title: "Subida de nivel de Cocina en The War Within",
    intro: [
      "Esta guía te lleva Cocina de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Pesca es la pareja natural: el pescado de Khaz Algar entra en varias recetas del tramo alto.",
    ],
    trainerKey: "athodas",
    vendorKey: "kronzon",
    trainerNote:
      "Aprendé Cocina de Khaz Algar con Athodas en Dornogal. Especias y vegetales los vende Kronzon; la carne se farmea o se compra.",
    tomtom: "/way #2339 44.2 45.8 Athodas",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Athodas.",
    shoppingNote:
      "Lote estimado para 1-85. Del 85 al tope entra más proteína o pescado. La calidad no importa para subir.",
    shopping: [
      { materialKey: "essentiallySteak", quantity: 150 },
      { materialKey: "portionOfMeat", quantity: 500 },
      { materialKey: "corewayDust", quantity: 625 },
      { materialKey: "crispyPeppers", quantity: 115 },
      { materialKey: "granulatedSpices", quantity: 25, vendorKey: "kronzon" },
      { materialKey: "khazAlgarTomato", quantity: 40, vendorKey: "kronzon" },
      { materialKey: "twinedHerbs", quantity: 140 },
    ],
    ranges: [
      {
        from: 1,
        to: 35,
        intro: "Visitá a {n:athodas} y aprendé Cocina de Khaz Algar.",
        steps: [
          {
            title: "1-35",
            text: "Platos baratos con {i:portionOfMeat}, {i:corewayDust} y {i:twinedHerbs}. Especias y tomate los vende {n:kronzon}.",
          },
        ],
      },
      {
        from: 35,
        to: 85,
        steps: [
          {
            text: "Aprendé las recetas nuevas y hacé la primera elaboración de cada una. Después spameá el plato naranja más barato ({i:essentiallySteak} entra acá).",
          },
        ],
      },
      {
        from: 85,
        to: 100,
        steps: [
          {
            text: "Platos con {i:lazyLeuciscus} o más {i:essentiallySteak}. Si el pescado está caro, seguí con carne hasta que se ponga verde y recién ahí cambiá.",
          },
        ],
      },
    ],
    racials:
      "Los pandaren tienen bonus de Cocina con {h:107073|Gastronomía}. Los kul tiranos tienen +2 con {h:291442|Factótum}.",
    pairing: { slug: "fishing", name: "Pesca en The War Within" },
  },

  "jewelcrafting-tww": {
    slug: "jewelcrafting",
    nativeId: "jewelcrafting-tww",
    title: "Subida de nivel de Joyería en The War Within",
    intro: [
      "Esta guía te lleva Joyería de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Minería es la pareja natural: prospectá {i:bismuth} y machacá las gemas que no uses.",
    ],
    trainerKey: "makir",
    vendorKey: "kardu",
    extraNpcs: [{ key: "griftah", role: "Anillos y chucherías" }],
    trainerNote:
      "Horda y Alianza aprenden Joyería con Makir en Dornogal. Kardu vende suministros; Griftah está cerca si buscás anillos de paso.",
    tomtom: "/way #2339 49.5 70.9 Makir",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Makir.",
    shoppingNote:
      "Lote estimado para 1-55 (prospectar + machacar + primeras gemas). Del 55 al tope depende de tallas caras. La calidad no importa para subir.",
    shopping: [
      { materialKey: "bismuth", quantity: 270 },
      { materialKey: "glimmeringCrystal", quantity: 35 },
      { materialKey: "crushedGems", quantity: 108 },
      { materialKey: "ambivalentAmber", quantity: 17 },
      { materialKey: "radiantRuby", quantity: 2 },
      { materialKey: "ostentatiousSapphire", quantity: 1 },
      { materialKey: "decorativeLens", quantity: 17 },
    ],
    ranges: [
      {
        from: 1,
        to: 26,
        intro: "Visitá a {n:makir} y aprendé Joyería de Khaz Algar.",
        steps: [
          {
            title: "1-26",
            text: "Prospectá {i:bismuth} y machacá las gemas comunes para {i:crushedGems}. Fabricá las primeras tallas baratas y {i:decorativeLens}.",
          },
        ],
      },
      {
        from: 26,
        to: 55,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Tallá {i:ambivalentAmber}, {i:radiantRuby} y {i:glimmeringCrystal} mientras estén naranja.",
          },
        ],
      },
      {
        from: 55,
        to: 100,
        steps: [
          {
            text: "Gemas de mayor nivel y pedidos de fabricación. Si una talla se pone verde, cambiate a la que siga naranja o a monturas/juguetes que desbloquees.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "mining", name: "Minería en The War Within" },
  },

  "fishing-tww": {
    slug: "fishing",
    nativeId: "fishing-tww",
    title: "Subida de nivel de Pesca en The War Within",
    intro: [
      "Esta guía te lleva Pesca de Khaz Algar del 1 al 300. En The War Within Pesca no topea en 100: el tope de la expansión es 300.",
      "Cocina es la pareja natural: {i:lazyLeuciscus} y el resto del pescado se gastan en la Subida de Cocina.",
    ],
    trainerKey: "drokar",
    vendorKey: "hinodin",
    trainerNote:
      "Aprendé Pesca de Khaz Algar con Drokar en Dornogal, cerca del agua. Hinodin vende la caña si no tenés herramienta.",
    tomtom: "/way #2339 50.5 26.8 Drokar",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Drokar.",
    shoppingNote:
      "No hace falta lote. Una caña la vende {n:hinodin}. Un atajo de recolectar hace la subida más llevadera; no es obligatorio.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 75,
        intro: "Visitá a {n:drokar} y aprendé Pesca de Khaz Algar.",
        steps: [
          {
            text: "Pescá en las pozas y la costa de Isla de Dorn, cerca de Dornogal. El agua abierta al principio suelta más basura: las pozas dan habilidad y {i:lazyLeuciscus} de una.",
          },
        ],
      },
      {
        from: 75,
        to: 150,
        steps: [
          {
            text: "Seguí el circuito de pozas de Isla de Dorn. Si el diario de pesca te marca una zona en verde, cambiate de orilla.",
          },
        ],
      },
      {
        from: 150,
        to: 225,
        steps: [
          {
            text: "Bajá a Las Cavernas Resonantes y Santificación. Aguas más profundas y pozas de mayor nivel empujan este tramo.",
          },
        ],
      },
      {
        from: 225,
        to: 300,
        steps: [
          {
            text: "Azj-Kahet y la costa alta cierran el 300. El tramo final es tiempo, no oro. La ruta de farm de pescado caro va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. No hay una racial que dispare Pesca como las de crafting.",
    pairing: { slug: "cooking", name: "Cocina en The War Within" },
  },

  "inscription-tww": {
    slug: "inscription",
    nativeId: "inscription-tww",
    title: "Subida de nivel de Inscripción en The War Within",
    intro: [
      "Esta guía te lleva Inscripción de Khaz Algar del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Herboristería es la pareja natural: molés {i:mycobloom} y el pigmento te sale de arriba.",
    ],
    trainerKey: "brrigan",
    vendorKey: "grink",
    trainerNote:
      "Horda y Alianza aprenden Inscripción con Brrigan en Dornogal. Grink vende vitela y suministros al lado.",
    tomtom: "/way #2339 48.6 70.9 Brrigan",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Brrigan.",
    shoppingNote:
      "Lote de hierbas para moler más esporas y residuo para tratados. Del 51 al tope los tratados se descubren al fabricar: llevá holgura de hierbas. La calidad no importa para subir.",
    shopping: [
      { materialKey: "mycobloom", quantity: 450 },
      { materialKey: "luredrop", quantity: 250 },
      { materialKey: "arathorsSpear", quantity: 100 },
      { materialKey: "orbinid", quantity: 20 },
      { materialKey: "blessingBlossom", quantity: 20 },
      { materialKey: "verdantSpores", quantity: 22 },
      { materialKey: "leylineResidue", quantity: 12 },
    ],
    ranges: [
      {
        from: 1,
        to: 20,
        intro: "Visitá a {n:brrigan} y aprendé Inscripción de Khaz Algar.",
        steps: [
          {
            title: "1-20",
            text: "Molé el lote de {i:mycobloom} y {i:luredrop}. Guardá todos los pigmentos: las tintas los piden todos.",
          },
        ],
      },
      {
        from: 20,
        to: 51,
        steps: [
          {
            title: "20-51",
            text: "Fabricá tintas, misivas y las primeras herramientas. A 25 se te abre la primera especialización. El tratado de Inscripción se aprende por el árbol o al descubrirlo: fabricá la primera cuando la tengas. {i:verdantSpores} y {i:leylineResidue} entran en un par de recetas del medio.",
          },
        ],
      },
      {
        from: 51,
        to: 100,
        intro:
          "Los tratados (el de Inscripción y los que vas descubriendo de otras profesiones) dan habilidad hasta 100.",
        steps: [
          {
            text: "Spameá el tratado de Inscripción y cada tratado nuevo que descubras. Si se pone verde, priorizá el que todavía esté naranja o amarillo.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "herbalism", name: "Herboristería en The War Within" },
  },
};
