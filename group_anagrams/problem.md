# 🔤 Problem: Group Anagrams

You need to write a function **`groupAnagrams`** that takes an **array of strings** (`strs`) as input and **groups the anagrams together**.  
The **order** of the groups and the **order** of the strings within each group **does not matter**.

---

## 📚 What is an Anagram?
An **Anagram** is a word or phrase formed by rearranging the letters of another word or phrase, **using all the original letters exactly once**.  
Example: `"listen"` → `"silent"`.

---

## 📌 Example

**Input:**
```javascript

["eat", "tea", "tan", "ate", "nat", "bat"]

```

**Expected Output:**
```javascript

[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

```


> Note: The order of the groups and the words inside each group may differ.

---

## ⚙️ Constraints
- 📏 The number of strings in `strs` will be **between 1 and 100**.
- 🔠 Each string contains only **lowercase English letters**.
- 📜 The length of each string will be **between 0 and 100**.

---

## 💡 Hint
Think about how you can create a **unique key** for each group of anagrams.  
A common trick: sort the characters in the string alphabetically — anagrams will have the **same sorted form**. 😉
