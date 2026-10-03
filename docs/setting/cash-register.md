---
sidebar_position: 3
---

# Cash Register

The Cash Register settings let you create and manage the registers (terminals) used in your store. Each register can track its own sales, Z-Reports, and petty cash separately.

---

## Adding a Register

1. Go to **Setting > Cash Register**.
2. Click **"New Cash Register"**.
3. Fill in:
   - **Name**: A label for the register (e.g., "Front Counter", "Range Register").
   - **Description**: Optional notes about the register's purpose or location.
   - **POS Product Categories**: The categories this register shows on the POS. Leave empty to show all. Use this to give the front desk and the back office different product views.
   - **Roles That Can Use This Register**: Which roles can pick this register. Leave empty to allow every role. Owners can always use it.
4. Click **Save**.

---

## Workstations

Together, categories and roles turn a register into a workstation. For example:

| Register | POS Product Categories | Roles That Can Use It |
|----------|------------------------|-----------------------|
| Front Desk | Range time, memberships, rentals | Front Desk |
| Pro Shop | Firearms, ammunition, accessories | Manager, MORSS |

A Front Desk user's register picker then lists only the Front Desk register, so they only see front-desk products.

---

## Register List

The list shows:

| Column | Description |
|--------|-------------|
| **Name** | Register name |
| **Description** | Optional description |
| **Active** | Whether the register is currently in use |
| **Created at** | When the register was set up |

---

## Editing a Register

Click **Edit** to update a register's name, description, or active status.

---

## Tips

- Create a register for each physical terminal location.
- If a user's role changes and they can no longer use their current register, they're asked to pick one of their own.
- Deactivate registers that are no longer in use instead of deleting them — this preserves historical data.
- Make sure cashiers select the correct register when starting their shift for accurate Z-Report reconciliation.
