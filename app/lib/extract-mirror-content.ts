/**
 * Extrae el contenido principal de un HTML del mirror wow-professions
 * y normaliza rutas para que funcionen en nuestra app.
 * Se ejecuta en el cliente tras fetch del HTML.
 */

const MAIN_SELECTOR = "main.content";
const FALLBACK_SELECTOR = "main";

/** Convierte rutas relativas del mirror (../ o ../../) a absolutas desde la base indicada */
function normalizeMirrorUrls(html: string, basePath = "/guides-mirror"): string {
  const base = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return html.replace(/(\s)(href|src)=["'](\.\.\/)+/g, `$1$2="${base}/`);
}

/**
 * Parsea el HTML del mirror y devuelve solo el contenido de <main class="content">.
 * Si falla, devuelve el body completo sin header/nav.
 * @param basePath Base para enlaces relativos (ej. /guides-mirror-es o /guides-mirror).
 */
export function extractMirrorMainContent(html: string, basePath = "/guides-mirror"): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const main =
    doc.querySelector(MAIN_SELECTOR) ?? doc.querySelector(FALLBACK_SELECTOR);
  if (!main) return normalizeMirrorUrls(doc.body?.innerHTML ?? "", basePath);
  return normalizeMirrorUrls(main.innerHTML, basePath);
}
