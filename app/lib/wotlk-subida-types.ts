import type { ProfessionSlug } from "~/lib/constants";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { ShoppingItem, SubidaRange } from "~/lib/alchemy-midnight-route";

/** Tope de las profesiones en Wrath of the Lich King. */
export const WOTLK_PROFESSION_CAP = 450;

export type WotlkNativeId = Extract<NativeGuideId, `${string}-wotlk`>;

export type WotlkSubidaStep = {
  title?: string;
  text: string;
};

export type WotlkSubidaRange = SubidaRange & {
  intro?: string;
  steps: WotlkSubidaStep[];
};

export type WotlkShoppingItem = ShoppingItem & {
  vendorKey?: string;
};

export type WotlkSubidaSpec = {
  slug: ProfessionSlug;
  nativeId: WotlkNativeId;
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
  shopping: readonly WotlkShoppingItem[];
  ranges: readonly WotlkSubidaRange[];
  racials: string;
  pairing: { slug: ProfessionSlug; name: string };
};
