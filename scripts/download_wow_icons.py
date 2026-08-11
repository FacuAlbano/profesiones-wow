#!/usr/bin/env python3
"""
Descarga iconos de WoW desde URLs (Zamimg o lista) y los guarda en public/images/.

Uso:
  # Desde una URL de página (extrae y descarga imágenes Zamimg):
  python scripts/download_wow_icons.py "https://www.wow-professions.com/tbc/alchemy-leveling-guide-burning-crusade-classic"

  # Desde el HTML que generaste (solo URLs de wow.zamimg.com):
  python scripts/download_wow_icons.py images_for_web.html

  # Desde lista de URLs (una por línea):
  python scripts/download_wow_icons.py image_links.txt

  # Solo iconos de materiales (desde app/lib/alchemy-tbc-materials.ts):
  python scripts/download_wow_icons.py

Los iconos usados en la guía se guardan en public/images/materials/{materialKey}.jpg.
El resto de iconos Zamimg se guardan en public/images/icons/{nombre_icono}.jpg.
"""

import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests

# Directorios (relativos a la raíz del repo)
ROOT = Path(__file__).resolve().parent.parent
MATERIALS_DIR = ROOT / "public" / "images" / "materials"
ICONS_DIR = ROOT / "public" / "images" / "icons"
MATERIALS_TS = ROOT / "app" / "lib" / "alchemy-tbc-materials.ts"

ZAMIMG_BASE = "https://wow.zamimg.com/images/wow/icons/small"

# Mapeo icon_name -> lista de materialKeys (varios materiales comparten icono)
# Se rellena leyendo alchemy-tbc-materials.ts
ICON_TO_MATERIAL_KEYS: dict[str, list[str]] = {}


def parse_materials_ts() -> None:
    """Rellena ICON_TO_MATERIAL_KEYS desde app/lib/alchemy-tbc-materials.ts."""
    text = MATERIALS_TS.read_text(encoding="utf-8")
    # key: { name: "...", itemId: N, icon: "nombre_icono" }
    for m in re.finditer(
        r"(\w+):\s*\{\s*name:\s*\"[^\"]+\",\s*itemId:\s*\d+,\s*icon:\s*\"([^\"]+)\"",
        text,
    ):
        key, icon = m.group(1), m.group(2).strip().lower()
        ICON_TO_MATERIAL_KEYS.setdefault(icon, []).append(key)


def extract_urls_from_html(path: Path) -> list[str]:
    """Extrae src de todas las <img> del HTML."""
    urls = []
    html = path.read_text(encoding="utf-8")
    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I):
        urls.append(m.group(1).strip())
    return urls


def extract_urls_from_txt(path: Path) -> list[str]:
    """Una URL por línea."""
    return [line.strip() for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def fetch_page(url: str, timeout: int = 15) -> str:
    """Descarga el HTML de la página."""
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    r = requests.get(url, headers=headers, timeout=timeout)
    r.raise_for_status()
    r.encoding = r.apparent_encoding or "utf-8"
    return r.text


def extract_urls_from_html_content(html: str, base_url: str) -> list[str]:
    """Extrae todas las URLs de src en <img> y las convierte a absolutas."""
    urls = []
    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I):
        src = m.group(1).strip()
        if not src or src.startswith("data:"):
            continue
        full = urljoin(base_url, src)
        urls.append(full)
    return urls


def is_zamimg(url: str) -> bool:
    return "wow.zamimg.com" in url or "zamimg.com" in url


def icon_name_from_zamimg_url(url: str) -> str | None:
    """Ej: https://wow.zamimg.com/images/wow/icons/small/inv_misc_herb_felweed.jpg -> inv_misc_herb_felweed"""
    parsed = urlparse(url)
    name = Path(parsed.path).stem
    return name if name else None


def download(url: str, timeout: int = 15) -> bytes:
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    r = requests.get(url, headers=headers, timeout=timeout)
    r.raise_for_status()
    return r.content


def main() -> None:
    parse_materials_ts()

    MATERIALS_DIR.mkdir(parents=True, exist_ok=True)
    ICONS_DIR.mkdir(parents=True, exist_ok=True)

    urls: list[str] = []

    if len(sys.argv) > 1:
        arg = sys.argv[1].strip()

        # ¿Es una URL de página?
        if arg.startswith("http://") or arg.startswith("https://"):
            print(f"Obteniendo página: {arg}")
            try:
                html = fetch_page(arg)
                urls = extract_urls_from_html_content(html, arg)
                # Solo Zamimg para iconos; sin duplicados por icon name
                seen = set()
                unique = []
                for u in urls:
                    if not is_zamimg(u):
                        continue
                    name = icon_name_from_zamimg_url(u)
                    if name and name not in seen:
                        seen.add(name)
                        unique.append(u)
                urls = unique
                print(f"Encontradas {len(urls)} imágenes Zamimg en la página. Descargando...")
            except requests.RequestException as e:
                print(f"Error al obtener la página: {e}")
                sys.exit(1)
        else:
            inp = Path(arg)
            if not inp.is_absolute():
                inp = ROOT / inp
            if not inp.exists():
                print(f"Archivo no encontrado: {inp}")
                sys.exit(1)
            if inp.suffix.lower() == ".html":
                urls = extract_urls_from_html(inp)
            else:
                urls = extract_urls_from_txt(inp)
            # Solo Zamimg para iconos; sin duplicados por icon name
            seen = set()
            unique = []
            for u in urls:
                if not is_zamimg(u):
                    continue
                name = icon_name_from_zamimg_url(u)
                if name and name not in seen:
                    seen.add(name)
                    unique.append(u)
            urls = unique
            print(f"Descargando {len(urls)} iconos Zamimg desde {inp.name}")
    else:
        # Modo: solo materiales (generar URLs desde MATERIALS_TS)
        seen_icons = set()
        for icon, keys in ICON_TO_MATERIAL_KEYS.items():
            if icon not in seen_icons:
                seen_icons.add(icon)
                urls.append(f"{ZAMIMG_BASE}/{icon}.jpg")
        print(f"Descargando {len(urls)} iconos de materiales (desde alchemy-tbc-materials.ts)")

    ok = 0
    fail = 0
    for i, url in enumerate(urls):
        if not is_zamimg(url):
            continue
        icon_name = icon_name_from_zamimg_url(url)
        if not icon_name:
            fail += 1
            continue
        try:
            data = download(url)
            keys = ICON_TO_MATERIAL_KEYS.get(icon_name)
            if keys:
                for k in keys:
                    out = MATERIALS_DIR / f"{k}.jpg"
                    out.write_bytes(data)
                    print(f"[{i+1}/{len(urls)}] {k}.jpg")
                ok += 1
            else:
                out = ICONS_DIR / f"{icon_name}.jpg"
                out.write_bytes(data)
                print(f"[{i+1}/{len(urls)}] icons/{icon_name}.jpg")
                ok += 1
        except Exception as e:
            print(f"[{i+1}/{len(urls)}] ERROR {icon_name}: {e}")
            fail += 1

    print(f"\nHecho: {ok} OK, {fail} fallos.")
    print(f"Materiales: {MATERIALS_DIR}")
    print(f"Iconos extra: {ICONS_DIR}")


if __name__ == "__main__":
    main()
