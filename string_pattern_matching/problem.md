# 🌐 String Pattern Matching with Wildcards

## Problem
Implement a function `isMatch(text, pattern)` that checks if a given `text` string matches a `pattern` string containing wildcard characters.

The pattern can include:
- `?` → Matches **any single character**
- `*` → Matches **any sequence of zero or more characters**

The function should return `true` if the `text` matches the `pattern`, and `false` otherwise.

---

## Input
- **text**: A non-empty string of lowercase English letters.
- **pattern**: A non-empty string containing lowercase English letters, `?`, and `*`.

## Output
- **boolean**: `true` if the `text` matches the `pattern`, otherwise `false`.

---

## Constraints
- `1 ≤ length of text ≤ 1000`
- `1 ≤ length of pattern ≤ 1000`

---

## Examples (JavaScript)

```js
isMatch("dog", "d?g");      // true
isMatch("apple", "a*e");    // true
isMatch("apple", "a*p");    // false
isMatch("cat", "c?*");      // true
isMatch("banana", "b*na");  // true
isMatch("banana", "b*na*"); // true
isMatch("hello", "h?l*o");  // true
```
---
## Approach
You can solve this using Dynamic Programming or Two Pointers with Greedy matching:

- Treat `?` as a direct match for any one character.

- Treat `*` as matching zero or more characters.

- Use a DP table or pointer strategy to efficiently compare text and pattern.