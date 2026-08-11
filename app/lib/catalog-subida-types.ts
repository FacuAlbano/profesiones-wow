import type { ExpansionSlug, ProfessionSlug } from "~/lib/constants";
import type { MaterialEntry, NpcEntry } from "~/lib/guide-types";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { ShoppingItem, SubidaRange } from "~/lib/alchemy-midnight-route";
import type { WowheadGame } from "~/lib/wowhead";

export type CatalogSubidaStep = {
  title?: string;
  text: string;
};

export type CatalogSubidaRange = SubidaRange & {
  intro?: string;
  steps: CatalogSubidaStep[];
};

export type CatalogShoppingItem = ShoppingItem & {
  vendorKey?: string;
};

export type CatalogSubidaSpec = {
  slug: ProfessionSlug;
  nativeId: NativeGuideId;
  title: string;
  intro: readonly string[];
  trainerHordeKey: string;
  trainerAllianceKey: string;
  vendorHordeKey?: string;
  vendorAllianceKey?: string;
  extraNpcs?: readonly { key: string; role: string }[];
  trainerNote: string;
  tomtom: string;
  tomtomNote: string;
  shoppingNote: string;
  shopping: readonly CatalogShoppingItem[];
  ranges: readonly CatalogSubidaRange[];
  racials: string;
  pairing: { slug: ProfessionSlug; name: string };
};

export type CatalogSubidaBundle = {
  spec: CatalogSubidaSpec;
  materials: Record<string, MaterialEntry>;
  npcs: Record<string, NpcEntry>;
  game: WowheadGame;
  expansionSlug: ExpansionSlug;
};
