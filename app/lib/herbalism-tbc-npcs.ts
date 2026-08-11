/**
 * NPCs de la guía de Herboristería TBC (instructores).
 * Nombres en español (MX). Enlaces a es.wowhead.com/tbc/npc=
 */

import type { NpcEntry } from "~/lib/guide-types";
export type { NpcEntry };

/** Instructores de Herboristería TBC (clásico 1-300 y TBC 300-375) */
export const HERBALISM_TBC_NPCS: Record<string, NpcEntry> = {
  // Alianza - clásico
  reynaStonebranch: { name: "Reyna Ramapiedra", npcId: 5137, location: "en Forjaz" },
  tannysa: { name: "Tannysa", npcId: 5566, location: "en Ciudad de Ventormenta" },
  firodrenMooncaller: { name: "Firodren Clamaluna", npcId: 4204, location: "en Darnassus" },
  herbalistPomeroy: { name: "Herbolario Pomeroy", npcId: 1218, location: "en Elwynn" },
  malorneBladeleaf: { name: "Malorne Hojafilo", npcId: 3604, location: "en Teldrassil" },
  kaliHealtouch: { name: "Kali Toquesano", npcId: 1473, location: "en Loch Modan" },
  cylaniaRootstalker: { name: "Cylania Acecharraíz", npcId: 3965, location: "en Vallefresno" },
  telurinonMoonshadow: { name: "Telurinon Sombraluna", npcId: 1458, location: "en Los Humedales" },
  brantJasperbloom: { name: "Brant Flor de Jasper", npcId: 4898, location: "en Marjal Revolca" },
  almaJainrose: { name: "Alma Rosalba", npcId: 812, location: "en Crestagrana" },
  cemmorhan: { name: "Cemmorhan", npcId: 16736, location: "en El Exodar" },
  // Horda - clásico
  jandi: { name: "Jandi", npcId: 3404, location: "en Orgrimmar" },
  marthaAlliestar: { name: "Martha Aliestrella", npcId: 4614, location: "en Entrañas" },
  kominWinterhoof: { name: "Komin Pezuña Invernal", npcId: 3013, location: "en Cima del Trueno" },
  faruza: { name: "Faruza", npcId: 2114, location: "en Claros de Tirisfal" },
  mishiki: { name: "Mishiki", npcId: 3185, location: "en Durotar" },
  angrun: { name: "Angrun", npcId: 2856, location: "en Vega de Tuercespina" },
  aranaeVenomblood: { name: "Aranae Sangreveneno", npcId: 2390, location: "en Laderas de Trabalomas" },
  botanistNathera: { name: "Botánica Nathera", npcId: 16644, location: "en Ciudad de Lunargenta" },
  // TBC (300-375)
  ruakStronghorn: { name: "Ruak Cuernoforte", npcId: 18748, location: "en Thrallmar, Península del Fuego Infernal" },
  rorelien: { name: "Rorelien", npcId: 18776, location: "en Bastión del Honor, Península del Fuego Infernal" },
};

export type HerbalismTbcNpcKey = keyof typeof HERBALISM_TBC_NPCS;
