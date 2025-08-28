# 🏦 Problem: Find Duplicate Transactions

You are working on a **financial application**. A common requirement is to identify and group transactions that are **likely duplicates**.

A transaction is considered a **duplicate** of another if it has the **same**:

- `sourceAccount`
- `targetAccount`
- `amount`

---

## ✨ Task

Write a **JavaScript function** `findDuplicateTransactions(transactions)` that:

- Takes an array of transaction objects.
- Returns an array of arrays, where each inner array contains transactions that are duplicates of each other.
- Does **not modify** the original transactions array.

---

## 📝 Input

An array of objects, where each object represents a transaction with the following properties:

- `id` (string)
- `sourceAccount` (string)
- `targetAccount` (string)
- `amount` (number)
- `category` (string)
- `time` (string, ISO format)

---

## 📦 Output

- An **array of arrays**.
- Each inner array contains **2 or more duplicate transaction objects**.
- If a transaction has **no duplicates**, it should **not** be included.
- The order of arrays or transactions inside them **does not matter**.

---

## ⚡ Constraints & Edge Cases

- Duplicate check is based **only** on `sourceAccount`, `targetAccount`, and `amount`.
- `id`, `category`, and `time` may differ between duplicates.
- If no duplicates exist, return an empty array `[]`.

---

## ✅ Example

### Input:

```javascript
const transactions = [
  {
    id: "1",
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "food",
    time: "2023-01-01T10:00:00Z",
  },
  {
    id: "2",
    sourceAccount: "C",
    targetAccount: "D",
    amount: 250,
    category: "utility",
    time: "2023-01-02T11:00:00Z",
  },
  {
    id: "3",
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "food",
    time: "2023-01-01T10:05:00Z",
  },
  {
    id: "4",
    sourceAccount: "E",
    targetAccount: "F",
    amount: 50,
    category: "misc",
    time: "2023-01-03T12:00:00Z",
  },
  {
    id: "5",
    sourceAccount: "C",
    targetAccount: "D",
    amount: 250,
    category: "utility",
    time: "2023-01-02T11:15:00Z",
  },
  {
    id: "6",
    sourceAccount: "G",
    targetAccount: "H",
    amount: 300,
    category: "salary",
    time: "2023-01-04T13:00:00Z",
  },
];
```

---

## Output

```javascript
[
  [
    {
      id: "1",
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "food",
      time: "2023-01-01T10:00:00Z",
    },
    {
      id: "3",
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "food",
      time: "2023-01-01T10:05:00Z",
    },
  ],
  [
    {
      id: "2",
      sourceAccount: "C",
      targetAccount: "D",
      amount: 250,
      category: "utility",
      time: "2023-01-02T11:00:00Z",
    },
    {
      id: "5",
      sourceAccount: "C",
      targetAccount: "D",
      amount: 250,
      category: "utility",
      time: "2023-01-02T11:15:00Z",
    },
  ],
];
```

---
