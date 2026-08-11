import type { MaterialEntry, NpcEntry } from "~/lib/guide-types";
import type { ProfessionSlug } from "~/lib/constants";
import { TBC_SUBIDA_MATERIALS } from "~/lib/tbc-subida-materials";

export const FULL_PROFS = [
  "alchemy",
  "blacksmithing",
  "enchanting",
  "engineering",
  "leatherworking",
  "tailoring",
  "herbalism",
  "mining",
  "skinning",
  "cooking",
  "fishing",
  "jewelcrafting",
  "inscription",
] as const satisfies readonly ProfessionSlug[];

export const CLASSIC_PROFS = [
  "alchemy",
  "blacksmithing",
  "enchanting",
  "engineering",
  "leatherworking",
  "tailoring",
  "herbalism",
  "mining",
  "skinning",
  "cooking",
  "fishing",
] as const satisfies readonly ProfessionSlug[];

export type FullProf = (typeof FULL_PROFS)[number];
export type ClassicProf = (typeof CLASSIC_PROFS)[number];

export const PROF_NAME: Record<FullProf, string> = {
  alchemy: "Alquimia",
  blacksmithing: "Herrería",
  enchanting: "Encantamiento",
  engineering: "Ingeniería",
  leatherworking: "Peletería",
  tailoring: "Sastrería",
  herbalism: "Herboristería",
  mining: "Minería",
  skinning: "Desuello",
  cooking: "Cocina",
  fishing: "Pesca",
  jewelcrafting: "Joyería",
  inscription: "Inscripción",
};

export const PROF_PAIR: Record<FullProf, FullProf> = {
  alchemy: "herbalism",
  blacksmithing: "mining",
  enchanting: "tailoring",
  engineering: "mining",
  leatherworking: "skinning",
  tailoring: "enchanting",
  herbalism: "alchemy",
  mining: "blacksmithing",
  skinning: "leatherworking",
  cooking: "fishing",
  fishing: "cooking",
  jewelcrafting: "mining",
  inscription: "herbalism",
};

const GATHERING = new Set<FullProf>(["herbalism", "mining", "skinning", "fishing"]);

export function isGathering(slug: FullProf): boolean {
  return GATHERING.has(slug);
}

export const RACIALS: Record<FullProf, string> = {
  alchemy: "Los trols tienen +15 de Alquimia. Esa habilidad extra deja las recetas naranjas más tiempo.",
  blacksmithing: "En esta expansión no hay una racial que dispare Herrería.",
  enchanting: "En esta expansión no hay una racial que dispare Encantamiento.",
  engineering: "Los gnomos tienen +15 de Ingeniería con {h:20593|Especialización en ingeniería}.",
  leatherworking: "En esta expansión no hay una racial que dispare Peletería.",
  tailoring: "En esta expansión no hay una racial que dispare Sastrería.",
  herbalism: "Los tauren tienen bonus de Herboristería con {h:20552|Cultivo}.",
  mining: "En esta expansión no hay una racial que dispare Minería.",
  skinning: "En esta expansión no hay una racial que dispare Desuello.",
  cooking: "En esta expansión no hay una racial que dispare Cocina.",
  fishing: "En esta expansión no hay una racial que dispare Pesca.",
  jewelcrafting: "Los draenei tienen bonus de Joyería con {h:28875|Talla de gemas}.",
  inscription: "En esta expansión no hay una racial que dispare Inscripción.",
};

type Pair = { horde: string; alliance: string };

export const CLASSIC_TRAINERS: Record<ClassicProf, Pair> = {
  alchemy: { horde: "yelmak", alliance: "lilyssia" },
  blacksmithing: { horde: "saru", alliance: "bengus" },
  enchanting: { horde: "godan", alliance: "lucan" },
  engineering: { horde: "roxxik", alliance: "springspindle" },
  leatherworking: { horde: "karolek", alliance: "simon" },
  tailoring: { horde: "magar", alliance: "georgio" },
  herbalism: { horde: "jandi", alliance: "tannysa" },
  mining: { horde: "makaru", alliance: "geofram" },
  skinning: { horde: "thuwd", alliance: "balthus" },
  cooking: { horde: "zamja", alliance: "daryl" },
  fishing: { horde: "lumak", alliance: "arnold" },
};

