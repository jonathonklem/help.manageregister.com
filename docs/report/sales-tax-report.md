---
sidebar_position: 1
---

# Sales Tax Report

The Sales Tax Report provides a detailed breakdown of all sales, taxes collected, and discounts applied during a selected time period. Use it to prepare for tax filings, reconcile with your Payment Type Report, and verify that the correct tax amounts are being applied to sales.

---

## Running the Report

1. Go to **Report > Sales Tax Report**.
2. Select the **start date** and **end date** for the period you want to report on.
3. Click **Generate**.
4. Optionally click **Print** to print the report, or **Download as PDF** to save a copy.

---

## What You'll See

### Product Detail Table

Each product sold during the period is listed with:

| Column | Description |
|--------|-------------|
| **Product Name** | The name of the product sold. |
| **Price** | The unit price charged. |
| **Quantity** | Total units sold during the period. |
| **Discount** | Per-item discounts applied to this product. |
| **Taxable Total** | Total sales amount subject to tax. |
| **Non Taxable Total** | Total sales amount not subject to tax (e.g., services, non-stock items). |
| **Sales Tax Collected** | The actual tax collected on this product's sales. |

If vouchers or manual transaction-level discounts were applied during the period, a **"Transaction Discounts"** row will appear showing the total amount of those discounts so that the detail rows add up to the footer totals.

### Footer Totals

The bottom row shows totals across all products for the period: total quantity, total sales, total discounts, total taxable amount, total non-taxable amount, and total tax collected.

### Summary by Category

Below the detail table, a **Summary by Category** section groups all sales by product category (e.g., Ammunition, Gift Cards, Range Fees, etc.). For each category you'll see:

- **Quantity** sold
- **Sales** total
- **Discount** total

This makes it easy to see at a glance how much was sold in each category without reading the report line by line.

---

## Reconciling with the Payment Type Report

The Sales Tax Report and Payment Type Report should show matching totals for tax and discounts. Both reports pull from the same stored transaction data (the actual tax and discounts recorded at the time of each sale).

---

## Export Options

- **PDF**: Click **Download as PDF** to generate a printable PDF with the full report including the category summary.
- **CSV**: Append `&format=csv` to the report URL to download a spreadsheet-friendly CSV file, which also includes the category summary section.

---

## Tips

- Run this report at the end of each month or quarter to stay on top of tax obligations.
- Use the **Summary by Category** section to quickly identify gift card sales, service revenue, and other non-obvious line items.
- If tax amounts look incorrect, verify your tax rate under **Setting > General Setting**.
