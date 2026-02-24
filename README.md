# Profesiones WoW - Guías en español

App de guías de profesiones de World of Warcraft en español (inspirada en [wow-professions.com](https://www.wow-professions.com/the-war-within)), con diseño responsive (desktop y móvil) y solo Tailwind CSS.

## Stack

- **React Router v7** – Enrutado basado en archivos
- **TypeScript** – Tipado estático
- **Tailwind CSS v4** – Estilos utility-first
- **Vite** – Build y dev server

## Estructura

```
app/
├── components/     # Componentes reutilizables (futuro)
├── lib/
│   ├── constants.ts  # Expansiones, profesiones, etc.
│   └── utils.ts      # cn(), enlaces Wowhead
├── routes/        # Rutas file-based
│   ├── _index.tsx                          # /
│   ├── expansion.$slug.tsx                 # /expansion/:slug
│   └── expansion.$slug.profesion.$profSlug # /expansion/:slug/profesion/:profSlug
├── app.css
└── root.tsx
```

## Scripts

- `npm run dev` – Servidor de desarrollo
- `npm run build` – Build producción
- `npm run start` – Servir build
- `npm run typecheck` – Comprobar tipos

## Guías

Se irán añadiendo guías por expansión y profesión, con imágenes y enlaces a [Wowhead](https://www.wowhead.com/es). Helpers en `~/lib/utils.ts`: `wowheadItem`, `wowheadSpell`, `wowheadQuest`, `wowheadNpc`.

## Autor

eldonqu
