# 🌐 Problem: URL Parameter Parser

You are building a **utility function** for a web application: **`parseUrlParams(url)`**.  
Its job? **Extract** and **type-cast** the parameters from a URL's query string into a neat JavaScript object.

---

## 🛠 Function Parameters

- **`url`** _(string)_  
  The full URL from which you want to extract query parameters.  
  Example:  
  `"https://www.example.com/search?q=javascript%20tutorial&page=2&sort=true"`

---

## 📦 Return Value

- A **JavaScript object** containing parsed **key-value pairs** from the URL's query string.
- Values will be **type-cast** automatically:
  - `"true"` / `"false"` → **boolean**
  - Numeric strings (e.g., `"123"`) → **number**
  - Anything else → **string**
- If there’s **no query string** (`?` missing), it returns `{}`.

---

## 📌 Rules & Requirements

1. If the URL has **no query string**, return `{}`.
2. Parameters are **separated by** `&`.
3. Keys and values are **separated by** `=`.
4. Type-cast values according to:
   - `"true"` → `true`
   - `"false"` → `false`
   - `"123"` → `123` (number)
   - Otherwise → string
5. Handle **URL-encoded characters** (e.g., `%20` → space).

---

## 🖥 Example Usage

**Example 1**

**Input:**

```javascript
const url1 =
  "https://www.example.com/search?q=javascript%20tutorial&page=2&sort=true";
const params1 = parseUrlParams(url1);
```

**Expected Output:**

```javascript
{
q: "javascript tutorial",
page: 2,
sort: true
}
```
**Example 2**

**Input:**

```javascript
const url2 = "https://www.example.com/home";
const params2 = parseUrlParams(url2);
```

**Expected Output:**

```javascript
{}

```

---

## 💡 Hint
Think step-by-step:  
1. **Find** the query string.  
2. **Split** it by `&` into key-value pairs.  
3. **Separate** each key from its value using `=`.  
4. **Decode** the value to handle `%20` and other encoded characters.  
5. **Type-cast** values before adding them to the object. 😉
