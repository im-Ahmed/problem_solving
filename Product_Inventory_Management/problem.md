# 🧮 Problem: Product Inventory Management

## 📋 Description

You are tasked with building a function that manages a store's product inventory.  
Your function, `updateInventory`, will receive **two arrays**:

- `currentInventory`: The store's current items.
- `newInventory`: New stock to be added.

Each inventory is an array of items in the format:

```js
[quantity, itemName]
```

Your task is to **update the currentInventory** based on the newInventory using the following rules:

### ✅ Rules:
1. If an item in `newInventory` **already exists** in `currentInventory`,  
   ➕ **Add** the quantity to the existing item.
2. If an item in `newInventory` **does not exist** in `currentInventory`,  
   ➕ **Add the item** to `currentInventory`.
3. The final `currentInventory` should be **sorted alphabetically** by `itemName`.

---

## 🔢 Input

- `currentInventory`: `Array<[number, string]>`  
- `newInventory`: `Array<[number, string]>`

## 🎯 Output

- `updatedInventory`: `Array<[number, string]>`  
  Sorted alphabetically by item name.

---

## 💡 Example

### JavaScript

```js
const currentInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Microphone']
];

const updatedInv = updateInventory(currentInv, newInv);

// Expected Output:
[
  [88, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [3, 'Half-Eaten Apple'],
  [3, 'Hair Pin'],
  [12, 'Microphone']
]
```

---

## 🧠 Goal

Improve your real-world problem solving in JavaScript  
by building functions that simulate actual backend logic and data manipulation.

---

## 🛠️ Bonus

- Try solving it using **ES6+** features like `Map`, `forEach`, and `sort()`
- Refactor your code for **clean readability** and **efficient performance**
