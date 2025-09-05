#  Endpoint Payload Validator  

## Problem Statement  
You need to implement a function **`validatePayload(payload, schema)`** that checks whether a given JSON `payload` conforms to a defined `schema`.  

The validation must ensure:  
1. **Structure Match** → The payload must have the **exact same keys** as the schema (no extra or missing keys).  
2. **Data Type Match** → Each value in the payload must match the **expected type** defined in the schema.  
3. **Nested Objects** → The validation must work **recursively** for nested objects.  

---

##  Function Signature  
```javascript
function validatePayload(payload, schema) => boolean
```
---
## Input

`payload` → JSON object received from the API.

`schema` → JSON object representing the required structure and data types.

## Output

`true` → if payload conforms to the schema.

`false` → if payload does not conform to the schema.

### Validation Rules

- Exact Keys → Payload must not have extra/missing keys.

- Correct Types → Types must match (string, number, boolean, object).

- Recursive Check → Nested objects must be validated.

## Examples
### Example 1: `Basic Validation`
```javascript
const payload1 = {
  id: 123,
  name: "Alice"
};

const schema1 = {
  id: "number",
  name: "string"
};

validatePayload(payload1, schema1); 
// ✅ true
```
---
### Example 2: `Invalid Type`
```javascript
const payload2 = {
  id: "123", // Wrong type
  name: "Bob"
};

const schema2 = {
  id: "number",
  name: "string"
};

validatePayload(payload2, schema2); 
// ❌ false
```
---
### Example 3: `Missing or Extra Keys`
```javascript
const payload3 = {
  id: 456
};

const schema3 = {
  id: "number",
  name: "string"
};

validatePayload(payload3, schema3); 
// ❌ false (missing "name")
```
---
### Example 4: `Nested Objects`
```javascript
const payload4 = {
  user: {
    id: 789,
    name: "Charlie"
  },
  status: "active"
};

const schema4 = {
  user: {
    id: "number",
    name: "string"
  },
  status: "string"
};

validatePayload(payload4, schema4); 
// ✅ true
```
---

## Constraints

- The schema defines only primitive data types (string, number, boolean) and nested objects.

- Arrays are not included in this version but could be extended.

- Payload size can be large → Implementation should handle recursion efficiently.