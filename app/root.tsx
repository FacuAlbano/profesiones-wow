import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import * as React from "react";
import "./app.css";
import { AppLayout } from "~/components/app-layout";
import { FactionProvider } from "~/lib/faction-context";
import type { Faction } from "~/lib/theme";

export const links = () => [
  /* public/favicon.ico se sirve en la raíz como /favicon.ico */
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
  },
];

const DEFAULT_TITLE = "Profesiones WoW - Guías en español | eldonqu";
const DEFAULT_DESCRIPTION =
  "Guías de profesiones de World of Warcraft en español. The War Within y más expansiones.";

export function meta() {
  return [
    { title: DEFAULT_TITLE },
    { name: "description", content: DEFAULT_DESCRIPTION },
  ];
}

export async function loader({ request }: { request: Request }) {
  const cookieHeader = request.headers.get("Cookie");
  const factionCookie = cookieHeader
    ?.split(";")
    .find((c) => c.trim().startsWith("faction="))
    ?.split("=")[1]
    ?.trim();
  const faction: Faction =
    factionCookie === "horde" ? "horde" : "alliance";
  return { faction };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var c=document.cookie.match(/faction=([^;]+)/);var f=c?c[1]:'alliance';document.documentElement.classList.add(f==='horde'?'horde':'alliance');})();`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { faction } = useLoaderData<typeof loader>();

  React.useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.remove("alliance", "horde");
    html.classList.add(faction);
  }, [faction]);

  return (
    <FactionProvider initialFaction={faction}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </FactionProvider>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "¡Ups!";
  let details = "Ocurrió un error inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "La página solicitada no se encontró."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-primary">{message}</h1>
      <p className="mt-2 text-muted-foreground">{details}</p>
      {stack && (
        <pre className="mt-6 w-full max-w-2xl overflow-x-auto rounded-lg border border-border bg-card p-4 text-xs text-card-foreground">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