export const CATA_TRAINERS: Record<FullProf, Pair> = {
  ...CLASSIC_TRAINERS,
  jewelcrafting: { horde: "lugrah", alliance: "theresa" },
  inscription: { horde: "jomah", alliance: "catarina" },
};

export const MOP_TRAINERS: Record<FullProf, Pair> = {
  alchemy: { horde: "tsing", alliance: "yuan" },
  blacksmithing: { horde: "jorunga", alliance: "cullen" },
  enchanting: { horde: "lai", alliance: "lao" },
  engineering: { horde: "engineerH", alliance: "engineerA" },
  leatherworking: { horde: "lwH", alliance: "lwA" },
  tailoring: { horde: "shisai", alliance: "silkmaster" },
  herbalism: { horde: "growerH", alliance: "growerA" },
  mining: { horde: "minerH", alliance: "minerA" },
  skinning: { horde: "skinH", alliance: "skinA" },
  cooking: { horde: "sungshin", alliance: "sungshin" },
  fishing: { horde: "nat", alliance: "nat" },
  jewelcrafting: { horde: "mai", alliance: "maiA" },
  inscription: { horde: "lotusbloom", alliance: "lorewalker" },
};

export const WOD_TRAINERS: Record<FullProf, Pair> = {
  alchemy: { horde: "hyde", alliance: "joplin" },
  blacksmithing: { horde: "wodBsH", alliance: "ayada" },
  enchanting: { horde: "wodEncH", alliance: "wodEncA" },
  engineering: { horde: "wodEngH", alliance: "wodEngA" },
  leatherworking: { horde: "wodLwH", alliance: "wodLwA" },
  tailoring: { horde: "wodTailH", alliance: "wodTailA" },
  herbalism: { horde: "wodHerbH", alliance: "wodHerbA" },
  mining: { horde: "wodMineH", alliance: "wodMineA" },
  skinning: { horde: "wodSkinH", alliance: "wodSkinA" },
  cooking: { horde: "wodCookH", alliance: "wodCookA" },
  fishing: { horde: "wodFishH", alliance: "wodFishA" },
  jewelcrafting: { horde: "wodJcH", alliance: "wodJcA" },
  inscription: { horde: "wodInsH", alliance: "wodInsA" },
};

export const BFA_TRAINERS: Record<FullProf, Pair> = {
  alchemy: { horde: "kumali", alliance: "elric" },
  blacksmithing: { horde: "zakaal", alliance: "grix" },
  enchanting: { horde: "bfaEncH", alliance: "emily" },
  engineering: { horde: "bfaEngH", alliance: "bfaEngA" },
  leatherworking: { horde: "bfaLwH", alliance: "bfaLwA" },
  tailoring: { horde: "bfaTailH", alliance: "bfaTailA" },
  herbalism: { horde: "jahden", alliance: "declan" },
  mining: { horde: "bfaMineH", alliance: "bfaMineA" },
  skinning: { horde: "bfaSkinH", alliance: "bfaSkinA" },
  cooking: { horde: "torga", alliance: "myxle" },
  fishing: { horde: "pikeman", alliance: "alan" },
  jewelcrafting: { horde: "bfaJcH", alliance: "bfaJcA" },
  inscription: { horde: "bfaInsH", alliance: "zooey" },
};

export const SL_TRAINERS: Record<FullProf, Pair> = {
  alchemy: { horde: "aupyr", alliance: "aupyr" },
  blacksmithing: { horde: "auberk", alliance: "auberk" },
  enchanting: { horde: "auvresh", alliance: "auvresh" },
  engineering: { horde: "augur", alliance: "augur" },
  leatherworking: { horde: "auqil", alliance: "auqil" },
  tailoring: { horde: "aukert", alliance: "aukert" },
  herbalism: { horde: "aumar", alliance: "aumar" },
  mining: { horde: "aulerra", alliance: "aulerra" },
  skinning: { horde: "autil", alliance: "autil" },
  cooking: { horde: "aukrut", alliance: "aukrut" },
  fishing: { horde: "aultai", alliance: "aultai" },
  jewelcrafting: { horde: "aufic", alliance: "aufic" },
  inscription: { horde: "auvesk", alliance: "auvesk" },
};

