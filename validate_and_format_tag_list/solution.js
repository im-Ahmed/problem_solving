function formatTags(tagsString) {
  // 1. Split by various delimiters and clean up.
  // The regex /\s*[, \n]\s*/ handles any combination of spaces, commas, or newlines.
  const tagsArray = tagsString
    .split(/[, \n]+/)
    .map((tag) => tag.trim()) // 2. Clean up whitespace
    .filter((tag) => tag !== ""); // Filter out empty strings from consecutive delimiters

  // 3. Validate, format, and remove duplicates in one pass
  const validTags = new Set();
  const validTagRegex = /^[a-zA-Z0-9_-]+$/;

  for (const tag of tagsArray) {
    const formattedTag = tag.toLowerCase();

    if (
      formattedTag.length >= 2 &&
      formattedTag.length <= 20 &&
      validTagRegex.test(formattedTag)
    ) {
      validTags.add(formattedTag);
    }
  }

  return Array.from(validTags);
}
console.log(
  formatTags(
    " JavaScript, WebDev, node.js,  React, react,  , API,  short, a-very-long-tag-that-is-too-long-for-this "
  )
);
