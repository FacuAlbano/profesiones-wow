# Guías del mirror en español

Para tener **la misma página de guías que wow-professions pero todo en español**, con los datos de la carpeta que pasaste:

## 1. Copiar el mirror a la app

Desde la raíz del proyecto:

```bash
npm run copy-guides-mirror
```

Por defecto copia desde `E:\Proyectos\Nueva carpeta\wow-professions-mirror` (o la ruta que indiques como argumento) a `public/guides-mirror`.

## 2. Traducir todo al español

```bash
npm install
npm run translate-guides
```

Esto traduce cada HTML del mirror al español y lo guarda en `public/guides-mirror-es`. La app mostrará automáticamente la versión en español cuando exista.

**Prueba con pocos archivos:** `LIMIT=10 npm run translate-guides`

## 3. Dónde ver las guías

- **Inicio** → **Índice de guías** (`/guia`): listado por secciones (expansiones, guías generales, farming, etc.).
- **Cualquier guía por URL:** `/guia/guides/bfa-tailoring/index.html`, `/guia/farming/herbs/index.html`, etc.
- **Por expansión y profesión:** Inicio → elegir expansión → elegir profesión (como hasta ahora).

Todas usan el mismo contenido del mirror; si existe `guides-mirror-es` se muestra en español.
