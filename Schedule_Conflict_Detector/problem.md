# 📅 Problem: Schedule Conflict Detector

You are building a feature for a **calendar application**.  
Given a list of scheduled meetings, your task is to determine if **any two meetings overlap**.

A meeting is represented as an **object** with:

- **`start`** → Start time in **minutes** from a fixed point (e.g., midnight)
- **`end`** → End time in **minutes** from the same fixed point

---

## 🛠 Function Parameters

- **`meetings`** _(array of objects)_  
  An array where each object represents a meeting with:
  - `start` _(integer)_: Start time in minutes
  - `end` _(integer)_: End time in minutes

---

## 📦 Return Value

- **Boolean**
  - `true` → At least one **overlap** exists.
  - `false` → No overlaps.

---

## 📌 Example 1

**Input:**

```javascript
const meetings1 = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];
```

**Expected Output:**

```javascript
true;
```

**Explanation:**

The meeting `{start: 0, end: 30}` overlaps with both `{start: 5, end: 10}` and `{start: 15, end: 20}`.

---

## 📌 Example 2

**Input:**

```javascript
const meetings2 = [
  { start: 0, end: 10 },
  { start: 10, end: 20 },
  { start: 20, end: 30 },
];
```

**Expected Output:**

```javascript
false;
```

**Explanation:**

A meeting ending exactly when another begins is not considered an overlap

---

## 📌 Example 3

**Input:**

```javascript
const meetings3 = [
  { start: 5, end: 10 },
  { start: 15, end: 20 },
  { start: 25, end: 30 },
];
```

**Expected Output:**

```javascript
false;
```

**Explanation:**

No two meetings overlap in time.

---

## ⚙️ Constraints

- 📏 Each meeting’s start is less than its end.
- ⏳ Time is represented in minutes.
- 🗂 Meetings are not guaranteed to be sorted.

---

## 💡 Hint

- Sort meetings by their start time.
- If any meeting starts before the previous one ends, you have an overlap.😉
