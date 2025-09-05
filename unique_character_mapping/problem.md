#  Unique Character Mapping  

## Problem Statement  
You need to implement a function **`uniqueCharacterMapping(str, arr)`** that maps each character in the input string to its corresponding **position (index)** in a given array of unique characters.  

- If a character from the string **does not exist** in the array, it should be mapped to **`-1`**.  
- The function should return a **new array of integers** representing this mapping.  

---

##  Function Signature  
```javascript
function uniqueCharacterMapping(str, arr) => number[]
```
---
## Input

- `str → ` A string (can contain any characters, including duplicates).

- `arr → ` An array of unique characters.

## Output

- An array of integers, where each integer represents the index of the corresponding character in arr.

- If a character is not present in arr, return -1 for that position.

## Example
### Input
```javascript
const str = "hello world";
const arr = ['w', 'o', 'r', 'l', 'd', 'h', 'e', 'l'];

// 'h' -> index 5
// 'e' -> index 6
// 'l' -> index 7
// 'o' -> index 1
// ' ' -> not in arr -> -1
// 'w' -> index 0
// and so on...
```
---

### Output
```javascript
[5, 6, 7, 7, 1, -1, 0, 1, 2, 7, 4]
```
---
## Constraints

- arr will contain only unique characters.

- str may contain characters that are not in arr.

- The solution should be efficient for large input strings.