export const CLASSIC_NPCS: Record<string, NpcEntry> = {
  yelmak: { name: "Yelmak", npcId: 3347, location: "en Orgrimmar" },
  lilyssia: { name: "Lilyssia Brisa Nocturna", npcId: 5499, location: "en Ciudad de Ventormenta" },
  saru: { name: "Saru Furiacerada", npcId: 3355, location: "en Orgrimmar" },
  bengus: { name: "Bengus Forjahonda", npcId: 4258, location: "en Forjaz" },
  godan: { name: "Godan", npcId: 3345, location: "en Orgrimmar" },
  lucan: { name: "Lucan Cordell", npcId: 1317, location: "en Ciudad de Ventormenta" },
  roxxik: { name: "Roxxik", npcId: 11017, location: "en Orgrimmar" },
  springspindle: { name: "Muello Saltarín", npcId: 5174, location: "en Forjaz" },
  karolek: { name: "Karolek", npcId: 3365, location: "en Orgrimmar" },
  simon: { name: "Simon Peletero", npcId: 5564, location: "en Ciudad de Ventormenta" },
  magar: { name: "Magar", npcId: 3363, location: "en Orgrimmar" },
  georgio: { name: "Georgio Bolero", npcId: 1346, location: "en Ciudad de Ventormenta" },
  jandi: { name: "Jandi", npcId: 3404, location: "en Orgrimmar" },
  tannysa: { name: "Tannysa", npcId: 5566, location: "en Ciudad de Ventormenta" },
  makaru: { name: "Makaru", npcId: 3357, location: "en Orgrimmar" },
  geofram: { name: "Geofram Dedorroca", npcId: 4254, location: "en Forjaz" },
  thuwd: { name: "Thuwd", npcId: 7088, location: "en Orgrimmar" },
  balthus: { name: "Balthus Cazarrocas", npcId: 6291, location: "en Forjaz" },
  zamja: { name: "Zamja", npcId: 3399, location: "en Orgrimmar" },
  daryl: { name: "Daryl Riknussun", npcId: 5159, location: "en Forjaz" },
  lumak: { name: "Lumak", npcId: 3332, location: "en Orgrimmar" },
  arnold: { name: "Arnold Leland", npcId: 5493, location: "en Ciudad de Ventormenta" },
};

export const CATA_NPCS: Record<string, NpcEntry> = {
  ...CLASSIC_NPCS,
  lugrah: { name: "Lugrah", npcId: 33614, location: "en Orgrimmar" },
  theresa: { name: "Theresa Denman", npcId: 44582, location: "en Ciudad de Ventormenta" },
  jomah: { name: "Jo'mah", npcId: 30706, location: "en Orgrimmar" },
  catarina: { name: "Catarina Stanford", npcId: 30713, location: "en Ciudad de Ventormenta" },
};

export const MOP_NPCS: Record<string, NpcEntry> = {
  tsing: { name: "Maestro cervecero Tsing", npcId: 56777, location: "en el Bosque de Jade" },
  yuan: { name: "Alquimista Yuan", npcId: 65186, location: "en el Santuario de las Siete Estrellas" },
  jorunga: { name: "Jorunga Pezuña Pétrea", npcId: 65129, location: "en el Santuario de las Dos Lunas" },
  cullen: { name: "Cullen Martilloma", npcId: 64058, location: "en el Santuario de las Siete Estrellas" },
  lai: { name: "Lai la Encantadora", npcId: 65127, location: "en el Santuario de las Dos Lunas" },
  lao: { name: "Lao Niebla Silente", npcId: 65153, location: "en el Santuario de las Siete Estrellas" },
  engineerH: { name: "Ingeniera Trini", npcId: 64924, location: "en el Santuario de las Dos Lunas" },
  engineerA: { name: "Sally Chispira", npcId: 64922, location: "en el Santuario de las Siete Estrellas" },
  lwH: { name: "Curtidor Pang", npcId: 65121, location: "en el Santuario de las Dos Lunas" },
  lwA: { name: "Pelaje Limpio", npcId: 64054, location: "en el Santuario de las Siete Estrellas" },
  shisai: { name: "Shisai", npcId: 65124, location: "en el Santuario de las Dos Lunas" },
  silkmaster: { name: "Maestra de seda Tsai", npcId: 57405, location: "en el Valle de los Cuatro Vientos" },
  growerH: { name: "Cultivador Miao", npcId: 66980, location: "en el Santuario de las Dos Lunas" },
  growerA: { name: "Cultivadora Miao", npcId: 66981, location: "en el Santuario de las Siete Estrellas" },
  minerH: { name: "Buscarrocas Guo", npcId: 66979, location: "en el Santuario de las Dos Lunas" },
  minerA: { name: "Rompepiedras Ruian", npcId: 66978, location: "en el Santuario de las Siete Estrellas" },
  skinH: { name: "Curtidor Pang", npcId: 65114, location: "en el Santuario de las Dos Lunas" },
  skinA: { name: "Pelaje Limpio", npcId: 64055, location: "en el Santuario de las Siete Estrellas" },
  sungshin: { name: "Sungshin Zarpa Férrea", npcId: 64231, location: "en Media Colina" },
  nat: { name: "Nat Pagle", npcId: 63721, location: "en el Cebo de Krasarang" },
  mai: { name: "Mai la Talladora de Jade", npcId: 65182, location: "en el Santuario de las Dos Lunas" },
  maiA: { name: "Clarice Chapmann", npcId: 64085, location: "en el Santuario de las Siete Estrellas" },
  lotusbloom: { name: "Sabia Flor de Loto", npcId: 64691, location: "en el Santuario de las Dos Lunas" },
  lorewalker: { name: "Escriba Rinji", npcId: 64690, location: "en el Santuario de las Siete Estrellas" },
};

