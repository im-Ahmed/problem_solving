# 📈 Problem: Find the Contiguous Subarray with the Largest Sum

You are given an **array of integers**, which may include both **positive** and **negative** numbers.  
Your goal is to find the **contiguous subarray** (a sequence of elements next to each other) that has the **largest sum**, and return that sum.

---

## 🛠 Function Parameters
- **`nums`** *(array of integers)*  
  The input array containing integers (positive, negative, or zero).  
  Example: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

---

## 📦 Return Value
- A **single integer** representing the largest sum possible from any contiguous subarray.

---

## 📌 Example 1
**Input:**

```javascript
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

**Expected Output:**

```javascript
The contiguous subarray `[4, -1, 2, 1]` has the largest sum:  
`4 + (-1) + 2 + 1 = 6`

```
## 📌 Example 2
**Input:**

```javascript
nums = [1]
```

**Expected Output:**

```javascript
1

```
## 📌 Example 3
**Input:**

```javascript
nums = [5, 4, -1, 7, 8]
```

**Expected Output:**

```javascript
23

```
**Explanation:**  
The contiguous subarray `[5, 4, -1, 7, 8]` has the largest sum:  
`5 + 4 + (-1) + 7 + 8 = 23`

---

## ⚙️ Constraints
- 📏 The array `nums` will contain **at least one number**.
- 🔢 Elements can be **positive**, **negative**, or **zero**.

---

## 💡 Hint
This is a classic **Kadane’s Algorithm** problem:  
- Keep track of the **current sum** while iterating.  
- Reset the current sum to the current element if it drops below that element.  
- Keep track of the **maximum sum found so far**. 😉
