# Problem: Product of the Others

You are given an array of integers. Your task is to return a new array where each element at index `i` is the **product of all the numbers** in the original array **except the one at `i`**.

---

## Example

**Input:**
[1, 2, 3, 4]

**Output:**
[24, 12, 8, 6]

**Explanation:**
- For index `0`: `2 * 3 * 4 = 24`
- For index `1`: `1 * 3 * 4 = 12`
- For index `2`: `1 * 2 * 4 = 8`
- For index `3`: `1 * 2 * 3 = 6`

---

## Constraints
- ❌ **No division operator (`/`)** allowed.
- 📏 The input array will always contain **at least two integers**.
- 🔢 All numbers will be integers.
- ➕➖ Numbers may be **positive**, **negative**, or **zero**.
