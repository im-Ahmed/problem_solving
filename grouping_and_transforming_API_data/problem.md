# 🛒 Grouping and Transforming API Data

## 📌 Problem Statement

You are working with data from an API that returns a list of products. Each product is represented as an object containing a **category** and a **price**.

Your task is to write a function that processes this data to create a **summary object**. This summary should **group products by category** and, for each category, calculate:

- The **total price** of all products.
- The **count** of products.

---

## 🎯 The Challenge

Write a JavaScript function called `summarizeProducts` that takes an array of product objects and returns an object where:

- Each **key** is a product category.
- Each **value** is an object containing:
  - `totalPrice`: sum of prices in that category.
  - `count`: number of products in that category.

---

## 📝 Constraints

- Input will always be an **array of objects**.
- Each object has:
  - `category` (string)
  - `price` (number)
- Price will always be **non-negative**.
- If the array is **empty**, return `{}`.

---

## 💻 Example Input

```javascript
const products = [
  { category: "Electronics", price: 199.99 },
  { category: "Books", price: 12.5 },
  { category: "Electronics", price: 45.5 },
  { category: "Clothing", price: 25.0 },
  { category: "Books", price: 18.0 },
  { category: "Electronics", price: 75.0 },
];
```

---

## ✅ Expected Output

```javascript
{
  "Electronics": {
    "totalPrice": 320.49,
    "count": 3
  },
  "Books": {
    "totalPrice": 30.50,
    "count": 2
  },
  "Clothing": {
    "totalPrice": 25.00,
    "count": 1
  }
}
```

---
