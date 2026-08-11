#!/usr/bin/env node
/**
 * Traduce todo el contenido de public/guides-mirror al español y lo escribe
 * en public/guides-mirror-es. Solo se traduce el contenido de <main class="content">.
 * La app mostrará automáticamente la versión en español cuando exista.
 *
 * Requiere: npm install  (incluye google-translate-api-x en devDependencies)
 * Uso: npm run translate-guides
 *
 * Prueba con pocos archivos: LIMIT=5 npm run translate-guides
 * (Google puede limitar peticiones; hay ~1.5 s de pausa entre archivos.)
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const sourceDir = join(projectRoot, "public", "guides-mirror");
const destDir = join(projectRoot, "public", "guides-mirror-es");

const LIMIT = parseInt(process.env.LIMIT || "0", 10) || Infinity;
const DELAY_MS = 1500;

function getAllHtmlFiles(dir, base = "") {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      files.push(...getAllHtmlFiles(join(dir, e.name), rel));
    } else if (e.isFile() && (e.name.endsWith(".html") || e.name.endsWith(".htm"))) {
      files.push(rel);
    }
  }
  return files;
}

function extractMainContent(html) {
  const mainMatch = html.match(/<main[^>]*class="content"[^>]*>([\s\S]*?)<\/main>/i)
    || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function normalizeUrls(html, base) {
  return html.replace(/(\s)(href|src)=["'](\.\.\/)+/g, `$1$2="${base}/`);
}

async function translateWithChunks(text, translateFn, maxChunk = 4000) {
  if (!text || text.trim().length === 0) return text;
  if (text.length <= maxChunk) return translateFn(text);

  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    let chunk = remaining.slice(0, maxChunk);
    if (remaining.length > maxChunk) {
      const lastClose = chunk.lastIndexOf("</");
      const lastSpace = chunk.lastIndexOf(" ");
      const splitAt = Math.max(lastClose, lastSpace, chunk.lastIndexOf(">"));
      if (splitAt > maxChunk / 2) {
        chunk = remaining.slice(0, splitAt + 1);
        remaining = remaining.slice(splitAt + 1);
      } else {
        remaining = remaining.slice(maxChunk);
      }
    } else {
      remaining = "";
    }
    const translated = await translateFn(chunk);
    chunks.push(translated);
    if (remaining.length > 0) await new Promise((r) => setTimeout(r, 500));
  }
  return chunks.join("");
}

async function main() {
  let translate;
  try {
    const mod = await import("google-translate-api-x");
    translate = mod.default ?? mod.translate;
  } catch (e) {
    console.error("Instala el paquete: npm install google-translate-api-x");
    process.exit(1);
  }

  if (!statSync(sourceDir, { throwIfNoEntry: false })?.isDirectory()) {
    console.error("No existe public/guides-mirror. Ejecuta antes: npm run copy-guides-mirror");
    process.exit(1);
  }

  const files = getAllHtmlFiles(sourceDir).slice(0, LIMIT);
  console.log(`Traduciendo ${files.length} archivos a español...`);

  mkdirSync(destDir, { recursive: true });

  for (let i = 0; i < files.length; i++) {
    const rel = files[i];
    const srcPath = join(sourceDir, rel);
    const destPath = join(destDir, rel);

    try {
      const html = readFileSync(srcPath, "utf-8");
      let mainHtml = extractMainContent(html);
      if (!mainHtml.trim()) {
        console.warn(`  [skip] ${rel} (sin main content)`);
        continue;
      }

      const translated = await translateWithChunks(mainHtml, (chunk) =>
        translate(chunk, { from: "en", to: "es", client: "gtx" }).then((r) => r.text)
      );
      const normalized = normalizeUrls(translated, "/guides-mirror-es");

      const wrapped = `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"/></head><body><main class="content">${normalized}</main></body></html>`;
      mkdirSync(dirname(destPath), { recursive: true });
      writeFileSync(destPath, wrapped, "utf-8");
      console.log(`  [${i + 1}/${files.length}] ${rel}`);
    } catch (err) {
      console.error(`  [error] ${rel}:`, err.message);
    }

    if (i < files.length - 1) await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  console.log("Hecho. Contenido en español en public/guides-mirror-es");
}

main();
