---
sidebar_position: 5
---

# Split Payment

Split Payment allows a customer to pay for a single transaction using multiple payment methods — for example, part cash and part credit card.

---

## How to Use Split Payment

1. Ring up items on the POS as usual.
2. Click **"Proceed to Payment"**.
3. In the payment modal, click the **"Split Payment"** button at the top of the form.
4. Select a **payment method** from the list (e.g., Cash, Credit Card, Check).
5. Enter the **amount** the customer wants to apply with that method.
6. Click **"Add Split"** to record that portion.
7. Repeat steps 4–6 for each additional payment method until the full balance is covered.
8. Once the total of all splits meets or exceeds the grand total, complete the sale.

---

## What You'll See

When split mode is active, the payment form displays:

- A list of each split payment added, showing the **payment method**, **amount**, and any applicable **credit card fee**
- A **"Paid so far"** total of all splits entered
- A **"Remaining"** balance still owed — displayed in green when fully covered or red when insufficient
- A **"Remove"** button on each split to delete it before finalizing

---

## Credit Card Fees

If your store has credit card fees enabled, the system automatically calculates the fee for each split that uses a debit/card payment method. The fee amount is shown alongside each split entry so the cashier and customer can see it before completing the sale.

---

## Change Calculation

When a split payment includes both cash and non-cash methods, change is calculated only from the **cash portion**. Non-cash splits (credit card, check, etc.) do not generate change.

For example, if a $50 sale is split into $30 credit card and $25 cash, the system recognizes that $20 of the total is covered by cash (the remaining amount after the $30 card payment). The customer receives $5 in change ($25 cash tendered minus $20 owed).

---

## Restrictions

- **Terminal payments must be processed last.** If one of the splits uses an NMI terminal device, add all other payment methods first and use the terminal payment as the final split.
- The **total of all splits must meet or exceed the sale amount** before the transaction can be completed.

---

## How Splits Are Recorded

Each split creates a separate payment record linked to the sale. The system tracks:

| Field | Description |
|-------|-------------|
| **Payment Method** | Which method was used for this portion |
| **Amount** | The dollar amount applied |
| **Credit Card Fee** | Any fee charged for this split |
| **Cashier** | The user who processed the sale |

The **largest split** is used as the primary payment method for the transaction record.

---

## Tips

- You can remove individual splits before completing the sale if the customer changes their mind
- If there is a remaining amount entered in the amount field when you finalize the payment, it is automatically added as the last split
- Split payment works with any combination of non-terminal payment methods — cash, credit card, check, etc.
