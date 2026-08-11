# Scripts

## Descargar iconos de materiales (WoW)

Para que cada material muestre su **icono correcto** (sin repeticiones), primero asegura que `app/lib/alchemy-tbc-materials.ts` tenga el nombre de icono correcto por item. Luego descarga las imágenes.

1. **Opcional:** actualizar iconos desde Wowhead (cada material con su icono real):
   ```bash
   python scripts/fetch_wowhead_icons.py
   ```
2. Descargar las imágenes (con la URL de la página, un HTML, o solo materiales):

### Opción 1: Python (recomendado si tienes el HTML o lista de URLs)

Requisito: `pip install requests`

```bash
# Desde la raíz del proyecto
cd e:\Proyectos\profesiones-wow

# Pasar la URL de la página: el script la descarga, extrae las imágenes y baja las de Zamimg
python scripts/download_wow_icons.py "https://www.wow-professions.com/tbc/alchemy-leveling-guide-burning-crusade-classic"

# Usar el HTML que generaste con tu script de extracción (solo iconos Zamimg)
python scripts/download_wow_icons.py ruta/a/images_for_web.html

# O un .txt con una URL por línea
python scripts/download_wow_icons.py ruta/a/image_links.txt

# Solo descargar los iconos definidos en app/lib/alchemy-tbc-materials.ts
python scripts/download_wow_icons.py
```

Los iconos de la guía se guardan en `public/images/materials/{materialKey}.jpg`. El resto en `public/images/icons/`.

### Opción 2: Node (solo desde materiales.ts)

```bash
node scripts/download-material-icons.mjs
```

Descarga desde Zamimg usando los nombres de icono de `alchemy-tbc-materials.ts` y guarda en `public/images/materials/{key}.jpg`.
