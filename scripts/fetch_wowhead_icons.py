#!/usr/bin/env python3
"""
Obtiene el nombre del icono correcto para cada material desde Wowhead (TBC item XML)
y actualiza app/lib/alchemy-tbc-materials.ts con los iconos únicos por item.

Uso: python scripts/fetch_wowhead_icons.py

Requisito: pip install requests
"""

import re
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parent.parent
MATERIALS_TS = ROOT / "app" / "lib" / "alchemy-tbc-materials.ts"
WOWHEAD_XML = "https://www.wowhead.com/tbc/item={}&xml=1"


def get_icon_for_item(item_id: int) -> str | None:
    """Obtiene el nombre del icono del item desde Wowhead XML."""
    url = WOWHEAD_XML.format(item_id)
    headers = {"User-Agent": "Mozilla/5.0 (compatible; profesiones-wow/1.0)"}
    try:
        r = requests.get(url, headers=headers, timeout=10)
        r.raise_for_status()
        # <icon displayId="0">inv_misc_herb_10</icon>
        m = re.search(r"<icon[^>]*>([^<]+)</icon>", r.text)
        if m:
            return m.group(1).strip().lower().replace("\\", "")
    except Exception:
        pass
    return None


def main() -> None:
    content = MATERIALS_TS.read_text(encoding="utf-8")
    # Encontrar cada material: key: { name: "...", itemId: N, icon: "..." }
    pattern = re.compile(
        r"(\w+):\s*\{\s*name:\s*\"([^\"]+)\",\s*itemId:\s*(\d+),\s*icon:\s*\"([^\"]+)\"",
        re.MULTILINE,
    )
    updates = []
    for m in pattern.finditer(content):
        key, item_id, old_icon = m.group(1), int(m.group(3)), m.group(4)
        new_icon = get_icon_for_item(item_id)
        if new_icon:
            updates.append((m.start(), m.end(), m.group(0), key, old_icon, new_icon))
        else:
            print(f"  (sin icono) {key} itemId={item_id}")
        time.sleep(0.35)
    if not updates:
        print("No se pudo obtener ningún icono de Wowhead (revisa conexión).")
        return
    new_content = content
    for start, end, old_block, key, old_icon, new_icon in reversed(updates):
        new_block = old_block.replace(f'icon: "{old_icon}"', f'icon: "{new_icon}"')
        new_content = new_content[:start] + new_block + new_content[end:]
        if new_icon != old_icon:
            print(f"  {key}: {old_icon} -> {new_icon}")
    MATERIALS_TS.write_text(new_content, encoding="utf-8")
    print(f"\nActualizados {len(updates)} iconos en {MATERIALS_TS.name}. Vuelve a ejecutar download_wow_icons.py para descargar las imágenes.")


if __name__ == "__main__":
    main()
