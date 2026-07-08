export interface ChangelogEntry {
  date: string;
  title: string;
  tag?: "New" | "Improved";
  items: string[];
}

// Newest first. Dates are illustrative — edit freely as you ship.
export const changelog: ChangelogEntry[] = [
  {
    date: "8 July 2026",
    title: "Production, guided setup & finer permissions",
    tag: "New",
    items: [
      "New Production module: request raw materials, have whoever manages raw-material stock approve them (adjusting the quantity if needed), then record a production run that turns those materials into finished-product stock — with a trail of exactly what was used.",
      "Finer permissions: give each teammate exactly the actions they need — view, create, edit, print, download, import, export, approve requests and more — and build your own custom roles.",
      "Guided setup for new businesses: tell iTrova what you'll use and how big you are, see the plan that fits, and start a 7-day free trial on the spot.",
    ],
  },
  {
    date: "4 July 2026",
    title: "Export invoices, an internal store & a smoother phone experience",
    tag: "New",
    items: [
      "Export Invoices: raise international commercial invoices and download them as PDF or Word.",
      "General Store: track items your staff borrow or take internally, with checkouts, returns and overdue reminders.",
      "On phones, forms now open full-screen and scroll on their own so the keyboard never hides what you're typing, and long tab bars scroll instead of pushing the page sideways.",
      "Point of Sale marks products already in your cart with an 'Added' badge.",
    ],
  },
  {
    date: "30 June 2026",
    title: "Work offline, deposits & smoother invites",
    tag: "New",
    items: [
      "Point of Sale keeps working with no internet — sales save on the device and sync when you're back, with a Needs review list for anything that needs a second look.",
      "Invoices work offline too: view, print, create and take deposits, all from the device.",
      "Take part-payments on an invoice with Record payment — it's marked Paid automatically once the balance is cleared.",
      "iTrova prepares your data for offline use in the background after you sign in.",
      "Out-of-stock products are now hidden from the sales screen.",
      "Clearer team invites — a confirmation when you join and guidance if a link was already used — and removing a teammate now revokes their access immediately.",
    ],
  },
];
