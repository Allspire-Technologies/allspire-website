import type { LucideIcon } from "lucide-react";
import { Rocket, LayoutDashboard, Package, ShoppingCart, FileText } from "lucide-react";

import login from "@/assets/guide/01-getting-started-login.png";
import signup from "@/assets/guide/01-getting-started-signup.png";
import dashboard from "@/assets/guide/02-dashboard.png";
import dashboardMobile from "@/assets/guide/02-dashboard-mobile.png";
import inventory from "@/assets/guide/03-inventory.png";
import inventoryAdd from "@/assets/guide/03-inventory-add-product.png";
import pos from "@/assets/guide/04-pos.png";
import posCart from "@/assets/guide/04-pos-cart.png";
import posHeld from "@/assets/guide/04-pos-held-sales.png";
import posMobile from "@/assets/guide/04-pos-mobile.png";
import invoices from "@/assets/guide/05-invoices.png";

export type Role = "Owner" | "Manager" | "Cashier";
export const ALL_ROLES: Role[] = ["Owner", "Manager", "Cashier"];

export interface GuideShot {
  src: string;
  alt: string;
  caption?: string;
  device?: "desktop" | "mobile";
}

export interface GuideStep {
  text: string;
  note?: string;
}

export interface GuideSection {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  roles: Role[];
  steps: GuideStep[];
  shots: GuideShot[];
  tip?: string;
}

export const userGuide: GuideSection[] = [
  {
    id: "getting-started",
    title: "Getting started",
    icon: Rocket,
    summary: "Create your account, set up your business, and sign in.",
    roles: ["Owner"],
    steps: [
      { text: "Open your iTrova link and choose Create account. Enter your name, business name, email and a password." },
      { text: "Verify your email if prompted, then sign in with the same details." },
      { text: "Finish the quick setup — set your currency and timezone so sales, receipts and reports match your location." },
      { text: "You'll land on your Dashboard. That's it — you're ready to sell." },
    ],
    shots: [
      { src: login, alt: "iTrova sign-in screen", caption: "Sign in" },
      { src: signup, alt: "iTrova create-account screen", caption: "Create your account" },
    ],
    tip: "Staff don't sign up here. The owner invites them from the Team page, and they join with their own login.",
  },
  {
    id: "dashboard",
    title: "Your dashboard",
    icon: LayoutDashboard,
    summary: "A daily snapshot of sales, stock and alerts.",
    roles: ALL_ROLES,
    steps: [
      { text: "See Today's Sales and the number of transactions at a glance." },
      { text: "Products in Stock and Stock Alerts show what's running low or out." },
      { text: "The 7-day chart shows your recent sales trend; the bar chart shows stock levels." },
      { text: "Recent activity lists the latest stock and invoice changes, and who made them." },
    ],
    shots: [
      { src: dashboard, alt: "iTrova dashboard", caption: "Dashboard overview", device: "desktop" },
      { src: dashboardMobile, alt: "iTrova dashboard on a phone", caption: "On your phone", device: "mobile" },
    ],
    tip: "The bell in the top-right collects low-stock and overdue-invoice alerts so nothing slips by.",
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: Package,
    summary: "Add products, import in bulk, and keep stock accurate.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Inventory and click Add product." },
      { text: "Enter the name, category, a unique SKU/barcode (required), unit, selling price, cost price, opening stock and reorder level." },
      { text: "Save — the product is now sellable in Point of Sale." },
      { text: "To add many at once, use Import CSV (download the template first).", note: "Re-importing the same SKU adds to its stock and updates the details, instead of creating a duplicate." },
      { text: "Anything at or below its reorder level shows as Low stock; zero shows as Out of stock." },
    ],
    shots: [
      { src: inventory, alt: "iTrova inventory list", caption: "Your product list" },
      { src: inventoryAdd, alt: "Add product form", caption: "Adding a product" },
    ],
    tip: "Stock quantity can't be typed over once a product exists — it only changes through sales, purchase orders and CSV imports, so your numbers stay trustworthy.",
  },
  {
    id: "point-of-sale",
    title: "Point of Sale",
    icon: ShoppingCart,
    summary: "Ring up sales, hold carts, take payment and print receipts.",
    roles: ALL_ROLES,
    steps: [
      { text: "Tap a product to add it to the cart, or scan / type a SKU and press Enter." },
      { text: "Adjust quantities, add a discount if needed, and pick the payment method — Cash, Transfer or POS Terminal." },
      { text: "Serving someone else mid-sale? Tap Hold sale to park the cart, then bring it back later from Held sales.", note: "Held sales are saved on the device, so they survive a page refresh." },
      { text: "Tap Complete sale — stock is reduced and a paid receipt is created automatically." },
      { text: "Print the receipt for your customer — it's formatted for thermal receipt printers." },
      { text: "Owners and managers can open End of Day for a summary of the day's takings." },
    ],
    shots: [
      { src: pos, alt: "Point of Sale screen", caption: "The sales screen" },
      { src: posCart, alt: "POS cart with items", caption: "Cart, discount & payment" },
      { src: posHeld, alt: "Held sales list", caption: "Held sales" },
      { src: posMobile, alt: "Point of Sale on a phone", caption: "On your phone", device: "mobile" },
    ],
    tip: "Use Clear all to empty a busy cart in one tap (it asks first), without touching your held sales.",
  },
  {
    id: "invoices",
    title: "Invoices & receipts",
    icon: FileText,
    summary: "Find any sale, print receipts, and manage invoice status.",
    roles: ALL_ROLES,
    steps: [
      { text: "Open Invoices to see every receipt and customer invoice. Sales made at the till appear here tagged POS." },
      { text: "Filter by status, creator or date, or search by number or customer name." },
      { text: "Use the eye to view, the printer to print a receipt, or download a PDF — available to everyone, including cashiers." },
      { text: "Owners and managers can create invoices, change the status (for example mark one Paid) and void mistakes." },
    ],
    shots: [
      { src: invoices, alt: "iTrova invoices list", caption: "All your invoices" },
    ],
    tip: "Voiding an invoice puts the items back in stock and reverses the revenue, so your reports stay correct.",
  },
];
