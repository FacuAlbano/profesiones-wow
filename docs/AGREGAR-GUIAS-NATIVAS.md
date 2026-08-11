# Cómo agregar guías nativas (español, mismo estilo que Alquimia/Herboristería TBC)

Las guías nativas son componentes React con el contenido en español, mismo layout que la guía de Alquimia TBC: secciones con id para el índice, `WowheadItem`, `WowheadNpc`, cards y separadores.

## Pasos para una nueva guía (ej. Herrería TBC)

### 1. Datos de materiales e NPCs

- **Materiales:** Si la profesión usa ítems (hierbas, minerales, recetas, etc.), crea `app/lib/<profesion>-<expansion>-materials.ts` (o reutiliza uno existente como `alchemy-tbc-materials.ts`). Cada entrada tiene `name` (español MX), `itemId` (Wowhead), `icon` (nombre para Zamimg, ej. `inv_misc_flower_02`).
- **NPCs:** Crea `app/lib/<profesion>-<expansion>-npcs.ts` con instructores y vendedores: `name`, `npcId`, `location` opcional. Usa el tipo `NpcEntry` de `~/lib/guide-types`.

Puedes extraer IDs e iconos del HTML del mirror (enlaces `wowhead.com/tbc/item=...` y `npc=...`) y traducir los nombres al español (MX).

### 2. Componente de la guía

- Crea `app/components/guides/<profesion>-<expansion>-guide.tsx`.
- Exporta un array `INDEX` para el índice lateral, por ejemplo:  
  `export const HERBALISM_TBC_INDEX = [ { id: "instructores", label: "Instructores..." }, ... ]`
- Exporta el componente de la guía (ej. `HerbalismTBCGuide`).
- Estructura: secciones con `id` y `className="scroll-mt-24"`, títulos con `guide-division`, `<WowheadItem materialKey="..." />` y `<WowheadNpc npcKey="..." npcs={...} />`. Para guías que no sean Alquimia TBC, pasa `materials` o `npcs` a los componentes cuando uses un registro distinto (ej. `npcs={HERBALISM_TBC_NPCS}`).

### 3. Registrar la guía como nativa

- En el resolver (`resolveProfessionGuide`), registra la combinación expansión + profesión + tipo (hoy: Subida de nivel) con un `nativeId`.
- En el mapa de vistas nativas, asocia ese `nativeId` al componente, al índice y al resumen. La ruta no lleva un `if` por guía.

### 4. Contenido en español

- Títulos, párrafos y listas deben estar en español (MX).
- Nombres de ítems y NPCs: usar los mismos que en el cliente de WoW en español (puedes comprobar en es.wowhead.com).

## Orden sugerido para seguir convirtiendo

1. **TBC:** Herrería, Encantamiento, Ingeniería, Joyería, Peletería, Sastrería, Minería, Desuello, Cocina, Pesca, Pesca+Cocina (misma estructura: datos + componente + registro).
2. **Otras expansiones:** Repetir el patrón para WotLK, Cataclysm, MoP, etc.: datos por expansión/profesión y componente por guía.

Las guías que aún no tengan componente nativo siguen mostrando el iframe del mirror (inglés) o “Contenido en construcción” si no hay entrada en `GUIDE_MIRROR_PATHS`.
