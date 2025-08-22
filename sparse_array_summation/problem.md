# 🔍 Sparse Array Summation

## Problem
You are given two arrays of integers, **arr1** and **arr2**, representing sparse arrays.  
A sparse array is one where most of the elements are zero. The arrays are of the same length.  

Your task is to compute the **element-wise sum** of these two arrays and return the result as a new array.  

However, there's a catch:  
Due to the sparse nature of the arrays, you should **optimize your solution** to avoid iterating over every single element. Instead, process only the **non-zero elements** to achieve better performance.  

---

## Input
- **arr1**: An array of integers (e.g., `[0, 5, 0, 0, 12]`)  
- **arr2**: An array of integers (e.g., `[0, 0, 8, 0, -3]`)  

## Output
- A new array representing the element-wise sum (e.g., `[0, 5, 8, 0, 9]`)  

---

## Constraints
- Both arrays will have the same length.  
- The length of the arrays can be **very large**.  

---

## Example
```js
const arr1 = [0, 5, 0, 0, 12];
const arr2 = [0, 0, 8, 0, -3];

sparseArraySum(arr1, arr2);
// Output: [0, 5, 8, 0, 9]
