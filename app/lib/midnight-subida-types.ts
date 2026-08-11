import type { ProfessionSlug } from "~/lib/constants";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { ShoppingItem, SubidaRange } from "~/lib/alchemy-midnight-route";

export type MidnightSubidaStep = {
  title?: string;
  text: string;
};

export type MidnightSubidaRange = SubidaRange & {
  intro?: string;
  steps: MidnightSubidaStep[];
};

export type MidnightShoppingItem = ShoppingItem & {
  vendorKey?: string;
};

export type MidnightSubidaSpec = {
  slug: ProfessionSlug;
  nativeId: NativeGuideId;
  title: string;
  intro: readonly string[];
  trainerKey: string;
  vendorKey?: string;
  extraNpcs?: readonly { key: string; role: string }[];
  trainerNote: string;
  tomtom: string;
  tomtomNote: string;
  shoppingNote: string;
  shopping: readonly MidnightShoppingItem[];
  ranges: readonly MidnightSubidaRange[];
  racials: string;
  pairing: { slug: ProfessionSlug; name: string };
};
