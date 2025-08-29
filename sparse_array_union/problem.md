# Sparse Array Union

## Problem Statement

You are given two sorted arrays, `arrA` and `arrB`, which contain objects. Each object has an `id` and a `value` property. These arrays are **sparse**, meaning they contain only a small number of unique IDs from a much larger potential set.

Your task is to **merge these two arrays** into a single, new sorted array.

### Rules:

1. If an `id` exists in both `arrA` and `arrB`, the object from **`arrB`** should overwrite the one from **`arrA`** in the final merged array.
2. The final array must be sorted in ascending order by `id`.
3. The solution should be efficient and avoid nested loops.

---

## Input

- **arrA**: An array of objects, sorted by `id`.
- **arrB**: An array of objects, sorted by `id`.

Each object has the structure:

```js
{
  id: number,
  value: number
}
```

---

## Output

- A new single array of objects, sorted by id, representing the merged data.

## Example

### Input

```javascript
const arrA = [
  { id: 1, value: 10 },
  { id: 3, value: 30 },
  { id: 5, value: 50 },
];
const arrB = [
  { id: 2, value: 20 },
  { id: 3, value: 35 },
  { id: 4, value: 40 },
];
```

---

## Expected Output

```javascript
[
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 35 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];
```

---
