# 📝 Problem: String Sanitization and Anonymization

## Challenge

You need to write a JavaScript function called **`sanitizeAndAnonymize`** that takes a single string `text` as input. The function should perform two tasks:

### 1. Sanitization

- Remove **all non-alphanumeric characters** from the string.
- A valid character is:
  - Uppercase letter (A-Z)
  - Lowercase letter (a-z)
  - Digit (0-9)
- All other characters (symbols, punctuation, spaces, etc.) should be stripped out.

### 2. Anonymization

- Replace all occurrences of the specific **sensitive word** `"secret"` with a series of **asterisks (`*`)** of the same length.
- The anonymization should be **case-insensitive**.
- The sanitized output should always be in **lowercase**.

---

## Input

- A string.  
  Example:

```text
"Hello! My email is mysecret@example.com."
```

---

## Output

- A single string that has been sanitized and anonymized, in lowercase.
  Example:

```text
"hellomyemailismy******@examplecom"
```

## Constraints

- The function must be pure (must not modify the original input string).

- The solution should be efficient enough to handle large strings.
