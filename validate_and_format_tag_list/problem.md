# 🏷️ Validate and Format a User-Generated Tag List

## Problem
Implement a function `formatTags(tagsString)` that processes a user-provided string of tags and returns a clean, validated, and unique list of tags.

The function should handle:
- Multiple delimiters: commas (`,`), spaces (` `), and newlines (`\n`).
- Removing extra whitespace.
- Filtering invalid tags.
- Formatting tags consistently in lowercase.
- Removing duplicates.

---

## Input
- **tagsString**: A single string containing user-entered tags separated by commas, spaces, or newlines.

## Output
- **array of strings**: A cleaned, lowercase, validated, and unique list of tags.

---

## Constraints
- Tag length must be between **2 and 20 characters**.
- Tags must only contain **letters, numbers, hyphens (`-`), or underscores (`_`)**.
- Empty or invalid tags should be discarded.
- Duplicates should be removed (case-insensitive).

---

## Examples (JavaScript)

```js
const input = " JavaScript, WebDev, node.js,  React, react,  , API,  short, a-very-long-tag-that-is-too-long-for-this ";

formatTags(input);
// Expected Output:
// [ 'javascript', 'webdev', 'node.js', 'react', 'api' ]
```
---
## Approach

You can solve this step by step:

- Split Input → Use a regex to split the string by commas, spaces, or newlines.

- Trim Whitespace → Remove leading and trailing spaces from each tag.

- Validate Tags → Ensure each tag is within the required length and only contains allowed characters.

- Normalize → Convert each valid tag to lowercase.

- Remove Duplicates → Use a Set or filtering logic to ensure uniqueness.