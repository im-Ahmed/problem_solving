# 🏪 Problem: Inventory Price Management

You are tasked with creating a **simple inventory management system** for a small store.  
You are given an **array of product objects**, where each object has the following properties:  
- `name` (string) 🏷️  
- `price` (number) 💲  
- `quantity` (number) 📦  

Your goal is to implement a function **`calculateInventoryValue(products)`** that returns a **single number** — the total value of all items in the inventory.  
The total value is calculated by summing up **`price × quantity`** for each product.

---

## 📌 Example

**Input:**

```javascript
[
{ name: 'Laptop', price: 1200, quantity: 5 },
{ name: 'Mouse', price: 25, quantity: 50 },
{ name: 'Keyboard', price: 75, quantity: 20 },
{ name: 'Monitor', price: 300, quantity: 10 }
]
```
**Output:**

```javascript
(1200 × 5) = 6000
(25 × 50) = 1250
(75 × 20) = 1500
(300 × 10) = 3000
Total = 6000 + 1250 + 1500 + 3000 = `11750`
```


---

## ⚙️ Constraints
- 📏 The input will always be a **non-empty array** of objects.
- 🔢 `price` and `quantity` will be **numbers** (positive or zero).
- 🏷️ `name` will always be a **string**.
- 💻 Solution should be efficient and clean.

---

## 💡 Hint
Use **iteration** or **array methods** like `.reduce()` to calculate the total in a single pass. 😉