export const WOD_NPCS: Record<string, NpcEntry> = {
  hyde: { name: "Albert de Hyde", npcId: 79813, location: "en la ciudadela (Horda)" },
  joplin: { name: "Katherine Joplin", npcId: 77363, location: "en la ciudadela (Alianza)" },
  wodBsH: { name: "Kemka Pezuña de Marca", npcId: 79817, location: "en la ciudadela (Horda)" },
  ayada: { name: "Ayada la Blanca", npcId: 77359, location: "en la ciudadela (Alianza)" },
  wodEncH: { name: "Yukla Sombraverde", npcId: 79821, location: "en la ciudadela (Horda)" },
  wodEncA: { name: "Garm", npcId: 77354, location: "en la ciudadela (Alianza)" },
  wodEngH: { name: "Pozzlow", npcId: 79826, location: "en la ciudadela (Horda)" },
  wodEngA: { name: "Christopher Macdonald", npcId: 77365, location: "en la ciudadela (Alianza)" },
  wodLwH: { name: "Yanney", npcId: 79834, location: "en la ciudadela (Horda)" },
  wodLwA: { name: "Anders Longstitch", npcId: 77356, location: "en la ciudadela (Alianza)" },
  wodTailH: { name: "Warra la Tejedora", npcId: 79864, location: "en la ciudadela (Horda)" },
  wodTailA: { name: "Kristen Stoneforge", npcId: 77382, location: "en la ciudadela (Alianza)" },
  wodHerbH: { name: "Fiona", npcId: 79860, location: "en la ciudadela (Horda)" },
  wodHerbA: { name: "Fanny Firebeard", npcId: 77361, location: "en la ciudadela (Alianza)" },
  wodMineH: { name: "Gorsol", npcId: 79857, location: "en la ciudadela (Horda)" },
  wodMineA: { name: "Timothy Leens", npcId: 77730, location: "en la ciudadela (Alianza)" },
  wodSkinH: { name: "Yanney", npcId: 79834, location: "en la ciudadela (Horda)" },
  wodSkinA: { name: "Anders Longstitch", npcId: 77356, location: "en la ciudadela (Alianza)" },
  wodCookH: { name: "Azuka Filofuria", npcId: 79820, location: "en la ciudadela (Horda)" },
  wodCookA: { name: "Brock el Paciente", npcId: 77319, location: "en la ciudadela (Alianza)" },
  wodFishH: { name: "Mak'jin", npcId: 79892, location: "en la ciudadela (Horda)" },
  wodFishA: { name: "Ron Ashton", npcId: 77733, location: "en la ciudadela (Alianza)" },
  wodJcH: { name: "Dorog", npcId: 79832, location: "en la ciudadela (Horda)" },
  wodJcA: { name: "Steven Cochrane", npcId: 77368, location: "en la ciudadela (Alianza)" },
  wodInsH: { name: "Urgra", npcId: 79829, location: "en la ciudadela (Horda)" },
  wodInsA: { name: "Eric Broadoak", npcId: 77372, location: "en la ciudadela (Alianza)" },
};

