# 📲 Social Media Tag & Mention Parser

## 🎯 Problem

You are tasked with building a feature for a **social media platform** that processes user-generated content.  
Your function should extract all **hashtags** and **mentions** from a given text, while also cleaning them out of the original content.

The function must be named **`parseSocialContent`**.

---

## 📝 Input

- A **string of text** that may contain:
  - **Hashtags** (e.g., `#coding`, `#javascript`)
  - **Mentions** (e.g., `@john_doe`, `@jane_smith`)

---

## 📦 Output

An **object** with the following properties:

- **`text`** → The input string with all hashtags and mentions removed.
- **`hashtags`** → An array of **unique hashtags**, lowercase, without the `#` symbol.
- **`mentions`** → An array of **unique mentions**, lowercase, without the `@` symbol.

---

## ✅ Constraints & Edge Cases

1. **Valid characters**:

   - Hashtags and mentions can contain **letters, numbers, and underscores (`_`)**.
   - They must **start with `#` or `@`** and cannot be empty.  
     (e.g., `_#invalid` or `@` should not count)

2. **Uniqueness**:

   - Each hashtag or mention should appear **only once** in the output.

3. **Case-insensitivity**:

   - Extracted hashtags and mentions should be stored in **lowercase**.  
     (e.g., `#JavaScript` and `#javascript` → `javascript`)

4. **Preserve original text**:
   - Other parts of the text must remain unchanged after removal.

---

## 💻 Example

### Input

```javascript
const text =
  "Check out my new project #WebDev #JavaScript @coder_guy! It's so cool. Let's connect @another_user and talk about #webdev.";

const parsedContent = parseSocialContent(text);
console.log(parsedContent);
```

---

## Output

```javascript
{
  "text": "Check out my new project  ! It's so cool. Let's connect  and talk about .",
  "hashtags": ["webdev", "javascript"],
  "mentions": ["coder_guy", "another_user"]
}
```

---
