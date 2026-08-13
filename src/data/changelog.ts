export interface ChangelogEntry {
  date: string;
  title: string;
  tag?: "New" | "Improved";
  items: string[];
}

// Newest first, and only the latest THREE are kept — the guide's "What's new" is a taster of recent
// work, not an archive. The full history lives in the app repo's CHANGELOG.md. Drop the oldest
// entry when you add one.
export const changelog: ChangelogEntry[] = [
  {
    date: "13 August 2026",
    title: "Pay for your plan in the app",
    tag: "New",
    items: [
      "Upgrade or renew from Settings → Billing: pay by bank transfer or card and your plan activates itself, with no messaging back and forth. A transfer gets a one-off account number for the exact amount, so there's nothing to reconcile by hand.",
      "Billing history with a receipt for every payment — view it on screen or download it as a PDF.",
      "Renew early without losing days: renewing the same plan before it expires starts the new period when the current one ends. You can also move down to Free yourself, keeping the plan you paid for until the end of the period.",
      "Spend your referral credit on your own subscription: it comes off the price at checkout and you pay the difference — or nothing at all if it covers the whole plan. Whatever's left stays on your balance.",
      "Cleaner report PDFs, and cashiers can now download their own sales report.",
    ],
  },
  {
    date: "2 August 2026",
    title: "Draft invoices leave your stock alone",
    tag: "Improved",
    items: [
      "Save an invoice as a draft and finish it later.",
      "A draft no longer holds stock — items come off your shelves when you issue the invoice, not while you're still drafting it, and moving an issued invoice back to draft returns the stock.",
    ],
  },
  {
    date: "13 July 2026",
    title: "Split payments & payment methods everywhere",
    tag: "New",
    items: [
      "Split a sale across payment methods at the till — part cash, part transfer — with a live Remaining check that keeps the amounts adding up to the total.",
      "See how every sale was paid: the payment method now shows on receipts and on the invoice view, print and PDF, including split payments.",
      "New Payment methods breakdown on Reports and the Dashboard — a donut chart showing how much came in by Cash, Transfer and POS Terminal.",
    ],
  },
  {
    date: "11 July 2026",
    title: "Accounting, expenditure & payroll, and fixed assets",
    tag: "New",
    items: [
      "New Accounting module: proper double-entry books — Profit & Loss, Balance Sheet, Cash Flow, Journal and Trial Balance — that build themselves from your sales, invoices, payments, expenses, payroll, purchases and depreciation, so the statements always tie.",
      "New Expenditure module with Payroll: record what you spend and track bills to pay, run staff pay runs with deductions and payslips, and see it all flow into your reports and books.",
      "New Assets module: keep a register of your equipment and fixed assets, and depreciate them into your accounts with one click.",
      "Automatic product costing from production, VAT handling across sales and purchases, landed costs on deliveries, and a cleaner date picker with one consistent date format everywhere.",
    ],
  },
];
