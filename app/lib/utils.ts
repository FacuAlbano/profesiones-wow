import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base URL de Wowhead (español) para enlaces a objetos/quests/etc. */
export const WOWHEAD_BASE = "https://www.wowhead.com/es" as const;

export function wowheadItem(id: number): string {
  return `${WOWHEAD_BASE}/item=${id}`;
}

export function wowheadSpell(id: number): string {
  return `${WOWHEAD_BASE}/spell=${id}`;
}

export function wowheadQuest(id: number): string {
  return `${WOWHEAD_BASE}/quest=${id}`;
}

export function wowheadNpc(id: number): string {
  return `${WOWHEAD_BASE}/npc=${id}`;
}
