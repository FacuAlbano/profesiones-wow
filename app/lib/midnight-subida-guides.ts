import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { MidnightSubidaSpec } from "~/lib/midnight-subida-types";

export const MIDNIGHT_SUBIDA_GUIDES: Record<
  Exclude<NativeGuideId, "alchemy-tbc" | "alchemy-midnight" | "herbalism-tbc" | "tailoring-shadowlands">,
  MidnightSubidaSpec
> = {
  "blacksmithing-midnight": {
    slug: "blacksmithing",
    nativeId: "blacksmithing-midnight",
    title: "Subida de nivel de Herrería en Midnight",
    intro: [
      "Esta guía te lleva Herrería de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy. Las cantidades son aproximadas: varias recetas se ponen amarillas o verdes, así que llevá un poco de más.",
      "Herrería va de la mano con Minería: si fundís la mena vos, te ahorrás muchísimo en la casa de subastas. Si no tenés Minería, comprá el lote de la lista de compras de una.",
    ],
    trainerKey: "bemarrin",
    vendorKey: "eriden",
    trainerNote:
      "En Midnight Horda y Alianza aprenden Herrería en el mismo lugar: Ciudad de Lunargenta. El entrenador y el vendedor de suministros están juntos.",
    tomtom: "/way #2393 43.7 51.9 Bemarrin",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Bemarrin.",
    shoppingNote:
      "Lote estimado para 1-70 (fundición + primeras elaboraciones + Aleación plateada). Del 70 al tope depende de pedidos de fabricación y equipo de profesión. La calidad no importa para subir: comprá lo más barato.",
    shopping: [
      { materialKey: "refulgentCopperOre", quantity: 125 },
      { materialKey: "refulgentCopperIngot", quantity: 250 },
      { materialKey: "brilliantSilverOre", quantity: 306 },
      { materialKey: "umbralTinOre", quantity: 6 },
      { materialKey: "duskshroudedStone", quantity: 1 },
      { materialKey: "luminantFlux", quantity: 200, vendorKey: "eriden" },
    ],
    ranges: [
      {
        from: 1,
        to: 15,
        intro: "Visitá a {n:bemarrin} y aprendé Herrería de Midnight antes de elaborar.",
        steps: [
          {
            title: "1-15",
            text: "25x {r:1230761|Lingote de cobre refulgente} — 125 {i:refulgentCopperOre}. Si compraste mena extra en vez de lingotes, fundila ahora. {i:luminantFlux} y {i:blacksmithHammer} los vende {n:eriden}.",
          },
        ],
      },
      {
        from: 15,
        to: 50,
        intro:
          "Activá el filtro de bonus de primera elaboración y fabricá cada receta nueva una vez. Aprendé lo que te desbloquee {n:bemarrin} y repetí. Terminás entre 47 y 50.",
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Para llegar al tope no hace falta un árbol concreto; andá a Especializaciones si querés gastar puntos ya.",
          },
        ],
      },
      {
        from: 50,
        to: 70,
        steps: [
          {
            title: "50-70",
            text: "50x {r:1230763|Aleación plateada} — 200 {i:luminantFlux}, 300 {i:brilliantSilverOre}, 150 {i:refulgentCopperIngot}. Los últimos puntos se ponen verdes: llevá un par de elaboraciones de más. La aleación se usa en un montón de recetas, así que no se tira.",
          },
        ],
      },
      {
        from: 70,
        to: 100,
        intro:
          "Del 70 al tope la ruta barata todavía se mueve con el parche: equipo de profesión, pedidos de fabricación o recetas épicas del vendedor. Elegí según lo que tengas desbloqueado.",
        steps: [
          {
            text: "Si el equipo de profesión no pide moneda ligada, comprá una receta épica cerca de {n:eriden} y elaborala hasta el tope. Si pide moneda, subí con pedidos de armas y armaduras épicas (naranja hasta 100).",
          },
          {
            text: "Los pedidos de patrón (NPC) son tuyos: nadie te los saca. En pedidos públicos tocá Buscar: no cargan solos y no son entre reinos.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo y te puede ahorrar elaboraciones.",
    pairing: { slug: "mining", name: "Minería en Midnight" },
  },

  "enchanting-midnight": {
    slug: "enchanting",
    nativeId: "enchanting-midnight",
    title: "Subida de nivel de Encantamiento en Midnight",
    intro: [
      "Esta guía te lleva Encantamiento de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy. Varias recetas se ponen amarillas, así que llevá un poco de más de {i:eversingingDust}.",
      "Si venís de Sastrería o Herrería, desencantar el equipo de quest y mazmorras te da puntos hasta 25 y te devuelve polvo.",
    ],
    trainerKey: "dolothos",
    vendorKey: "lyna",
    extraNpcs: [{ key: "jennara", role: "Glamours alegres" }],
    trainerNote:
      "Horda y Alianza aprenden Encantamiento con Dolothos en Ciudad de Lunargenta. Lyna vende varas y vitelas al lado. Jennara Brillosol, en la torre de atrás, enseña los Glamours alegres.",
    tomtom: "/way #2393 48 53.9 Dolothos\n/way #2393 39.4 51 Jennara Brillosol",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Dolothos y a Jennara.",
    shoppingNote:
      "Lote estimado para 1-62. Del 62 al tope depende de qué encantamientos caros desbloquees. Poné los encantamientos en vitela y vendelos. La calidad no importa para subir.",
    shopping: [
      { materialKey: "eversingingDust", quantity: 412 },
      { materialKey: "radiantShard", quantity: 27 },
      { materialKey: "moteOfLight", quantity: 6 },
      { materialKey: "refulgentCopperRod", quantity: 30, vendorKey: "lyna" },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:dolothos} y aprendé Encantamiento de Midnight.",
        steps: [
          {
            title: "1-25",
            text: "30x {r:1236486|Vara de cobre refulgente con runas} — 30 {i:refulgentCopperRod} (las vende {n:lyna}), 150 {i:eversingingDust}. Desencantá las 30 varas: recuperás alrededor de la mitad del polvo y llegás a 25.",
          },
        ],
      },
      {
        from: 25,
        to: 40,
        steps: [
          {
            title: "25-27",
            text: "1x {r:1236083|Encantar yelmo: Runa de evasión} y 1x {r:1236491|Aceite de fénix thalassiano} para el bonus de primera elaboración.",
          },
          {
            title: "27-38",
            text: "Una de {r:1236073|Encantar anillo: Cólera de la Naturaleza} y una de {r:1236098|Adorno ilusorio: Luz floreciente}. Después ~13 más de la más barata.",
          },
          {
            title: "38-40",
            text: "1x {r:1236061|Encantar hombros: Vuelo del águila} y el otro encantamiento de hombros/yelmo que te falte del entrenador.",
          },
        ],
      },
      {
        from: 40,
        to: 62,
        steps: [
          {
            title: "40-52",
            text: "4x {r:1236489|Varita de tejehechizos thalassiano} — dan 3 de habilidad cada una.",
          },
          {
            title: "52-55",
            text: "Primera elaboración de {r:1236058|Encantar anillo: Maestría Amani} y los encantamientos de yelmo/hombros que te queden naranja.",
          },
          {
            title: "55-62",
            text: "Volá a {n:jennara} y fabricá los 24 Glamours alegres (bonus de primera elaboración + conocimiento). Después seguí con encantamientos baratos de anillo hasta ~62.",
          },
        ],
      },
      {
        from: 62,
        to: 100,
        intro:
          "Del 62 al tope no hay una sola receta ganadora: depende de precios y de qué árbol abras. Priorizá encantamientos que sigan naranja y pedidos de fabricación.",
        steps: [
          {
            text: "Spameá el encantamiento de anillo o hombros más barato que todavía dé habilidad. Si se pone verde, cambiá a uno más alto o tomá pedidos.",
          },
        ],
      },
    ],
    racials:
      "Los elfos de sangre tienen bonus de Encantamiento con {h:28877|Afinidad Arcana}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "tailoring", name: "Sastrería en Midnight" },
  },

  "engineering-midnight": {
    slug: "engineering",
    nativeId: "engineering-midnight",
    title: "Subida de nivel de Ingeniería en Midnight",
    intro: [
      "Esta guía te lleva Ingeniería de Midnight del 1 al 100. Acá la ruta barata no sale toda del entrenador: reciclar desbloquea las recetas Quel'dorei y la decoración de vivienda.",
      "Ingeniería va de la mano con Minería. Para reciclar también sirve un lote barato de {i:refulgentCopperIngot} o {i:brightLinenBolt}.",
    ],
    trainerKey: "danwe",
    vendorKey: "yatheon",
    extraNpcs: [{ key: "lyrendal", role: "Recetas épicas (Arrojo)" }],
    trainerNote:
      "Aprendé Ingeniería de Midnight con Danwe en Ciudad de Lunargenta. Yatheon vende el armazón y la chatarra. Lyrendal vende recetas épicas a cambio de Arrojo de ingeniero artesano.",
    tomtom: "/way #2393 43.6 54.1 Danwe",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Danwe.",
    shoppingNote:
      "Lote para las recetas del entrenador y el arranque de Reciclaje. Del 45 al tope vas a necesitar más Núcleo eterno, chatarra y madera thalassiana según lo que descubras. La calidad no importa para subir.",
    shopping: [
      { materialKey: "refulgentCopperOre", quantity: 145 },
      { materialKey: "umbralTinOre", quantity: 155 },
      { materialKey: "refulgentCopperIngot", quantity: 135 },
      { materialKey: "moteOfLight", quantity: 1 },
      { materialKey: "moteOfPrimalEnergy", quantity: 1 },
      { materialKey: "moteOfWildMagic", quantity: 1 },
      { materialKey: "moteOfPureVoid", quantity: 1 },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:danwe} y aprendé Ingeniería de Midnight.",
        steps: [
          {
            title: "1-16",
            text: "8x {r:1229755|Equipo de canto} con mena y el armazón que vende {n:yatheon}. Después 7 reciclajes sobre {i:refulgentCopperIngot} o {i:brightLinenBolt}.",
          },
          {
            title: "16-25",
            text: "Aprendé las recetas nuevas y hacé la primera elaboración de cada pieza de Núcleo eterno (incluido el que pide chatarra del vendedor).",
          },
        ],
      },
      {
        from: 25,
        to: 45,
        steps: [
          {
            title: "25-39",
            text: "Meté los primeros 10 puntos en Reciclaje: sin eso no descubís recetas. Aprendé todo de {n:danwe}. 10x {r:1229853|Piñón de almas} y las cuatro recetas de engranaje para el bonus de primera elaboración.",
          },
          {
            title: "39-45",
            text: "20 reciclajes más sobre el lote barato. Activá el filtro de primera elaboración y fabricá todo lo que te quede naranja en el libro.",
          },
        ],
      },
      {
        from: 45,
        to: 80,
        intro:
          "Seguí reciclando hasta descubrir una receta Quel'dorei. Todas salen más o menos lo mismo y te llevan a 80.",
        steps: [
          {
            text: "Un ejemplo: ~60 piezas Quel'dorei con chatarra, armazón y {i:evercore}. Dejan de dar habilidad a 80.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            title: "Decoración de vivienda",
            text: "Las 7 recetas de decoración que salen de Reciclaje quedan amarillas hasta ~92 y grises a 100. Usan {i:aetherlume}, {i:evercore}, {r:1229755|Equipo de canto} y {r:1229853|Piñón de almas}.",
          },
          {
            text: "Si fuiste a Movilidad de mercado, el equipo de profesión poco común llega a 100. Los pedidos épicos (recetas de {n:lyrendal}) dan punto garantizado hasta el tope.",
          },
        ],
      },
    ],
    racials:
      "Los gnomos tienen bonus de Ingeniería con {h:20593|Especialización de ingeniería}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "mining", name: "Minería en Midnight" },
  },

  "leatherworking-midnight": {
    slug: "leatherworking",
    nativeId: "leatherworking-midnight",
    title: "Subida de nivel de Peletería en Midnight",
    intro: [
      "Esta guía te lleva Peletería de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy. Las cantidades son aproximadas.",
      "Peletería va de la mano con Desuello: si farmeás el cuero vos, el lote de abajo se achica un montón.",
    ],
    trainerKey: "talmar",
    vendorKey: "zaralda",
    trainerNote:
      "Horda y Alianza aprenden Peletería con Talmar en Ciudad de Lunargenta. Zaralda vende hilo y suministros al lado.",
    tomtom: "/way #2393 43.2 55.9 Talmar",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Talmar.",
    shoppingNote:
      "Lote estimado para primeras elaboraciones y el tramo medio. Del 60 al tope hay varias rutas de kits y encuadernados: comprá según lo que te salga más barato. La calidad no importa para subir.",
    shopping: [
      { materialKey: "voidTemperedLeather", quantity: 690 },
      { materialKey: "voidTemperedScales", quantity: 610 },
      { materialKey: "voidTemperedHide", quantity: 3 },
      { materialKey: "voidTemperedPlating", quantity: 2 },
      { materialKey: "peerlessPlumage", quantity: 4 },
      { materialKey: "carvingCanine", quantity: 3 },
      { materialKey: "fantasticFur", quantity: 4 },
      { materialKey: "tranquilityBloom", quantity: 10 },
      { materialKey: "silverleafThread", quantity: 75, vendorKey: "zaralda" },
    ],
    ranges: [
      {
        from: 1,
        to: 7,
        intro: "Visitá a {n:talmar} y aprendé Peletería de Midnight.",
        steps: [
          {
            title: "1-7",
            text: "Una de {r:1237506|Braciles de cuero de contrabandista} y una de {r:1237535|Brazales escamados de explorador} para el bonus de primera elaboración. Después volvé al entrenador.",
          },
        ],
      },
      {
        from: 7,
        to: 60,
        intro:
          "Filtro de primera elaboración: fabricá cada receta nueva una vez, aprendé lo de {n:talmar} y repetí hasta ~60. Equipá {r:1237563|Protector de pellejero} cuando lo hagas.",
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Para el tope no hace falta un árbol concreto.",
          },
        ],
      },
      {
        from: 60,
        to: 91,
        intro: "Acá subís con kits y encuadernados. Elegí el más barato de la casa de subastas.",
        steps: [
          {
            text: "Rutas típicas: {r:1237577|Talismán de pangolín bendito}, {r:1237578|Atadura de esporas primigenia}, {r:1237545|Refuerzo para armadura de Caballero de sangre} o {r:1237544|Refuerzo para armadura de cazador del bosque}.",
          },
        ],
      },
      {
        from: 91,
        to: 100,
        steps: [
          {
            text: "Seguí con el kit que todavía dé habilidad o tomá pedidos de piezas épicas. Si se pone verde, cambiá de receta.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "skinning", name: "Desuello en Midnight" },
  },

  "tailoring-midnight": {
    slug: "tailoring",
    nativeId: "tailoring-midnight",
    title: "Subida de nivel de Sastrería en Midnight",
    intro: [
      "Esta guía te lleva Sastrería de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Si farmeás tela de humanoides de Quel'Thalas, el lote de {i:brightLinen} se paga solo. Encantamiento combina bien para desencantar lo que no uses.",
    ],
    trainerKey: "galana",
    trainerNote:
      "Horda y Alianza aprenden Sastrería con Galana en Ciudad de Lunargenta. El vendedor de suministros al lado vende {i:silverleafThread} y {i:embroideryFloss}.",
    tomtom: "/way #2393 48.1 54.1 Galana",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Galana.",
    shoppingNote:
      "Lote estimado para 1-50 (rollos y primeras piezas). Del 50 al tope entra seda rara y polvo: comprá cuando veas el precio. La calidad no importa para subir.",
    shopping: [
      { materialKey: "brightLinen", quantity: 66 },
      { materialKey: "eversingingDust", quantity: 14 },
      { materialKey: "silverleafThread", quantity: 20 },
    ],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:galana} y aprendé Sastrería de Midnight.",
        steps: [
          {
            title: "1-25",
            text: "66x {r:1228939|Rollo de lino brillante} — 66 {i:brightLinen}.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            title: "25-40",
            text: "14x {r:1228940|Rollo de lino brillante imbuido} — 28 {i:brightLinenBolt}.",
          },
          {
            title: "40-45",
            text: "Primera elaboración de {r:1228973|Toga de sastrería de lino brillante} y el resto de recetas nuevas del entrenador. Equipá la toga.",
          },
          {
            title: "44-50",
            text: "6x {r:1228959|Sobrehombros refinados} — 12 {i:brightLinenBolt}.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Hilos de hechizo: ~30x {r:1228976|Hilo de hechizo de lino brillante} con rollos imbuidos y {i:eversingingDust}. Si {i:sunfireSilk} o {i:arcanoweave} están baratos, pasá a forros.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Forros de seda rara, sombreros de artesano o pedidos de piezas épicas. Las recetas caras se mantienen naranja más tiempo; no hay una ganadora fija todavía.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "enchanting", name: "Encantamiento en Midnight" },
  },

  "herbalism-midnight": {
    slug: "herbalism",
    nativeId: "herbalism-midnight",
    title: "Subida de nivel de Herboristería en Midnight",
    intro: [
      "Esta guía te lleva Herboristería de Midnight del 1 al 100 recolectando en Quel'Thalas. No hay lista de compras de oro: la habilidad sale de los nodos.",
      "Alquimia es la pareja natural: lo que farmeás acá lo gastás en pociones y frascos.",
    ],
    trainerKey: "nathera",
    trainerNote:
      "Aprendé Herboristería de Midnight con la Botánica Nathera en Ciudad de Lunargenta. Las hierbas de Midnight aparecen en Quel'Thalas y zonas vecinas.",
    tomtom: "/way #2393 48.2 51.5 Botánica Nathera",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Nathera.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Llevá té de recolección o Aguafuego de la Luna Negra si querés más Destreza. El equipo de profesión ayuda, no es obligatorio para el tope.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:nathera} y aprendé Herboristería de Midnight.",
        steps: [
          {
            text: "Recolectá {i:tranquilityBloom} y {i:argentleaf} en los alrededores de Lunargenta y el Bosque Canción Eterna. Cualquier nodo de Midnight da habilidad al principio.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Para subir no hace falta un árbol concreto: priorizá Destreza si querés ir más rápido. Seguí el circuito de hierbas comunes.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Sumá {i:manaLily}, {i:sanguithorn} y {i:azeroot} cuando empiecen a aparecer. Los nodos cargados (Luz, magia salvaje, Vacío) dan motas extra: no los saltees.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "El {i:nocturnalLotus} y los nodos raros empujan el tramo final. Si un nodo se pone verde, cambiate de zona o buscá la hierba de mayor nivel. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los tauren tienen bonus de Herboristería con {h:20552|Cultivo}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "alchemy", name: "Alquimia en Midnight" },
  },

  "mining-midnight": {
    slug: "mining",
    nativeId: "mining-midnight",
    title: "Subida de nivel de Minería en Midnight",
    intro: [
      "Esta guía te lleva Minería de Midnight del 1 al 100 picando en Quel'Thalas. No hay lista de compras de oro: la habilidad sale de los filones.",
      "Herrería, Ingeniería y Joyería son las parejas naturales: fundís o prospectás lo que sacás.",
    ],
    trainerKey: "belil",
    trainerNote:
      "Aprendé Minería de Midnight con Belil en Ciudad de Lunargenta. Los filones de Midnight están en Quel'Thalas y zonas vecinas.",
    tomtom: "/way #2393 42.6 52.8 Belil",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Belil.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Un pico lo vende el vendedor de minería al lado del entrenador si no tenés herramienta de profesión.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:belil} y aprendé Minería de Midnight.",
        steps: [
          {
            text: "Picá {i:refulgentCopperOre} alrededor de Lunargenta y el Bosque Canción Eterna. Fundir no es obligatorio para subir, pero te deja {i:refulgentCopperIngot} para Herrería o Ingeniería.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí el circuito de cobre refulgente; cuando veas {i:umbralTinOre}, picalo también.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Priorizá {i:brilliantSilverOre} y filones enriquecidos. Las motas y la piedra rara ({i:duskshroudedStone}) salen de nodos cargados: no los ignores.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Los filones de mayor nivel y los nodos de torio deslumbrante empujan el tope. Si un filón se pone verde, cambiate de zona. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja los filones naranjas más tiempo.",
    pairing: { slug: "blacksmithing", name: "Herrería en Midnight" },
  },

  "skinning-midnight": {
    slug: "skinning",
    nativeId: "skinning-midnight",
    title: "Subida de nivel de Desuello en Midnight",
    intro: [
      "Esta guía te lleva Desuello de Midnight del 1 al 100 desollando bestias de Quel'Thalas. No hay lista de compras de oro: la habilidad sale de los cueros.",
      "Peletería es la pareja natural. Un cebo de pesca ayuda si vas a farmear señuelos, pero no hace falta para el tope.",
    ],
    trainerKey: "tyn",
    trainerNote:
      "Aprendé Desuello de Midnight con Tyn en Ciudad de Lunargenta, al lado de Peletería. Las bestias de Quel'Thalas sueltan cuero y escamas templados por el Vacío.",
    tomtom: "/way #2393 43.3 55.6 Tyn",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Tyn.",
    shoppingNote:
      "No hace falta lote de casa de subastas. Un cuchillo de desuello lo vende el vendedor al lado del entrenador si no tenés herramienta.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:tyn} y aprendé Desuello de Midnight.",
        steps: [
          {
            text: "Desollá bestias cerca de Lunargenta. Al principio cualquier cadáver de Midnight da habilidad y {i:voidTemperedLeather} o {i:voidTemperedScales}.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Seguí un circuito de bestias densas en Canción Eterna / Quel'Thalas. No tires {i:voidTemperedHide} ni {i:fantasticFur}: Peletería los pide.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Buscá packs más altos (escamados y raros). Los extras ({i:peerlessPlumage}, {i:carvingCanine}, {i:voidTemperedPlating}) salen con Percepción: no hace falta farmearlos para subir.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Bestias de mayor nivel y eventos de abundancia semanales empujan el tope. Si los cueros se ponen verdes, cambiate de zona. La ruta de farm detallada va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los huargen tienen bonus de Desuello con {h:68978|Despellejador}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "leatherworking", name: "Peletería en Midnight" },
  },

  "cooking-midnight": {
    slug: "cooking",
    nativeId: "cooking-midnight",
    title: "Subida de nivel de Cocina en Midnight",
    intro: [
      "Esta guía te lleva Cocina de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Pesca es la pareja natural: el pescado de Quel'Thalas entra en varias recetas del tramo alto.",
    ],
    trainerKey: "sylann",
    trainerNote:
      "Aprendé Cocina de Midnight con Sylann en Ciudad de Lunargenta. Mantequilla y especias se compran al vendedor de cocina; el resto se pesca o se farmea.",
    tomtom: "/way #2393 56.3 69.9 Sylann",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Sylann.",
    shoppingNote:
      "Lote estimado para 1-35 con Galletas especiadas (ruta más predecible). Del 35 al tope entra pescado y proteína. La calidad no importa para subir.",
    shopping: [
      { materialKey: "butterStick", quantity: 800 },
      { materialKey: "pouchOfSpices", quantity: 2400 },
      { materialKey: "plantProtein", quantity: 40 },
      { materialKey: "eversongTrout", quantity: 24 },
    ],
    ranges: [
      {
        from: 1,
        to: 35,
        intro: "Visitá a {n:sylann} y aprendé Cocina de Midnight.",
        steps: [
          {
            title: "1-35",
            text: "~200x {r:1226200|Galletas especiadas} — 800 {i:butterStick}, 2400 {i:pouchOfSpices}. Es la receta más predecible del tramo bajo.",
          },
        ],
      },
      {
        from: 35,
        to: 70,
        steps: [
          {
            text: "Aprendé las recetas nuevas y hacé la primera elaboración de cada una (tes e infusiones con {i:manaLily}, {i:azeroot} y {i:argentleaf}). Después spameá {r:1226167|Comida suculenta} o el plato naranja más barato.",
          },
        ],
      },
      {
        from: 70,
        to: 100,
        steps: [
          {
            text: "Platos con {i:eversongTrout}, {i:restoredSongfish}, {i:lynxfish} y {i:thalassianFilet}. Si el pescado está caro, seguí con {r:1226167|Comida suculenta} hasta que se ponga verde y recién ahí cambiá.",
          },
        ],
      },
    ],
    racials:
      "Los pandaren tienen bonus de Cocina con {h:107073|Gastronomía}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "fishing", name: "Pesca en Midnight" },
  },

  "jewelcrafting-midnight": {
    slug: "jewelcrafting",
    nativeId: "jewelcrafting-midnight",
    title: "Subida de nivel de Joyería en Midnight",
    intro: [
      "Esta guía te lleva Joyería de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Minería es la pareja natural: prospectás la mena barata y te ahorrás el polvo y las gemas del lote.",
    ],
    trainerKey: "amin",
    vendorKey: "gelanthis",
    trainerNote:
      "Horda y Alianza aprenden Joyería con Amin en Ciudad de Lunargenta. Gelanthis vende el set de joyero y el vidrio al lado.",
    tomtom: "/way #2393 48 54.9 Amin",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Amin.",
    shoppingNote:
      "Lote estimado para prospección, lentes y primeras elaboraciones hasta ~65. Del 65 al tope entran diamantes y anillos épicos: comprá según precios. La calidad no importa para subir.",
    shopping: [
      { materialKey: "refulgentCopperOre", quantity: 5 },
      { materialKey: "umbralTinOre", quantity: 5 },
      { materialKey: "glimmeringGemdust", quantity: 51 },
      { materialKey: "crystallineGlass", quantity: 80 },
      { materialKey: "duskshroudedStone", quantity: 7 },
      { materialKey: "sanguineGarnet", quantity: 5 },
      { materialKey: "tenebrousAmethyst", quantity: 4 },
      { materialKey: "harandarPeridot", quantity: 4 },
      { materialKey: "amaniLapis", quantity: 4 },
      { materialKey: "petrifiedRoot", quantity: 4 },
    ],
    ranges: [
      {
        from: 1,
        to: 14,
        intro: "Visitá a {n:amin} y aprendé Joyería de Midnight. {i:jewelerToolset} lo vende {n:gelanthis}.",
        steps: [
          {
            title: "1-14",
            text: "12x {r:1231127|Prospección de Midnight} sobre mena barata. Después 4x {r:1230475|Lente sin'dorei} con {i:glimmeringGemdust} y {i:crystallineGlass}.",
          },
        ],
      },
      {
        from: 14,
        to: 57,
        intro:
          "Filtro de primera elaboración: fabricá cada receta nueva una vez, aprendé lo de {n:amin} y repetí. Si te quedás corto de 50, hacé unos {r:1230499|Cáliz de monologuista}.",
        steps: [
          {
            text: "A 25 se te abre la primera especialización. Para el tope no hace falta un árbol concreto.",
          },
        ],
      },
      {
        from: 57,
        to: 65,
        steps: [
          {
            title: "57-65",
            text: "30x {r:1230499|Cáliz de monologuista} — 60 {i:crystallineGlass}.",
          },
        ],
      },
      {
        from: 65,
        to: 100,
        steps: [
          {
            text: "Primera elaboración de lentes, diamantes de Canción Eterna y anillos/collares altos. Después spameá el cáliz o el corte que siga naranja, o tomá pedidos épicos.",
          },
        ],
      },
    ],
    racials:
      "Los draenei tienen bonus de Joyería con {h:28875|Tallar gemas}. Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}.",
    pairing: { slug: "mining", name: "Minería en Midnight" },
  },

  "fishing-midnight": {
    slug: "fishing",
    nativeId: "fishing-midnight",
    title: "Subida de nivel de Pesca en Midnight",
    intro: [
      "Esta guía te lleva Pesca de Midnight del 1 al 100 en las aguas de Quel'Thalas. No hay lista de compras de oro: la habilidad sale de cada lance.",
      "Cocina es la pareja natural: {i:eversongTrout}, {i:lynxfish} y el resto del pescado se gastan en la Subida de Cocina.",
    ],
    trainerKey: "drathen",
    trainerNote:
      "Aprendé Pesca de Midnight con Drathen en Ciudad de Lunargenta. Las pozas y la costa de Quel'Thalas son el circuito principal.",
    tomtom: "",
    tomtomNote:
      "Todavía no hay coords públicas estables del puesto de Drathen en el mapa #2393. Buscalo en Ciudad de Lunargenta, cerca del agua; el pin del mapa queda para después.",
    shoppingNote:
      "No hace falta lote. Una caña la vende el vendedor de pesca si no tenés herramienta. Un atajo de recolectar hace la subida más llevadera; no es obligatorio.",
    shopping: [],
    ranges: [
      {
        from: 1,
        to: 25,
        intro: "Visitá a {n:drathen} y aprendé Pesca de Midnight.",
        steps: [
          {
            text: "Pescá en pozas cerca de Lunargenta. El agua abierta al principio suelta más basura que pescado: las pozas dan habilidad y {i:eversongTrout} de una.",
          },
        ],
      },
      {
        from: 25,
        to: 50,
        steps: [
          {
            text: "Seguí el circuito de pozas de Canción Eterna. {i:lynxfish} y {i:restoredSongfish} empiezan a aparecer: guardalos para Cocina.",
          },
        ],
      },
      {
        from: 50,
        to: 80,
        steps: [
          {
            text: "Aguas más profundas y pozas de mayor nivel. Si el diario de pesca te marca una zona en verde, cambiate: el tope pide pozas que sigan naranja.",
          },
        ],
      },
      {
        from: 80,
        to: 100,
        steps: [
          {
            text: "Pozas raras y costa de Quel'Thalas alta. El tramo final es tiempo, no oro. La ruta de farm de pescado caro va en Farming cuando esté lista.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. No hay una racial que dispare Pesca como las de crafting.",
    pairing: { slug: "cooking", name: "Cocina en Midnight" },
  },

  "inscription-midnight": {
    slug: "inscription",
    nativeId: "inscription-midnight",
    title: "Subida de nivel de Inscripción en Midnight",
    intro: [
      "Esta guía te lleva Inscripción de Midnight del 1 al 100 por la ruta más barata que podemos estimar hoy.",
      "Herboristería es la pareja natural: molés las hierbas y el pigmento te sale de arriba.",
    ],
    trainerKey: "zantasia",
    trainerNote:
      "Horda y Alianza aprenden Inscripción con Zantasia en Ciudad de Lunargenta. El vendedor de suministros al lado vende vitela y agua de canción.",
    tomtom: "/way #2393 46.9 51.7 Zantasia",
    tomtomNote: "Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Zantasia.",
    shoppingNote:
      "Lote de hierbas para moler (1-20) más motas y piedra para tintas y tratados. Del 51 al tope los tratados se descubren al fabricar: llevá holgura de hierbas. La calidad no importa para subir.",
    shopping: [
      { materialKey: "tranquilityBloom", quantity: 360 },
      { materialKey: "argentleaf", quantity: 100 },
      { materialKey: "manaLily", quantity: 90 },
      { materialKey: "sanguithorn", quantity: 90 },
      { materialKey: "azeroot", quantity: 65 },
      { materialKey: "duskshroudedStone", quantity: 2 },
      { materialKey: "petrifiedRoot", quantity: 2 },
      { materialKey: "moteOfPrimalEnergy", quantity: 4 },
      { materialKey: "moteOfPureVoid", quantity: 5 },
      { materialKey: "moteOfLight", quantity: 2 },
      { materialKey: "moteOfWildMagic", quantity: 7 },
    ],
    ranges: [
      {
        from: 1,
        to: 20,
        intro: "Visitá a {n:zantasia} y aprendé Inscripción de Midnight.",
        steps: [
          {
            title: "1-20",
            text: "Usá {r:1269575|Molienda de Midnight} sobre el lote de hierbas. Guardá todos los pigmentos: las tintas los piden todos.",
          },
        ],
      },
      {
        from: 20,
        to: 35,
        steps: [
          {
            title: "20-30",
            text: "11x {r:1230017|Tinta Munsell} y 12x {r:1230016|Tinta Sienna}. A 25 aprendé Manos firmes primero: te enseña {r:1230032|Tratado thalassiano de inscripción}.",
          },
          {
            title: "30-35",
            text: "Primera elaboración de los bastones/lámparas de azcorraíz y 2x Cifra de alma (motas + {i:duskshroudedStone} + las dos tintas).",
          },
        ],
      },
      {
        from: 35,
        to: 51,
        steps: [
          {
            title: "35-45",
            text: "Primera elaboración de misivas y herramientas de hobbyista. Dejá el tratado de Inscripción para el final del tramo: 3x {r:1230032|Tratado thalassiano de inscripción} te empuja a 45.",
          },
          {
            title: "45-51",
            text: "El resto de misivas y unos tratados más. Si te falta un punto, una Runa vantus cubre.",
          },
        ],
      },
      {
        from: 51,
        to: 100,
        intro:
          "Los tratados (el de Inscripción y los que vas descubriendo de otras profesiones) dan habilidad hasta 100. Fabricá la primera de cada uno por el bonus.",
        steps: [
          {
            text: "Spameá {r:1230032|Tratado thalassiano de inscripción} y cada tratado nuevo que descubras. Si se pone verde, priorizá el tratado que todavía esté naranja o amarillo.",
          },
        ],
      },
    ],
    racials:
      "Los kul tiranos tienen +2 en todas las profesiones con {h:291442|Factótum}. Esa habilidad extra deja las recetas naranjas más tiempo.",
    pairing: { slug: "herbalism", name: "Herboristería en Midnight" },
  },
};
