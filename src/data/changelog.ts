export interface ChangelogEntry {
  date: string;
  title: string;
  tag?: "New" | "Improved";
  items: string[];
}

// Newest first. Dates are illustrative — edit freely as you ship.
export const changelog: ChangelogEntry[] = [
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
  {
    date: "23 June 2026",
    title: "Hold sales & receipt printing",
    tag: "New",
    items: [
      "Hold a sale to serve another customer, then pick it back up from Held sales — nothing is lost.",
      "Clear a busy cart in one tap, with a confirmation so it's never wiped by accident.",
      "Print paid-invoice receipts on thermal printers — available to every staff member, including cashiers.",
    ],
  },
  {
    date: "16 June 2026",
    title: "Smarter invoices & sign-in security",
    tag: "Improved",
    items: [
      "Sales at the till now create tracked invoices automatically, tagged POS.",
      "Voiding an invoice restocks the items and reverses the revenue, so reports stay correct.",
      "You're signed out automatically after a spell of inactivity — with a countdown so you can choose to stay.",
    ],
  },
  {
    date: "9 June 2026",
    title: "Inventory, purchasing & alerts",
    tag: "New",
    items: [
      "In-app notifications for low stock and overdue invoices, collected under the bell.",
      "Purchase orders can pull from both products and raw materials; marking one Received adds the stock.",
      "Low-stock items are highlighted in Point of Sale.",
      "SKUs are now required and unique — importing a CSV with an existing SKU tops up its stock instead of duplicating it.",
    ],
  },
];
