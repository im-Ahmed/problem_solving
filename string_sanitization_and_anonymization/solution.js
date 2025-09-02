function sanitizeAndAnonymize(text) {
  // Step 1: Sanitize and convert to lowercase in one go
  // The regex [^a-z0-9] matches any character that is NOT a lowercase letter or digit.
  // The 'gi' flags make it a global (g) and case-insensitive (i) search.
  const sanitizedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Anonymize the word "secret"
  // The regex "secret" matches the literal word "secret".
  // The 'g' flag makes it global, replacing all occurrences.
  // The 'i' flag makes it case-insensitive, so "SECRET", "Secret", etc., are all matched.
  // The replace method handles the replacement with asterisks.
  return sanitizedText.replace(/secret/gi, "******");
}
const text = "Hello! My email is mysecret@example.com.";
console.log(sanitizeAndAnonymize(text))
