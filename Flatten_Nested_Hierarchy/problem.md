# 📝 Problem: Flatten and Normalize a Nested Hierarchy

You are tasked with creating a function **`flattenHierarchy`** that transforms a deeply nested array of objects into a single, flat array.  
Each object represents a node in a hierarchy and **must** contain:

- **`id`** (number)
- **`name`** (string)

Some objects may also have a **`children`** property containing more objects of the same structure. This nesting can go as deep as possible — there is no fixed depth.

---

## 🎯 Goal

Write **`flattenHierarchy`** so that:

1. It returns a **flat array** containing **all objects** from the hierarchy.
2. The returned objects **must not** include the `children` property.
3. The original input array remains **unmodified**.
4. Every object from **any nesting level** appears exactly once in the output.

---

## 📌 Example

**Input:**
```javascript
const hierarchy = [
  {
    id: 1,
    name: 'Parent A',
    children: [
      { id: 2, name: 'Child A1' },
      { id: 3, name: 'Child A2', children: [{ id: 4, name: 'Grandchild A2-1' }] },
    ],
  },
  { id: 5, name: 'Parent B' },
];
```

**Expected Output:**
```javascript
[
  { id: 1, name: 'Parent A' },
  { id: 2, name: 'Child A1' },
  { id: 3, name: 'Child A2' },
  { id: 4, name: 'Grandchild A2-1' },
  { id: 5, name: 'Parent B' },
]
```

---

## ⛓ Constraints

- Nesting depth is **unknown** (could be any level).
- `children` property **may not exist** on all objects.
- Original input array must **not** be altered.
- Must work for **any valid hierarchy** structure.

---

## 💡 Hints

- This is a **classic recursive problem**.
- For each node:
  - Add the current object (without its `children`) to the result.
  - If `children` exists, recursively flatten it and append those results.
- Think carefully about how to **remove `children`** without modifying the original object.

---

## 🚀 Key Idea

> Visit each node → store its `id` & `name` → if it has `children`, go deeper → combine results into one flat array.

