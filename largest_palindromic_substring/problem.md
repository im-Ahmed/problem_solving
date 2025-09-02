# Find Largest Palindromic Substring

## Problem Statement

Implement a JavaScript function **`findLargestPalindrome`** that takes a single string as input and returns the **longest palindromic substring** within it.

A **palindromic substring** is a sequence of characters that reads the same forward and backward.

- If multiple palindromic substrings of the same maximum length exist, return the **first one** found.
- If no palindrome (longer than a single character) exists, return an **empty string**.

---

## Function Signature

```javascript
function findLargestPalindrome(str) => string
```

---

## Output

- A string representing the longest palindromic substring.

- If no palindrome exists beyond single characters, return "".

## Example Test Cases

```javascript
Input: "babad"
Output: "bab"   (or "aba" is also valid, but "bab" comes first)

Input: "cbbd"
Output: "bb"

Input: "racecar"
Output: "racecar"

Input: "a"
Output: "a"

Input: "12345"
Output: ""
```

---
