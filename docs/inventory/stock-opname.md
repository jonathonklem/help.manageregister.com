---
sidebar_position: 2
---

# Stock Opname

The Stock Opname module is used to manage stock count records within the system. This resource provides an interface to create, view, edit, and filter stock opname (inventory count) records.

---

## 🧾 What is a Stock Opname?

A stock opname is a snapshot of your inventory at a given time. It helps verify the actual physical stock against the recorded data. Each opname includes:

- A person in charge (PIC)
- A date
- A list of counted items
- A current status (Pending, Reviewing, Approved)

---

## ✅ Features

### 📋 Create & Edit Stock Opname

To create a new stock opname:

- **PIC**: Automatically filled with your name.
- **Date**: Defaults to today; can be changed as needed.

> Both fields are required.

---

### 📊 Table View

The table lists all stock opname entries with the following columns:

| Column           | Description                                 |
|------------------|---------------------------------------------|
| **Number**       | Unique identifier (searchable)              |
| **Item Amounts** | Total counted items                         |
| **Date**         | Date of opname                              |
| **Approved At**  | Timestamp of approval (adjusted to timezone)|
| **Status**       | Current status with badge colors:<br/>Gray = Pending<br/>Yellow = Reviewing<br/>Green = Approved |

---

### 🔍 Filters

#### 1. **Status Filter**
Filter entries by status: Pending, Reviewing, or Approved.

#### 2. **Date Range Filter**
Filter by a custom date range. Dates will automatically adjust to your local timezone for accuracy.  

---

### 👁️ View Details (Infolist)

When viewing an individual stock opname, the following info is displayed:

- **Status**: With colored badge  
- **PIC**: Person who created the opname  
- **Date**: Of the stock opname  

---

### 🔄 Actions

- **View**: See the full details of an entry  
- **Edit**: Modify a stock opname (if permitted)  
- **Create**: Add a new stock opname  
- **Filter**: Narrow down results using filters  

---

## ✅ How to Finalize a Stock Opname

Use this guide to complete and finalize a stock opname. A stock opname is a way to record the actual number of products you have on hand and compare it to the system’s current stock levels.

---

### 🛠 Steps to Record Items

1. **Click “New Stock Opname Item”**  
   Add an item to your current stock opname.

2. **Select the Product**  
   Once selected, the system will show the current stock for that product on the right.

3. **Choose the Adjustment Type**  
   Select from options like **Lost**, **Broken**, **Expired**, or **Manual Input**.  
   This helps track why there’s a difference between expected and actual stock.

4. **Enter the Actual Stock On Hand**  
   Type in how many units you actually counted during inventory.

5. **Click “Create”**  
   The item will be added to the stock opname list.

---

### ✏️ Editing Items

- After an item is added, you can still **edit the reason** and **update the actual stock value** if needed.
- You can also upload a **photo or attachment** for documentation.

---

### 🔄 Changing the Status

- If you're done entering values but want someone else to review, change the status to **Reviewing**.
- When everything is confirmed and accurate, change the status to **Approved**.

---

### ✅ What Happens When You Approve

- Once a stock opname is set to **Approved**, the system will:
  - **Lock the items** from further edits  
  - **Adjust the actual inventory levels** based on the values you entered  
  - Save a record of this adjustment in the system (visible in inventory history)

---

Need help reviewing or finalizing an opname? Contact your manager or system admin for assistance.
