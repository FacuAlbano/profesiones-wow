import type { ProfessionSlug } from "~/lib/constants";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { ShoppingItem, SubidaRange } from "~/lib/alchemy-midnight-route";

/** Tope de las profesiones de Khaz Algar salvo Pesca. */
export const TWW_PROFESSION_CAP = 100;

/** Tope de Pesca en The War Within. */
export const TWW_FISHING_CAP = 300;

export type TwwNativeId = Extract<NativeGuideId, `${string}-tww`>;

export type TwwSubidaStep = {
  title?: string;
  text: string;
};

export type TwwSubidaRange = SubidaRange & {
  intro?: string;
  steps: TwwSubidaStep[];
};

export type TwwShoppingItem = ShoppingItem & {
  vendorKey?: string;
};

export type TwwSubidaSpec = {
  slug: ProfessionSlug;
  nativeId: TwwNativeId;
  title: string;
  intro: readonly string[];
  trainerKey: string;
  vendorKey?: string;
  extraNpcs?: readonly { key: string; role: string }[];
  trainerNote: string;
  tomtom: string;
  tomtomNote: string;
  shoppingNote: string;
  shopping: readonly TwwShoppingItem[];
  ranges: readonly TwwSubidaRange[];
  racials: string;
  pairing: { slug: ProfessionSlug; name: string };
};
