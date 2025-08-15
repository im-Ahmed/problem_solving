# 🌐 Problem: Dynamic API Endpoint Creator

You are building a **utility for a web framework** that automatically generates API endpoint URLs.  
The function **`createApiEndpoints`** takes a **base URL** and an **array of resource names** and returns an **object** with RESTful API methods for each resource.

This pattern is common in **SDK** and **API client library** development to promote **code reuse** and **consistency**.

---

## 🛠 Function Parameters

- **`baseURL`** _(string)_  
  The base URL for the API.  
  Example: `"https://api.example.com/v1"`  
  **Note:** No trailing slash at the end.

- **`resources`** _(array of strings)_  
  A list of resource names for which API endpoints should be generated.  
  Example: `["users", "products", "orders"]`

---

## 📦 Return Value

An **object** where each **key** is a resource name, and each **value** is an object containing the following methods:

- **`get()`** → URL for fetching all items.  
  Example: `/users`

- **`getById(id)`** → URL for fetching a single item by ID.  
  Example: `/users/123`

- **`create()`** → URL for creating a new item (same as `get()`).

- **`update(id)`** → URL for updating an existing item by ID.

- **`delete(id)`** → URL for deleting an existing item by ID.

Each method returns the **full API endpoint URL as a string**.

---

## 📌 Example Usage

**Input:**

```javascript
const apiBase = "https://api.example.com/v1";
const resourceList = ["users", "products"];

const api = createApiEndpoints(apiBase, resourceList);

console.log(api.users.get());
// Expected: "https://api.example.com/v1/users"

console.log(api.users.getById(123));
// Expected: "https://api.example.com/v1/users/123"

console.log(api.products.update(456));
// Expected: "https://api.example.com/v1/products/456"
```

**Expected Output:**

```javascript
{
  users: {
    get: [Function],
    getById: [Function],
    create: [Function],
    update: [Function],
    delete: [Function]
  },
  products: {
    get: [Function],
    getById: [Function],
    create: [Function],
    update: [Function],
    delete: [Function]
  }
}


```

---

## ⚙️ Constraints

- 📋 The resources array will not be empty.
- 🚫 The baseURL will not have a trailing slash.
- 🔢 The id passed to getById, update, and delete will always be a number or string.

---

## 💡 Hint

- Use dynamic object creation to generate endpoints for each resource.
- Template literals (${}) make it easy to construct URLs dynamically.
- DRY (Don't Repeat Yourself) — reuse logic for similar methods like get, create, and update. 😉
