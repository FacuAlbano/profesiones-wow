/**
 * Tema por facción: Alianza (claro) / Horda (oscuro).
 * Cookie para SSR y localStorage para persistencia en cliente.
 */

export type Faction = "alliance" | "horde";

const COOKIE_NAME = "faction";
const COOKIE_DAYS = 365;

function setCookie(name: string, value: string, days: number = COOKIE_DAYS) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

export function initFaction(): Faction {
  if (typeof window === "undefined") return "alliance";

  const stored = localStorage.getItem(COOKIE_NAME) as Faction | null;
  const faction: Faction = stored === "horde" ? "horde" : "alliance";

  document.documentElement.classList.remove("alliance", "horde");
  document.documentElement.classList.add(faction);
  setCookie(COOKIE_NAME, faction);
  return faction;
}

export function getFaction(): Faction {
  if (typeof window === "undefined") return "alliance";
  const stored = localStorage.getItem(COOKIE_NAME) as Faction | null;
  return stored === "horde" ? "horde" : "alliance";
}

export function setFaction(faction: Faction): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(COOKIE_NAME, faction);
  document.documentElement.classList.remove("alliance", "horde");
  document.documentElement.classList.add(faction);
  setCookie(COOKIE_NAME, faction);
}

export function toggleFaction(): Faction {
  const current = getFaction();
  const next: Faction = current === "horde" ? "alliance" : "horde";
  setFaction(next);
  return next;
}
