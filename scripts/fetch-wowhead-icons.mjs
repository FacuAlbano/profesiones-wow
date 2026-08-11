#!/usr/bin/env node
/**
 * Obtiene el nombre del icono de cada ítem desde Wowhead (tbc/item=ID?xml)
 * y actualiza app/lib/alchemy-tbc-materials.ts con el icon correcto.
 * Ejecutar: node scripts/fetch-wowhead-icons.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MATERIALS_PATH = join(__dirname, "..", "app", "lib", "alchemy-tbc-materials.ts");

const ITEM_IDS_BY_KEY = {
  peacebloom: 2447,
  silverleaf: 2449,
  emptyVial: 3371,
  briarthorn: 2450,
  bruiseweed: 2453,
  leadedVial: 3372,
  mageroyal: 785,
  stranglekelp: 3820,
  liferoot: 3357,
  kingsblood: 3356,
  goldthorn: 3821,
  wildSteelbloom: 3355,
  sungrass: 8838,
  khadgarWhisker: 3358,
  crystalVial: 17194,
  arthasTears: 8839,
  blindweed: 8831,
  goldenSansam: 13464,
  mountainSilversage: 13463,
  imbuedVial: 18256,
  felweed: 22785,
  dreamingGlory: 22786,
  netherbloom: 22787,
  nightmareVine: 22792,
  terocone: 22789,
  dreamfoil: 13462,
  ancientLichen: 22790,
  icecap: 13467,
  elementalFire: 7068,
  dreamDust: 11176,
  ragveil: 22791,
  firefinSnapper: 6359,
};

function extractIconFromXml(xml) {
  const m = xml.match(/<icon[^>]*>([^<]+)<\/icon>/i);
  if (!m) return null;
  return m[1].replace(/\\/g, "").trim().toLowerCase();
}

async function fetchIconForItem(itemId) {
  const url = `https://www.wowhead.com/tbc/item=${itemId}?xml`;
  try {
    const res = await fetch(url);
    const xml = await res.text();
    return extractIconFromXml(xml);
  } catch (e) {
    console.warn(`Error fetching item ${itemId}:`, e.message);
    return null;
  }
}

async function main() {
  const results = {};
  const keys = Object.keys(ITEM_IDS_BY_KEY);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const itemId = ITEM_IDS_BY_KEY[key];
    process.stderr.write(`[${i + 1}/${keys.length}] ${key} (${itemId})... `);
    const icon = await fetchIconForItem(itemId);
    results[key] = icon;
    process.stderr.write(icon ? `${icon}\n` : "FAIL\n");
    await new Promise((r) => setTimeout(r, 300));
  }

  const content = readFileSync(MATERIALS_PATH, "utf8");
  let newContent = content;
  for (const [key, icon] of Object.entries(results)) {
    if (!icon) continue;
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `(${escapedKey}:\\s*\\{\\s*name:\\s*"[^"]+",\\s*itemId:\\s*\\d+,\\s*icon:\\s*)"[^"]*"`,
      "g"
    );
    newContent = newContent.replace(re, `$1"${icon}"`);
  }
  writeFileSync(MATERIALS_PATH, newContent);
  console.log("Actualizado", MATERIALS_PATH);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