export const BFA_NPCS: Record<string, NpcEntry> = {
  kumali: { name: "Kumali la Lista", npcId: 122703, location: "en Dazar'alor" },
  elric: { name: "Elric Whalgrene", npcId: 136041, location: "en Boralus" },
  zakaal: { name: "Maestro de forja Zak'aal", npcId: 127112, location: "en Dazar'alor" },
  grix: { name: "Grix «Puños de Hierro» Barrett", npcId: 133536, location: "en Boralus" },
  bfaEncH: { name: "Encantadora Quinni", npcId: 122702, location: "en Dazar'alor" },
  emily: { name: "Emily Fairweather", npcId: 136061, location: "en Boralus" },
  bfaEngH: { name: "Shuga Explosacuernos", npcId: 122698, location: "en Dazar'alor" },
  bfaEngA: { name: "Layla Evenkeel", npcId: 136059, location: "en Boralus" },
  bfaLwH: { name: "Xanjo", npcId: 122700, location: "en Dazar'alor" },
  bfaLwA: { name: "Cassandra Brennor", npcId: 136069, location: "en Boralus" },
  bfaTailH: { name: "Pin'jin el Paciente", npcId: 122701, location: "en Dazar'alor" },
  bfaTailA: { name: "Daniel Brineweaver", npcId: 136071, location: "en Boralus" },
  jahden: { name: "Jahden Fla", npcId: 122704, location: "en Dazar'alor" },
  declan: { name: "Declan Senal", npcId: 136096, location: "en Boralus" },
  bfaMineH: { name: "Secott el Cegato", npcId: 122694, location: "en Dazar'alor" },
  bfaMineA: { name: "Myra Cabot", npcId: 136091, location: "en Boralus" },
  bfaSkinH: { name: "Rana la Cortadora", npcId: 122699, location: "en Dazar'alor" },
  bfaSkinA: { name: "Camilla Cieloscuro", npcId: 136094, location: "en Boralus" },
  torga: { name: "T'kash", npcId: 141549, location: "en Dazar'alor" },
  myxle: { name: "\"Capitán\" Byron Mehlsack", npcId: 136052, location: "en Boralus" },
  pikeman: { name: "Pesca-lanza Fro'wakah", npcId: 122697, location: "en Dazar'alor" },
  alan: { name: "Alan Goyle", npcId: 136102, location: "en Boralus" },
  bfaJcH: { name: "Seshuli", npcId: 122695, location: "en Dazar'alor" },
  bfaJcA: { name: "Samuel D. Colton III", npcId: 136060, location: "en Boralus" },
  bfaInsH: { name: "Cronista Kizani", npcId: 122696, location: "en Dazar'alor" },
  zooey: { name: "Zooey Piñóntinta", npcId: 130399, location: "en Boralus" },
};

export const SL_NPCS: Record<string, NpcEntry> = {
  aupyr: { name: "Elixirista Au'pyr", npcId: 156689, location: "en Oribos" },
  auberk: { name: "Herrero Au'berk", npcId: 156670, location: "en Oribos" },
  auvresh: { name: "Imbuidor Au'vresh", npcId: 156677, location: "en Oribos" },
  augur: { name: "Maquinista Au'gur", npcId: 156682, location: "en Oribos" },
  auqil: { name: "Curtidor Au'qil", npcId: 156669, location: "en Oribos" },
  aukert: { name: "Tejedor Au'kert", npcId: 156681, location: "en Oribos" },
  aumar: { name: "Selector Au'mar", npcId: 156686, location: "en Oribos" },
  aulerra: { name: "Minero Au'lerra", npcId: 156668, location: "en Oribos" },
  autil: { name: "Desollador Au'til", npcId: 156667, location: "en Oribos" },
  aukrut: { name: "Chef Au'krut", npcId: 156672, location: "en Oribos" },
  aultai: { name: "Pescador Au'tai", npcId: 156671, location: "en Oribos" },
  aufic: { name: "Joyero Au'fic", npcId: 156683, location: "en Oribos" },
  auvesk: { name: "Escriba Au'vesk", npcId: 156687, location: "en Oribos" },
};

