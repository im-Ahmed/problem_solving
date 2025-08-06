# 🧩 Day 01 – Aggregation Properties

## 📘 Problem Statement

You are building a **report generation tool**. You have an **array of objects**, where each object represents a user's activity. The structure of these objects can be **inconsistent**, meaning some properties might be present in one object but not in another.

---

## 🎯 Your Task

Write a function called `aggregateProperties(data)` that takes this array of objects and returns a single object.

- This new object should have **keys for every unique property** found across all objects in the input array.
- The **value** for each key should be an **array containing all the values** for that property from the input objects.
- If a property is **missing** in an object, it should **not contribute** to the value array for that property.

---
## 📌 Constraints
The function should handle any number of unique properties.

The input array can be empty.

The order of values within the output arrays does not need to be preserved.
---

## 📥 Input

An array of objects. For example:

```js
const data = [
  { userId: 'u1', event: 'login', timestamp: 1678886400 },
  { userId: 'u2', event: 'logout', duration: 120 },
  { userId: 'u1', event: 'pageview', pageId: 'home' },
  { userId: 'u3', event: 'login', timestamp: 1678886500, region: 'us' }
];

---

## 📥 output

An array of objects. For example:


const data = [
  { userId: 'u1', event: 'login', timestamp: 1678886400 },
  { userId: 'u2', event: 'logout', duration: 120 },
  { userId: 'u1', event: 'pageview', pageId: 'home' },
  { userId: 'u3', event: 'login', timestamp: 1678886500, region: 'us' }
];






