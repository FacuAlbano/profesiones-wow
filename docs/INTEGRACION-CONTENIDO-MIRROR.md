# Integración del contenido de wow-professions (en español MX)

Este documento describe cómo usar el mirror limpio de wow-professions para integrar todo el contenido en la página, en **español de México**, manteniendo los estilos y temas actuales del proyecto.

## 1. Limpiar el mirror (quitar elementos no deseados)

En la carpeta donde está el mirror (`e:\Proyectos\Nueva carpeta`):

```bash
pip install -r requirements.txt
python clean_mirror.py
```

Esto genera **wow-professions-mirror-cleaned** con las mismas páginas pero sin:

- Go Ad Free  
- Feedback  
- Contact  
- Privacy Policy  
- Disclaimer  

También se eliminan enlaces “send feedback” que apuntan a la página de contacto.

## 2. Estructura del mirror limpio (referencia)

| Carpeta / sección | Contenido aproximado |
|-------------------|------------------------|
| **index.html** | Página de inicio: expansiones, enlaces a guías |
| **tbc/** | Guías TBC Classic (Alquimia, Herrería, etc.) — ya tenemos Alquimia en React |
| **wotlk/** | Guías Wrath of the Lich King |
| **cataclysm/** | Guías Cataclysm Classic |
| **mop/** | Guías Mists of Pandaria Classic |
| **classic/** | Guías Classic Era / SoD |
| **midnight/** | Guías Midnight |
| **the-war-within/** | Guías The War Within |
| **guides/** | Guías por expansión/tema (Shadowlands, BfA, etc.) |
| **farming/** | Guías de farming por material/zona |
| **npc/** | Páginas de NPCs |
| **recommends/** | Recomendaciones (ej. Zygor) — opcional integrar o no |

El mirror está en **inglés**. Para la web final todo debe estar **traducido al español (MX)**.

## 3. Cómo integrar en profesiones-wow

El proyecto ya tiene:

- Rutas por expansión: `/expansion/the-burning-crusade`, etc.
- Rutas por profesión: `/expansion/the-burning-crusade/profesion/alchemy`
- **Una guía completa en español y en React:** Alquimia TBC (`app/components/guides/alchemy-tbc-guide.tsx`), con materiales, NPCs, índices y estilos propios.
- **Registro de guías del mirror:** `app/lib/guide-mirror-paths.ts` mapea (expansión, profesión) → ruta en el mirror (TBC, WotLK, Cataclysm, MoP, Classic, Midnight, The War Within). Para combinaciones sin guía React, la página de profesión muestra la guía del mirror en un iframe (`/guides-mirror/...`).
- **Script para copiar el mirror:** Ejecutar `npm run copy-guides-mirror` (o `node scripts/copy-guides-mirror.mjs "ruta\\al\\mirror"`) copia el mirror a `public/guides-mirror`. Por defecto usa `E:\Proyectos\Nueva carpeta\wow-professions-mirror-cleaned` si existe, si no el mirror sin limpiar. Después de copiar, todas las guías registradas en `guide-mirror-paths.ts` estarán disponibles en la app.

Opciones para el resto del contenido:

### Opción A: Guías en React (recomendado para guías principales)

- Crear componentes tipo `HerbalismTBCGuide.tsx`, `BlacksmithingTBCGuide.tsx`, etc.
- Usar la misma estructura que `alchemy-tbc-guide.tsx`: secciones, `WowheadItem`, `WowheadNpc`, `GuideIndex`, clases `guide-division`, etc.
- El contenido en español se puede sacar del mirror limpio (copiando y traduciendo) o de una futura pasada de traducción (script/MT + revisión).

### Opción B: Contenido estático traducido

- Traducir el HTML del mirror limpio (por ejemplo con un script que reemplace textos o use una API de traducción y luego se revise a mano).
- Servir ese HTML desde `public/` o desde una ruta que renderice HTML estático, usando el **mismo layout** del sitio (sidebar, header, tema) para que se vea integrado.

### Opción C: Híbrido

- Guías más usadas (TBC Alquimia, Herboristería, etc.) en React como ahora.
- Otras páginas (farming, guías antiguas, NPCs) como HTML estático traducido bajo el mismo layout.

## 4. Qué NO incluir (ya quitado por clean_mirror.py)

- Go Ad Free  
- Feedback  
- Contact  
- Privacy Policy  
- Disclaimer  

No hace falta volver a tocar estos en el contenido limpio; el script ya los elimina.

## 5. Orden sugerido para integrar

1. **TBC** (ya tienes Alquimia): añadir el resto de profesiones TBC en español (Herrería, Herboristería, etc.) como componentes React, usando el mirror limpio como referencia de texto y estructura.
2. **Otras expansiones**: WotLK, Cataclysm, MoP, etc., siguiendo el mismo patrón de rutas y componentes.
3. **Farming / NPCs**: cuando quieras, integrar como sección estática o como rutas con HTML traducido.

Si quieres, en el siguiente paso se puede definir un mapeo concreto **slug del mirror → ruta en profesiones-wow** (por ejemplo `tbc/alchemy-leveling-guide-burning-crusade-classic` → `/expansion/the-burning-crusade/profesion/alchemy`) y una lista de las siguientes guías a implementar en React.
