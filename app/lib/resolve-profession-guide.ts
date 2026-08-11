import type { ExpansionSlug, ProfessionSlug } from "~/lib/constants";
import { guideMirrorUrl } from "~/lib/guide-mirror-paths";

export const GUIDE_TIPOS = [
  "subida-de-nivel",
  "recetas-y-conocimiento",
  "especializaciones",
  "farming",
] as const;

export type GuideTipo = (typeof GUIDE_TIPOS)[number];

export const GUIDE_TIPO_LABELS: Record<GuideTipo, string> = {
  "subida-de-nivel": "Subida de nivel",
  "recetas-y-conocimiento": "Recetas y conocimiento",
  especializaciones: "Especializaciones",
  farming: "Farming",
};

export function parseGuideTipo(slug?: string | null): GuideTipo | null {
  if (slug == null || slug === "") return "subida-de-nivel";
  return (GUIDE_TIPOS as readonly string[]).includes(slug) ? (slug as GuideTipo) : null;
}

export type ProfessionPageKind = "nativa" | "provisional" | "vacio";

export type NativeGuideId =
  | "alchemy-tbc"
  | "alchemy-midnight"
  | "herbalism-tbc"
  | "tailoring-shadowlands"
  | "blacksmithing-midnight"
  | "enchanting-midnight"
  | "engineering-midnight"
  | "leatherworking-midnight"
  | "tailoring-midnight"
  | "herbalism-midnight"
  | "mining-midnight"
  | "skinning-midnight"
  | "cooking-midnight"
  | "jewelcrafting-midnight"
  | "fishing-midnight"
  | "inscription-midnight";

export type ProfessionPageResolution = {
  kind: ProfessionPageKind;
  tipo: GuideTipo;
  path: string;
  nativeId?: NativeGuideId;
  mirrorUrl?: string;
  /** Ancla para el aviso de contenido provisional (la UI del aviso es #4). */
  aviso?: boolean;
};

const NATIVE_SUBIDA: Record<string, NativeGuideId> = {
  "the-burning-crusade:alchemy": "alchemy-tbc",
  "the-burning-crusade:herbalism": "herbalism-tbc",
  "shadowlands:tailoring": "tailoring-shadowlands",
  "midnight:alchemy": "alchemy-midnight",
  "midnight:blacksmithing": "blacksmithing-midnight",
  "midnight:enchanting": "enchanting-midnight",
  "midnight:engineering": "engineering-midnight",
  "midnight:leatherworking": "leatherworking-midnight",
  "midnight:tailoring": "tailoring-midnight",
  "midnight:herbalism": "herbalism-midnight",
  "midnight:mining": "mining-midnight",
  "midnight:skinning": "skinning-midnight",
  "midnight:cooking": "cooking-midnight",
  "midnight:jewelcrafting": "jewelcrafting-midnight",
  "midnight:fishing": "fishing-midnight",
  "midnight:inscription": "inscription-midnight",
};

function nativeKey(expansion: ExpansionSlug, profession: ProfessionSlug): string {
  return `${expansion}:${profession}`;
}

function canonicalPath(
  expansion: ExpansionSlug,
  profession: ProfessionSlug,
  tipo: GuideTipo,
): string {
  const base = `/expansion/${expansion}/profesion/${profession}`;
  return tipo === "subida-de-nivel" ? base : `${base}/${tipo}`;
}

export function resolveProfessionGuide(
  expansion: ExpansionSlug,
  profession: ProfessionSlug,
  tipo: GuideTipo = "subida-de-nivel",
): ProfessionPageResolution {
  const path = canonicalPath(expansion, profession, tipo);

  const nativeId = tipo === "subida-de-nivel" ? NATIVE_SUBIDA[nativeKey(expansion, profession)] : undefined;
  if (nativeId) {
    return { kind: "nativa", tipo, path, nativeId };
  }

  if (tipo === "subida-de-nivel") {
    const mirrorUrl = guideMirrorUrl(expansion, profession);
    if (mirrorUrl) {
      return { kind: "provisional", tipo, path, mirrorUrl, aviso: true };
    }
  }

  return { kind: "vacio", tipo, path };
}
