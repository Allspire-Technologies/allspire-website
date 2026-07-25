import type { LucideIcon } from "lucide-react";
import { Store } from "lucide-react";

// Products shown in the nav "Products" dropdown. Each links to its in-site product page.
export interface Product {
  slug: string;
  title: string;
  icon: LucideIcon;
  path: string;
  tagline: string;
}

export const products: Product[] = [
  { slug: "itrova", title: "iTrova", icon: Store, path: "/products", tagline: "Inventory, POS & invoicing" },
];
