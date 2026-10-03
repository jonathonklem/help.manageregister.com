---
sidebar_position: 6
---

# Stale Inventory Report

The Stale Inventory Report flags products that haven't been physically counted (via Inventory Count) within a configurable time period. Use it to identify items that need a physical audit.

---

## Running the Report

1. Go to **Report > Stale Inventory**.
2. The report loads automatically with a default threshold of **60 days**.
3. Click the **Threshold** button to change the threshold (30, 60, 90, or 180 days).

---

## What You'll See

| Column | Description |
|--------|-------------|
| **Product Name** | The product that hasn't been counted. |
| **SKU** | The product's SKU. |
| **Category** | The product's category. |
| **Stock** | Current stock level on record. |
| **Last Counted** | When the product was last physically counted. Shows "Never" in red if the product has never been counted. |
| **Days Since Count** | How many days since the last count. |

Products that have **never been counted** appear at the top in red. Products counted but beyond the threshold appear in order of staleness (oldest first).

---

## Filters

- **Category**: Filter by product category to focus on specific sections of inventory.
- **Threshold**: Adjust the number of days to consider a product "stale."

---

## What's Excluded

- **Non-stock items** (services, fees, etc.) are not shown since they don't require physical counting.
- **Hidden products** (not displayed in POS) are excluded.

---

## Tips

- Run this report weekly or monthly to stay on top of inventory accuracy.
- After running an Inventory Count on flagged items, they will automatically drop off this report.
- Focus on high-value or high-turnover items first.
