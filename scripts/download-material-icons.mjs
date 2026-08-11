#!/usr/bin/env node
/**
 * Descarga los iconos de materiales desde wow.zamimg.com usando los nombres
 * definidos en app/lib/alchemy-tbc-materials.ts y los guarda en public/images/materials/.
 *
 * Uso: node scripts/download-material-icons.mjs
 *
 * Los iconos se nombran por materialKey (ej. peacebloom.jpg, felweed.jpg).
 * La app puede usarlos en /images/materials/{key}.jpg tras ejecutar este script.
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MATERIALS_TS = join(ROOT, "app", "lib", "alchemy-tbc-materials.ts");
const OUT_DIR = join(ROOT, "public", "images", "materials");
const ZAMIMG_BASE = "https://wow.zamimg.com/images/wow/icons/small";

/**
 * Extrae de alchemy-tbc-materials.ts las entradas key -> icon (sin .jpg).
 */
function parseMaterialsFile(content) {
  const entries = [];
  const re = /(\w+):\s*\{\s*name:\s*"[^"]+",\s*itemId:\s*\d+,\s*icon:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    entries.push({ key: m[1], icon: m[2].trim().toLowerCase() });
  }
  return entries;
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; profesiones-wow/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const content = readFileSync(MATERIALS_TS, "utf8");
  const entries = parseMaterialsFile(content);
  if (entries.length === 0) {
    console.error("No se encontraron materiales en", MATERIALS_TS);
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  console.log("Descargando", entries.length, "iconos en", OUT_DIR);

  let ok = 0;
  let fail = 0;
  for (let i = 0; i < entries.length; i++) {
    const { key, icon } = entries[i];
    const url = `${ZAMIMG_BASE}/${icon}.jpg`;
    const outPath = join(OUT_DIR, `${key}.jpg`);
    try {
      const buf = await download(url);
      writeFileSync(outPath, buf);
      console.log(`[${i + 1}/${entries.length}] ${key}.jpg`);
      ok++;
    } catch (e) {
      console.warn(`[${i + 1}/${entries.length}] ${key} FAIL: ${e.message}`);
      fail++;
    }
    await new Promise((r) => setTimeout(r, 150));
  }

  console.log("\nHecho:", ok, "OK,", fail, "fallos.");
  if (fail > 0) {
    console.log("Algunos iconos pueden tener otro nombre en Zamimg; revisa app/lib/alchemy-tbc-materials.ts (campo icon).");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
