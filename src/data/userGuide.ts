import type { LucideIcon } from "lucide-react";
import { Rocket, LayoutDashboard, Package, ShoppingCart, FileText, Truck, Boxes, ClipboardList, BarChart3, Users, Settings, WifiOff, Ship, Factory, Warehouse } from "lucide-react";

import login from "@/assets/guide/01-getting-started-login.png";
import signup from "@/assets/guide/01-getting-started-signup.png";
import dashboard from "@/assets/guide/02-dashboard.png";
import dashboardMobile from "@/assets/guide/02-dashboard-mobile.png";
import inventory from "@/assets/guide/03-inventory.png";
import inventoryAdd from "@/assets/guide/03-inventory-add-product.png";
import pos from "@/assets/guide/04-pos.png";
import posCart from "@/assets/guide/04-pos-cart.png";
import posMobile from "@/assets/guide/04-pos-mobile.png";
import invoices from "@/assets/guide/05-invoices.png";
import suppliersImg from "@/assets/guide/06-suppliers.png";
import suppliersAdd from "@/assets/guide/06-suppliers-add.png";
import rawMaterialsImg from "@/assets/guide/07-raw-materials.png";
import rawMaterialsDeliveries from "@/assets/guide/07-raw-materials-deliveries.png";
import purchaseOrdersImg from "@/assets/guide/08-purchase-orders.png";
import purchaseOrdersNew from "@/assets/guide/08-purchase-orders-new.png";
import reportsImg from "@/assets/guide/09-reports.png";
import teamImg from "@/assets/guide/10-team.png";
import teamInvite from "@/assets/guide/10-team-invite.png";
import settingsImg from "@/assets/guide/11-settings.png";
import offlinePos from "@/assets/guide/12-offline-pos.png";
import offlineInvoices from "@/assets/guide/12-offline-invoices.png";
import rawMaterialsRequests from "@/assets/guide/07-raw-materials-requests.png";
import productionRequests from "@/assets/guide/13-production-requests.png";
import productionRuns from "@/assets/guide/13-production-runs.png";
import permissionsImg from "@/assets/guide/14-permissions.png";
import generalStoreImg from "@/assets/guide/15-general-store.png";
import generalStoreRecords from "@/assets/guide/15-general-store-records.png";
import exportInvoicesImg from "@/assets/guide/16-export-invoices.png";

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
      { text: "Tap a product to add it to the cart, or scan / type a SKU and press Enter.", note: "Out-of-stock products are hidden from the sales screen, so you can only sell what's actually in stock." },
      { text: "Adjust quantities, add a discount if needed, and pick the payment method — Cash, Transfer or POS Terminal." },
      { text: "Serving someone else mid-sale? Tap Hold sale to park the cart, then bring it back later from Held sales.", note: "Held sales are saved on the device, so they survive a page refresh." },
      { text: "Tap Complete sale — stock is reduced and a paid receipt is created automatically." },
      { text: "Print the receipt for your customer — it's formatted for thermal receipt printers." },
      { text: "Owners and managers can open End of Day for a summary of the day's takings." },
    ],
    shots: [
      { src: pos, alt: "Point of Sale screen", caption: "The sales screen" },
      { src: posCart, alt: "POS cart with items", caption: "Cart, discount & payment" },
      { src: posMobile, alt: "Point of Sale on a phone", caption: "On your phone", device: "mobile" },
    ],
    tip: "Use Clear all to empty a busy cart in one tap (it asks first), without touching your held sales.",
  },
  {
    id: "invoices",
    title: "Invoices & receipts",
    icon: FileText,
    summary: "Find any sale, print receipts, take deposits, and manage invoice status.",
    roles: ALL_ROLES,
    steps: [
      { text: "Open Invoices to see every receipt and customer invoice. Sales made at the till appear here tagged POS." },
      { text: "Filter by status, creator or date, or search by number or customer name." },
      { text: "Use the eye to view, the printer to print a receipt, or download a PDF — available to everyone, including cashiers." },
      { text: "Owners and managers can create invoices, change the status (for example mark one Paid) and void mistakes." },
      { text: "Taking payment in instalments? Use Record payment on a manual invoice to log a deposit, then keep adding payments as they come in.", note: "When the running total reaches the invoice amount, it's marked Paid automatically. Part-paid invoices show as Partial, with the balance left to pay." },
    ],
    shots: [
      { src: invoices, alt: "iTrova invoices list", caption: "All your invoices" },
    ],
    tip: "Voiding an invoice puts the items back in stock and reverses the revenue, so your reports stay correct.",
  },
  {
    id: "export-invoices",
    title: "Export invoices",
    icon: Ship,
    summary: "Raise international commercial invoices and download them as PDF or Word.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Export Invoice and click New export invoice." },
      { text: "Fill in the exporter and buyer details, shipping and bank information, then add each product line — size, units per box, boxes and unit price. Totals, cartons and the amount in words are worked out for you." },
      { text: "Save — iTrova assigns the next invoice number, and where a line is linked to a product it reduces that product's stock automatically." },
      { text: "From the list, View any invoice or download it as PDF or Word to send to your buyer." },
    ],
    shots: [
      { src: exportInvoicesImg, alt: "Export invoices list", caption: "Your export invoices" },
    ],
    tip: "Set your exporter profile — address, RC number, bank details — once in Settings, and every export invoice is pre-filled with it. Export invoices are a separate module; ask us to switch it on if you don't see it.",
  },
  {
    id: "working-offline",
    title: "Working offline",
    icon: WifiOff,
    summary: "Keep selling when the internet drops — sales and invoices save on the device and sync when you're back.",
    roles: ALL_ROLES,
    steps: [
      { text: "iTrova checks your connection in the background. If the internet drops, a banner appears and Point of Sale keeps working — other modules pause until you're back online." },
      { text: "Sell as normal: add to the cart, take payment and print the receipt. Each sale is saved on the device and counted under Pending sync.", note: "Stock shown offline is your last-synced count, as a guide — you can still complete a sale even if it dips below that." },
      { text: "Invoices work offline too: view, print and download saved invoices, create a new manual invoice, and record deposits — all from the device." },
      { text: "Back online, tap Sync now to upload everything that's queued. Anything the server can't accept (for example, stock ran out) is held in a Needs review list to sort out.", note: "You can't sign out while sales or invoices are still waiting to sync — connect, Sync now, then sign out." },
      { text: "After you sign in, iTrova quietly prepares your data for offline use (you'll see a slim progress bar), so each module works offline even before you open it." },
    ],
    shots: [
      { src: offlinePos, alt: "Point of Sale offline with a pending-sync badge", caption: "Selling while offline" },
      { src: offlineInvoices, alt: "Invoices saved on the device while offline", caption: "Invoices saved offline" },
    ],
    tip: "Offline mode needs no setup — it switches on by itself the moment your connection drops, and back off when it returns.",
  },
  {
    id: "suppliers",
    title: "Suppliers",
    icon: Truck,
    summary: "Keep a directory of who supplies your stock and materials.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Suppliers and click Add supplier." },
      { text: "Enter the business name, contact person, phone, email and address." },
      { text: "Save. You can rate suppliers and see how much you've spent with each one over time." },
      { text: "Export your supplier list to CSV whenever you need it." },
    ],
    shots: [
      { src: suppliersImg, alt: "Suppliers list", caption: "Your suppliers" },
      { src: suppliersAdd, alt: "Add supplier form", caption: "Adding a supplier" },
    ],
    tip: "Suppliers you add here become selectable when you create purchase orders and record raw-material deliveries.",
  },
  {
    id: "raw-materials",
    title: "Raw materials",
    icon: Boxes,
    summary: "Track production inputs and log deliveries as they arrive.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Raw Materials and click Add material — set the name, SKU, unit, stock, reorder level and cost per unit." },
      { text: "When a delivery arrives, use Record purchase on a material to add the quantity to stock and log the cost." },
      { text: "Switch to the Deliveries tab to see the full delivery history." },
      { text: "Materials at or below their reorder level are flagged as low, just like products." },
      { text: "If you use the Production module, the Requests tab is where you approve or reject the production team's material requests — you can reduce a requested quantity before issuing it, and the stock comes off here.", note: "Link a material to the products it goes into with Link to product in the ⋯ menu." },
    ],
    shots: [
      { src: rawMaterialsImg, alt: "Raw materials list", caption: "Materials" },
      { src: rawMaterialsDeliveries, alt: "Deliveries history", caption: "Deliveries history" },
      { src: rawMaterialsRequests, alt: "Material requests to approve", caption: "Approving material requests" },
    ],
    tip: "Recording a delivery (or receiving a purchase order) is what increases material stock, keeping your numbers reliable.",
  },
  {
    id: "production",
    title: "Production",
    icon: Factory,
    summary: "Request raw materials, get them approved, and turn them into finished-product stock.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "On the Production page, click Request materials and list the raw materials and quantities you need for a batch." },
      { text: "Whoever looks after raw-material stock reviews the request on Raw Materials → Requests and approves it — trimming a quantity first if needed. The materials come off stock there and then." },
      { text: "Back on Production, use Record production against an approved request: enter the products you made and how much of each material you actually used." },
      { text: "The finished products are added to your inventory, any unused materials go back to raw-material stock, and the request keeps a trail of exactly what was used." },
    ],
    shots: [
      { src: productionRequests, alt: "Production material requests", caption: "Material requests" },
      { src: productionRuns, alt: "Recorded production runs", caption: "Production runs" },
    ],
    tip: "Production is a separate module, and approving requests belongs to the person with your Raw Materials permissions — so a storekeeper can approve without touching anything else. Ask us to switch it on for your plan.",
  },
  {
    id: "purchase-orders",
    title: "Purchase orders",
    icon: ClipboardList,
    summary: "Order stock and materials from suppliers, then receive them into inventory.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Purchase Orders and click New PO." },
      { text: "Pick a supplier, set the expected date, and add line items — choose a product or raw material, or type a custom item." },
      { text: "Create the PO. You can send it to your supplier and track its status." },
      { text: "When the goods arrive, change the status to Received — this adds the quantities to your stock automatically." },
    ],
    shots: [
      { src: purchaseOrdersImg, alt: "Purchase orders list", caption: "Your purchase orders" },
      { src: purchaseOrdersNew, alt: "New purchase order form", caption: "Creating a purchase order" },
    ],
    tip: "Marking a PO Received is final and updates stock, so you'll be asked to confirm before it's locked.",
  },
  {
    id: "general-store",
    title: "General store",
    icon: Warehouse,
    summary: "Track tools and supplies your staff borrow or take internally.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Add what you keep in your store on the Items tab — mark each as Borrowable (comes back) or Consumable (used up)." },
      { text: "Add the people who take items on the Staff tab." },
      { text: "Use Lend or Give to hand an item to a member of staff, with a due date for anything borrowed." },
      { text: "Record returns as items come back. The Records tab shows the full history and flags anything overdue." },
    ],
    shots: [
      { src: generalStoreImg, alt: "General store items", caption: "Store items" },
      { src: generalStoreRecords, alt: "General store checkout and return records", caption: "Checkout & return records" },
    ],
    tip: "The bell alerts owners and managers when a borrowed item is overdue or a store item runs low. General store is a separate module — ask us to switch it on.",
  },
  {
    id: "reports",
    title: "Reports",
    icon: BarChart3,
    summary: "See revenue, profit, best-sellers and stock health for any period.",
    roles: ["Owner", "Manager"],
    steps: [
      { text: "Open Reports and pick a date range (it defaults to the last 30 days)." },
      { text: "Review the headline metrics — revenue, gross profit, units sold and supplier spend — each with the change vs the previous period." },
      { text: "Dig into the revenue trend, top products, sales by staff, supplier spend and inventory turnover." },
      { text: "Click Export PDF to download a shareable report." },
    ],
    shots: [{ src: reportsImg, alt: "Reports dashboard", caption: "The reports dashboard" }],
    tip: "Gross profit uses each product's cost price, so keep cost prices up to date in Inventory for accurate margins.",
  },
  {
    id: "team",
    title: "Team & roles",
    icon: Users,
    summary: "Invite staff and control what each person can do.",
    roles: ["Owner"],
    steps: [
      { text: "Open Team (owners only) and click Invite teammate." },
      { text: "Enter their email and choose a role — Manager or Cashier — then send the invite." },
      { text: "They open the link, set a password and join with their own login. When they accept, they land on a confirmation that they've joined; pending invites show until then.", note: "If a link has already been used or has expired, the person is told clearly and pointed to sign in or reset their password instead of hitting a dead end." },
      { text: "You can change a member's role or remove them at any time.", note: "Removing someone takes effect immediately — they lose access to the business straight away." },
      { text: "For finer control, open Settings → Permissions & Access: switch individual actions on or off for each person — who can print, download, import, export, approve requests and more — or create your own custom roles.", note: "People only see the sections and buttons they're allowed to use, so the app stays simple for each role." },
    ],
    shots: [
      { src: teamImg, alt: "Team members", caption: "Your team" },
      { src: teamInvite, alt: "Invite teammate form", caption: "Inviting a teammate" },
      { src: permissionsImg, alt: "Permissions & Access settings", caption: "Roles & per-person permissions" },
    ],
    tip: "Each login belongs to one business. If you invite someone who already uses iTrova for another business, they'll join with a different email.",
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    summary: "Set up your business details, currency, notifications and plan.",
    roles: ALL_ROLES,
    steps: [
      { text: "Update your Business Profile — your business name and your own name." },
      { text: "Set your Currency & Region so money and dates display correctly everywhere in the app." },
      { text: "Choose your Notification Preferences for low-stock and overdue-invoice alerts." },
      { text: "Check your Subscription Plan to see what your current tier includes, and manage Account Security including your password." },
    ],
    shots: [{ src: settingsImg, alt: "Settings page", caption: "Settings" }],
    tip: "Currency and timezone flow through the whole app — receipts, reports and overdue calculations all follow what you set here.",
  },
];
