---
sidebar_position: 4
---

# Stock Opname

Stock Opname is a physical inventory counting feature that lets you audit your actual stock levels against what the system has on record. Use it to identify and resolve discrepancies such as missing, damaged, expired, or surplus items.

---

## How Stock Opname Works

1. A staff member creates a new Stock Opname session.
2. Products are added to the session — either by scanning barcodes or selecting them manually.
3. For each product, the staff member enters the **actual stock** count (what's physically on the shelf).
4. The system compares the actual count to the **current stock** on record and calculates the **missing stock** (the difference).
5. Each item is assigned an **adjustment type** explaining the discrepancy.
6. Once all items are counted and reviewed, the opname is **approved**, and the system automatically adjusts inventory levels.

---

## Creating a Stock Opname

Go to **Inventory > Stock Opname** and click **Create**.

- **Number**: Auto-generated with the prefix "SO" followed by the date and a sequence number (e.g., `SO-20250505000001`).
- **PIC (Person In Charge)**: Automatically set to the logged-in user.
- **Date**: Defaults to the current date.

After creating the opname, you can begin adding items.

---

## Adding Items

There are two ways to add products to a Stock Opname:

### Barcode Scanner

From the **View** page of an opname, you can scan product barcodes directly. The system listens for barcode input and:

- If the product is **not yet in the opname**, it adds it with an actual stock of 1.
- If the product is **already in the opname**, it increments the actual stock by 1.

### Manual Entry

You can also add products manually by searching for them by name, barcode, or SKU.

For each item, you will see:

| Field | Description |
|-------|-------------|
| **Current Stock** | The stock level the system has on record (read-only). |
| **Actual Stock** | The physical count you enter. |
| **Missing Stock** | Automatically calculated: current stock minus actual stock (read-only). |
| **Adjustment Type** | The reason for the discrepancy (see below). |
| **Attachment** | Optional image upload as proof or documentation. |

---

## Adjustment Types

Each item in a Stock Opname is assigned an adjustment type:

| Type | Description |
|------|-------------|
| **Match** | Actual stock matches the system record. No adjustment needed. |
| **Lost** | Items are missing and unaccounted for. |
| **Broken** | Items are damaged and no longer sellable. |
| **Expired** | Items have passed their expiration date. |
| **Store Use** | Items were used internally by the store. |
| **Manual Input** | A manual correction for any other reason. |

---

## Status Workflow

Each Stock Opname goes through the following statuses:

| Status | Description |
|--------|-------------|
| **Pending** | Initial state. The opname has been created but counting has not begun or is in early stages. |
| **Reviewing** | Counting is in progress or under review before final approval. |
| **Approved** | The opname has been finalized and stock levels have been adjusted. |

Once an opname is **approved**, it is locked — items can no longer be edited or added.

---

## Stock Adjustments on Approval

When a Stock Opname is approved, the system automatically adjusts inventory:

- **If items are missing** (missing stock > 0): The product's stock is reduced by the difference.
- **If surplus items are found** (missing stock < 0): A new stock entry is created to add the extra items.

These adjustments happen for every item in the opname and are reflected immediately in product stock levels.

---

## Deleting a Stock Opname

If a Stock Opname is deleted, the system **reverses all stock adjustments** that were made when it was approved, restoring product stock to its prior levels.

Only the Person In Charge (the user who created the opname) can delete it.

---

## Permissions

Access to Stock Opname is controlled by the following permissions:

- **Create Stock Opname** — Create new opname sessions.
- **Read Stock Opname** — View opname records.
- **Update Stock Opname** — Edit opname details and items.
- **Delete Stock Opname** — Delete opname records.
- **Approve Stock Opname** — Approve and finalize an opname (triggers stock adjustments).

---

## Enabling Stock Opname

Stock Opname is a toggleable feature. To enable or disable it, go to **Settings > General Settings** and look for the **Stock Opname** feature toggle.

---

## Tips

- Perform stock opnames regularly to keep your inventory accurate.
- Use the barcode scanner for faster counting during physical audits.
- Always attach photos or documentation for significant discrepancies.
- Review the missing stock calculations before approving to catch any data entry errors.
- Only users with the **Approve** permission can finalize an opname, providing a layer of oversight.
