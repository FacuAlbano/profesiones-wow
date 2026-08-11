/**
 * NPCs de la guía de Alquimia TBC (instructores y vendedores).
 * Nombres en español (MX). Enlaces a es.wowhead.com/tbc/npc=
 */

import type { NpcEntry } from "~/lib/guide-types";
export type { NpcEntry };

/** Instructores y vendedores de la guía Alquimia TBC */
export const ALCHEMY_TBC_NPCS: Record<string, NpcEntry> = {
  // Instructores clásicos (1-300) - Horda
  yelmak: { name: "Yelmak", npcId: 3347, location: "en Orgrimmar" },
  herbertHalsey: { name: "Doctor Herbert Halsey", npcId: 4210, location: "en Entrañas" },
  benaWinterhoof: { name: "Bena Pezuña Invernal", npcId: 3345, location: "en Cima del Trueno" },
  camberon: { name: "Camberon", npcId: 16642, location: "en Ciudad de Lunargenta" },
  // Instructores clásicos - Alianza
  tallyBerryfizz: { name: "Tally Burbubaya", npcId: 3344, location: "en Forjaz" },
  lilyssiaNightbreeze: { name: "Lilyssia Brisa Nocturna", npcId: 3343, location: "en Ciudad de Ventormenta" },
  ainethil: { name: "Ainethil", npcId: 3346, location: "en Darnassus" },
  lucc: { name: "Lucc", npcId: 16723, location: "en El Exodar" },
  // Instructores TBC (300-375)
  lorokeem: { name: "Lorokeem", npcId: 19052, location: "en Ciudad de Shattrath" },
  apothecaryAntonivich: { name: "Boticario Antonivich", npcId: 18772, location: "en Península del Fuego Infernal" },
  alchemistGribble: { name: "Alquimista Gribble", npcId: 18773, location: "en Península del Fuego Infernal" },
  // Vendedores de recetas TBC (nombre + ubicación exacta)
  dagaRamba: { name: "Daga Ramba", npcId: 18960, location: "en Montañas Filospada" },
  haalrun: { name: "Haalrun", npcId: 18959, location: "en Marisma de Zangar" },
  leeliLonghaggle: { name: "Leeli Regateo", npcId: 18961, location: "en Bosque de Terokkar" },
  nakodu: { name: "Nakodu", npcId: 19042, location: "en Ciudad de Shattrath" },
};

export type NpcKey = keyof typeof ALCHEMY_TBC_NPCS;
