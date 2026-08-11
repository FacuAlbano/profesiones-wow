/**
 * Recurso de API: devuelve el HTML de una guía del mirror traducido al español.
 * GET /api/guide-es/guides/bfa-tailoring/index.html
 * Si falla la traducción, devuelve el contenido en inglés.
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Route } from "./+types/api.guide-es.$";

const MIRROR_DIR = "public/guides-mirror";
const MAX_CHUNK = 4000;

function extractMain(html: string): string {
  const mainMatch =
    html.match(/<main[^>]*class="content"[^>]*>([\s\S]*?)<\/main>/i) ||
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function normalizeUrls(html: string, base: string): string {
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return html.replace(/(\s)(href|src)=["'](\.\.\/)+/g, `$1$2="${b}/`);
}

async function translateChunk(
  text: string,
  translate: (text: string, opts: { from: string; to: string; client: string }) => Promise<{ text: string }>
): Promise<string> {
  if (!text || text.trim().length === 0) return text;
  if (text.length <= MAX_CHUNK) {
    const res = await translate(text, { from: "en", to: "es", client: "gtx" });
    return res.text;
  }
  const chunks: string[] = [];
  let remaining = text;
  while (remaining.length > 0) {
    let chunk = remaining.slice(0, MAX_CHUNK);
    if (remaining.length > MAX_CHUNK) {
      const splitAt = Math.max(
        chunk.lastIndexOf("</p>"),
        chunk.lastIndexOf("</li>"),
        chunk.lastIndexOf(" "),
        chunk.lastIndexOf(">")
      );
      if (splitAt > MAX_CHUNK / 2) {
        chunk = remaining.slice(0, splitAt + 1);
        remaining = remaining.slice(splitAt + 1);
      } else {
        remaining = remaining.slice(MAX_CHUNK);
      }
    } else {
      remaining = "";
    }
    const res = await translate(chunk, { from: "en", to: "es", client: "gtx" });
    chunks.push(res.text);
    if (remaining.length > 0) await new Promise((r) => setTimeout(r, 600));
  }
  return chunks.join("");
}

export async function loader({ params }: Route.LoaderArgs) {
  const path = params["*"];
  if (!path || path.includes("..")) {
    return new Response("Bad request", { status: 400 });
  }

  const root = process.cwd();
  const fullPath = join(root, MIRROR_DIR, path);

  if (!existsSync(fullPath)) {
    return new Response("Not found", { status: 404 });
  }

  let html: string;
  try {
    html = readFileSync(fullPath, "utf-8");
  } catch {
    return new Response("Error reading file", { status: 500 });
  }

  const mainHtml = extractMain(html);
  if (!mainHtml.trim()) {
    return new Response("No content", { status: 404 });
  }

  try {
    const mod = await import("google-translate-api-x");
    const translate = mod.default ?? (mod as { translate: typeof mod.default }).translate;
    const translated = await translateChunk(mainHtml, translate);
    const normalized = normalizeUrls(translated, "/guides-mirror-es");
    return new Response(normalized, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    const normalized = normalizeUrls(mainHtml, "/guides-mirror");
    return new Response(normalized, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}

export default function ApiGuideEsRoute() {
  return null;
}
