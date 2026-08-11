/**
 * Tipos compartidos para guías: materiales (items) y NPCs.
 * Cada guía define su registro y lo pasa a WowheadItem / WowheadNpc (sin default de Alquimia TBC).
 */

export type MaterialEntry = {
  name: string;
  itemId: number;
  icon: string;
};

export type NpcEntry = {
  name: string;
  npcId: number;
  location?: string;
};

export type GuideIndexSection = { id: string; label: string };
