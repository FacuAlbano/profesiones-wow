import type { ProfessionSlug } from "~/lib/constants";
import type { NativeGuideId } from "~/lib/resolve-profession-guide";
import type { ShoppingItem, SubidaRange } from "~/lib/alchemy-midnight-route";

/** Tope de las profesiones en The Burning Crusade. */
export const TBC_PROFESSION_CAP = 375;

export type TbcCatalogId = Exclude<
  Extract<NativeGuideId, `${string}-tbc`>,
  "alchemy-tbc" | "herbalism-tbc"
>;

export type TbcSubidaStep = {
  title?: string;
  text: string;
};

export type TbcSubidaRange = SubidaRange & {
  intro?: string;
  steps: TbcSubidaStep[];
};

export type TbcShoppingItem = ShoppingItem & {
  vendorKey?: string;
};

export type TbcSubidaSpec = {
  slug: ProfessionSlug;
  nativeId: TbcCatalogId;
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
  shopping: readonly TbcShoppingItem[];
  ranges: readonly TbcSubidaRange[];
  racials: string;
  pairing: { slug: ProfessionSlug; name: string };
};
