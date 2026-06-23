import type { LucideIcon } from "lucide-react";
import { Store } from "lucide-react";

export interface DocsProduct {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
}

export const docsProducts: DocsProduct[] = [
  { slug: "itrova", title: "iTrova", icon: Store, tagline: "Inventory, POS & invoicing" },
];
