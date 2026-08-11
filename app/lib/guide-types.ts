/**
 * Tipos compartidos para guías: materiales (items) y NPCs.
 * Cada guía puede definir su propio registro y pasarlo a WowheadItem / WowheadNpc.
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
