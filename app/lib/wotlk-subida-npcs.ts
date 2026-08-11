/**
 * NPCs de las Subidas nativas de Wrath of the Lich King.
 * IDs de WotLK Classic (no retail). Nombres = Wowhead ES.
 */

import type { NpcEntry } from "~/lib/guide-types";

const IN_DALARAN = "en Dalaran";
const IN_BOREAN_H = "en Tundra Boreal (Bastión Grito de Guerra)";
const IN_BOREAN_A = "en Tundra Boreal (Fortaleza Denuedo)";

export const WOTLK_SUBIDA_NPCS: Record<string, NpcEntry> = {
  linzy: { name: "Linzy Pernonegro", npcId: 28703, location: IN_DALARAN },
  arthur: { name: "Arthur Henslowe", npcId: 26975, location: IN_BOREAN_H },
  falorn: { name: "Falorn Susurro Nocturno", npcId: 26987, location: IN_BOREAN_A },
  alard: { name: "Alard Schmied", npcId: 28694, location: IN_DALARAN },
  nalthanis: { name: "Encantador Nalthanis", npcId: 28693, location: IN_DALARAN },
  ildine: { name: "Ildine Lanzapena", npcId: 28714, location: IN_DALARAN },
  timofey: { name: "Timofey Oshenko", npcId: 28697, location: IN_DALARAN },
  diane: { name: "Diane Latas", npcId: 28700, location: IN_DALARAN },
  charles: { name: "Charles Valor", npcId: 28699, location: IN_DALARAN },
  dorothy: { name: "Dorothy Egan", npcId: 28704, location: IN_DALARAN },
  jedidiah: { name: "Jedidiah Handers", npcId: 28698, location: IN_DALARAN },
  derik: { name: "Derik Marks", npcId: 28696, location: IN_DALARAN },
  awilo: { name: "Awilo Lon'gomba", npcId: 29631, location: IN_DALARAN },
  katherine: { name: "Katherine Lee", npcId: 28705, location: IN_DALARAN },
  marcia: { name: "Marcia Sedal", npcId: 28742, location: IN_DALARAN },
  timothy: { name: "Timothy Jones", npcId: 28701, location: IN_DALARAN },
  pallin: { name: "Profesor Palin", npcId: 28702, location: IN_DALARAN },
};
