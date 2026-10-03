---
sidebar_position: 3
---

# Gift Cards (POS Workflow)

This guide explains how to sell and redeem gift cards from the POS system.

---

## Selling a Gift Card

1. **Add the Gift Card product to the cart**  
   In the POS screen, search for `Gift Card` and add it to the cart like any other product.

2. **Select the amount**  
   Change the quantity in the cart to match the the denomination purchased.

3. **Complete checkout normally**  
   Collect payment using the customer's preferred method (cash, card, etc). The system will treat it like any other product.

4. **Important: Create the actual gift card after checkout**  
   After the sale is complete:
   - Go to **Inventory > Gift Cards**
   - Click **Add New**
   - Enter:
     - **Gift Card Code** (you can scan a physical gift card that's not been programmed yet or click 'generate code' to the right for unique code)
     - **Amount** (match the amount they purchased)

This step is **required**. The checkout only records the sale — the actual usable gift card must be created manually.

---

## Redeeming a Gift Card

When a customer wants to use a gift card:

1. Add items to the cart as usual.
2. **Above the Subtotal section**, click `Apply Gift Card`.
3. Enter the **gift card code**.
4. The system will apply the available balance automatically.

- If the gift card covers the full amount, no additional payment is needed.
- If there's a remaining balance, collect the difference using another payment method.

---

## Deleting a Gift Card

To remove a gift card from the system:

1. Go to **Inventory > Gift Cards**.
2. Find the gift card you want to delete.
3. Click the **Delete** button.
4. Confirm the deletion when prompted.

> Deleting a gift card permanently removes it and any remaining balance. Make sure the card is no longer in use before deleting.

---

## ManageMemberships Sync

If your account is connected to ManageMemberships, gift card balances are automatically synced between both systems:

- **Creating a gift card** in ManageRegister sends the balance to ManageMemberships so the card can also be used on the membership side.
- **Redeeming a gift card** at the POS automatically updates the balance in ManageMemberships.

This sync happens in the background and does not slow down checkout. If ManageMemberships is temporarily unavailable, the sync will retry automatically. ManageMemberships is the source of truth for balances — if the two systems ever disagree, the ManageMemberships balance takes precedence.

You can check sync status on each gift card:
- **Last Synced**: When the balance was last confirmed with ManageMemberships.
- **Synced**: Whether the current balance matches ManageMemberships.

---

## Notes

- Gift cards **do not expire** unless you manually deactivate them.
- You can check gift card balances under **Inventory > Gift Cards**.
