# ✅ DataValidator

## Problem
Implement a function `DataValidator(profile)` that checks the validity of a user profile object.  
A profile is considered valid **only if it meets all the rules** below:

- **name**: Must be a string and not empty.
- **email**: Must be a string containing both an `@` symbol and a `.` (dot).
- **age**: Must be a number greater than or equal to 18.
- **hobbies**: Must be an array, and all elements must be strings. The array can be empty.
- **contact** (optional): If present, must be a string containing only numeric digits (e.g., `"1234567890"`).

If any required property is missing (except the optional one), the profile is invalid.  
The function should return a **boolean** (`true` if valid, `false` otherwise).

---

## Input
- **profile**: An object representing a user profile with properties:
  - `name` (string, required)
  - `email` (string, required)
  - `age` (number, required)
  - `hobbies` (array of strings, required)
  - `contact` (string, optional, numeric only)

---

## Output
- **boolean**: `true` if the profile is valid, otherwise `false`.

---

## Constraints
- `name`, `email`, `age`, `hobbies` are **mandatory**
- `contact` is **optional**
- `1 ≤ age ≤ 120` (realistic human age assumption)

---

## Examples (JavaScript)

```js
// ✅ Valid Profile
const validProfile = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  age: 25,
  hobbies: ["reading", "hiking"],
  contact: "1234567890",
};
DataValidator(validProfile); // true

// ❌ Invalid Profile (multiple issues)
const invalidProfile = {
  name: "",
  email: "johndoe.com",
  age: 17,
  hobbies: [123, "coding"],
};
DataValidator(invalidProfile); // false

// ✅ Valid Profile without contact (optional)
const noContactProfile = {
  name: "Sam Smith",
  email: "sam.smith@example.com",
  age: 30,
  hobbies: [],
};
DataValidator(noContactProfile); // true
