# 📄 CSV to Nested JSON Converter

## Problem

You need to create a JavaScript function `csvToJson` that takes a multi-line **CSV string** as input and converts it into a **nested JSON object**.

### Nesting Rules:

1. The **first line** of the CSV will always be the **headers**.
2. Headers can contain a **dot (`.`)** to indicate a nested structure.
   - Example: `user.profile.name` → `{ "user": { "profile": { "name": "..." } } }`
3. If a header does **not** contain a dot, it should be a **top-level key** in the JSON object.
4. Each **subsequent line** of the CSV represents a **single object** in the output array.
5. The order of values corresponds to the order of headers.

---

## Input

- A **string in CSV format**.

### Example Input:

```javascript
const csvString = `
id,user.name,user.email,product.name,product.price
1,Alice,alice@example.com,Laptop,1200
2,Bob,bob@example.com,Mouse,25
3,Charlie,charlie@example.com,Keyboard,75
`;
```

---

## Output

- An array of JavaScript objects with proper nesting.

### Expectect Output

```JSON
[
  {
    "id": "1",
    "user": {
      "name": "Alice",
      "email": "alice@example.com"
    },
    "product": {
      "name": "Laptop",
      "price": "1200"
    }
  },
  {
    "id": "2",
    "user": {
      "name": "Bob",
      "email": "bob@example.com"
    },
    "product": {
      "name": "Mouse",
      "price": "25"
    }
  },
  {
    "id": "3",
    "user": {
      "name": "Charlie",
      "email": "charlie@example.com"
    },
    "product": {
      "name": "Keyboard",
      "price": "75"
    }
  }
]
```

---

## Constraints

- The CSV will always have at least one header row.

- Each row will have the same number of values as there are headers.

- Works with nested structures indicated by . in headers.
