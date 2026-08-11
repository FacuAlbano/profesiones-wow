#!/usr/bin/env node
/**
 * Copia el mirror de wow-professions (o el limpio) a public/guides-mirror
 * para que la app pueda servir las guías vía iframe.
 *
 * Uso:
 *   node scripts/copy-guides-mirror.mjs
 *   node scripts/copy-guides-mirror.mjs "E:\\Proyectos\\Nueva carpeta\\wow-professions-mirror-cleaned"
 *
 * Por defecto usa: E:\Proyectos\Nueva carpeta\wow-professions-mirror-cleaned
 * si existe; si no, E:\Proyectos\Nueva carpeta\wow-professions-mirror
 */

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const defaultCleaned = "E:\\Proyectos\\Nueva carpeta\\wow-professions-mirror-cleaned";
const defaultMirror = "E:\\Proyectos\\Nueva carpeta\\wow-professions-mirror";
const dest = join(projectRoot, "public", "guides-mirror");

const source = process.argv[2]
  ? process.argv[2]
  : existsSync(defaultCleaned)
    ? defaultCleaned
    : defaultMirror;

if (!existsSync(source)) {
  console.error("Origen no encontrado:", source);
  console.error("Indica la ruta del mirror como argumento, por ejemplo:");
  console.error('  node scripts/copy-guides-mirror.mjs "E:\\Proyectos\\Nueva carpeta\\wow-professions-mirror"');
  process.exit(1);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true });
}
mkdirSync(dest, { recursive: true });
cpSync(source, dest, { recursive: true });
console.log("Mirror copiado:", source, "->", dest);
