export interface ChangelogEntry {
  date: string;
  title: string;
  tag?: "New" | "Improved";
  items: string[];
}

// Newest first. Dates are illustrative — edit freely as you ship.
export const changelog: ChangelogEntry[] = [
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
];