export const CLASSIC_MATERIALS: Record<string, MaterialEntry> = {
  ...TBC_SUBIDA_MATERIALS,
};

export const CATA_MATERIALS: Record<string, MaterialEntry> = {
  ...TBC_SUBIDA_MATERIALS,
  cinderbloom: { name: "Flor de ceniza", itemId: 52983, icon: "inv_misc_herb_cinderbloom" },
  stormvine: { name: "Vidtempestad", itemId: 52984, icon: "inv_misc_herb_stormvine" },
  twilightJasmine: { name: "Jazmín crepuscular", itemId: 52987, icon: "inv_misc_herb_twilightjasmine" },
  elementiumBar: { name: "Barra de elementium", itemId: 52186, icon: "inv_ingot_elementium" },
  obsidiumBar: { name: "Barra de obsidium", itemId: 54849, icon: "inv_ingot_obsidium" },
  embersilk: { name: "Tela de ascuahilo", itemId: 53010, icon: "inv_fabric_embersilk" },
  savageLeather: { name: "Cuero salvaje", itemId: 52976, icon: "inv_misc_leatherscrap_19" },
  volatileLife: { name: "Vida volátil", itemId: 52329, icon: "inv_misc_volatilelife" },
};

export const MOP_MATERIALS: Record<string, MaterialEntry> = {
  ...CATA_MATERIALS,
  greenTea: { name: "Hoja de té verde", itemId: 72234, icon: "inv_misc_herb_silkweed" },
  silkweed: { name: "Hierbaseda", itemId: 72235, icon: "inv_misc_herb_silkweed" },
  ghostIron: { name: "Mena de hierro fantasma", itemId: 72092, icon: "inv_ore_ghostiron" },
  windwool: { name: "Lana eólica", itemId: 72988, icon: "inv_misc_gem_pearl_04" },
  exoticLeather: { name: "Cuero exótico", itemId: 72120, icon: "inv_misc_leatherscrap_19" },
};

export const WOD_MATERIALS: Record<string, MaterialEntry> = {
  frostweed: { name: "Verbesina", itemId: 109124, icon: "inv_misc_herb_frostweed" },
  fireweed: { name: "Adelfilla", itemId: 109125, icon: "inv_misc_herb_fireweed" },
  blackrockOre: { name: "Mena de roca negra", itemId: 109118, icon: "inv_ore_blackrock" },
  trueIronOre: { name: "Mena de verahierro", itemId: 109119, icon: "inv_ore_trueironore" },
  sumptuousFur: { name: "Pelaje suntuoso", itemId: 111557, icon: "inv_misc_pelt_14" },
  sumptuous: { name: "Pelaje suntuoso", itemId: 111557, icon: "inv_misc_pelt_14" },
  hexweave: { name: "Paño de tejido hex", itemId: 111556, icon: "inv_fabric_hexweave" },
};

export const BFA_MATERIALS: Record<string, MaterialEntry> = {
  riverbud: { name: "Brote de río", itemId: 152505, icon: "inv_misc_herb_riverbud" },
  sirensPollen: { name: "Polen de sirena", itemId: 152509, icon: "inv_misc_herb_seastalk" },
  monelite: { name: "Mena de monelita", itemId: 152512, icon: "inv_ore_monalite" },
  stormsSilver: { name: "Mena de plata de tormenta", itemId: 152579, icon: "inv_ore_stormsilver" },
  tidespray: { name: "Lino marino", itemId: 152576, icon: "inv_fabric_tidespray" },
  coarseLeather: { name: "Cuero basto", itemId: 152541, icon: "inv_misc_leatherscrap_19" },
};

export const SL_MATERIALS: Record<string, MaterialEntry> = {
  deathBlossom: { name: "Flor de muerte", itemId: 169701, icon: "inv_misc_herb_deathblossom" },
  risingGlory: { name: "Gloria creciente", itemId: 168586, icon: "inv_misc_herb_risingglory" },
  laestrite: { name: "Mena de laestrita", itemId: 171828, icon: "inv_ore_laestrite" },
  shroudedCloth: { name: "Tela velada", itemId: 173202, icon: "inv_fabric_shadowcloth" },
  desolateLeather: { name: "Cuero desolado", itemId: 172089, icon: "inv_misc_leatherscrap_19" },
};
