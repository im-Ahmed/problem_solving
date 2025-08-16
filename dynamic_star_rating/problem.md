# ⭐ Problem: Dynamic Star Rating Generator

In many **web applications** (like e-commerce sites, review platforms, and booking apps), a **star rating system** is used to visually represent ratings for products or services.  
Your task is to build a **JavaScript function** that dynamically generates a star rating string based on a **numeric score**.

---

## 📝 Problem Statement

Write a function **`generateStarRating(rating)`** that:

- Accepts a **number** rating between `0` and `5`.
- Returns a **string of 5 characters** representing the rating using:
  - **Full star (★)** → Represents a whole number.
  - **Half star (½)** → Represents a `.5`.
  - **Empty star (☆)** → Fills the remaining slots.

---

## 📋 Requirements

1. The function should **round the rating to the nearest half-star**:

   - `3.2` → `3.0`
   - `3.3` → `3.5`
   - `3.8` → `4.0`
   - `3.74` → `3.5`

2. The result should **always return exactly 5 characters**.

---

## 📥 Input / 📤 Output

- **Input:** A number rating (e.g., `3.7`)
- **Output:** A string representation of the star rating

---

## ✅ Examples

```javascript
generateStarRating(3.2);
// Output: "★★★☆☆"

generateStarRating(4.8);
// Output: "★★★★★"

generateStarRating(2.5);
// Output: "★★½☆☆"

generateStarRating(1.9);
// Output: "★★☆☆☆"
```

---

## ⚙️ Constraints

- The input will always be a number between 0 and 5.
- Output must always be 5 characters long.
- Only use the following symbols:

- ### ★ (Full star)

- ### ½ (Half star)

- ### ☆ (Empty star)

---

## 💡 Hint

1. **Round the rating to the nearest half**  
   Use the formula:  
   ```javascript
   const roundedRating = Math.round(rating * 2) / 2;
2. Build the star string step by step:

- Add full stars (★) for the integer part of the rating.

-  Add a half star (½) if the rating includes .5.

- Fill the remaining slots (until 5 stars) with empty stars (☆).
