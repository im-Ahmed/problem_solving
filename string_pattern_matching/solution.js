const isMatch = (text, pattern) => {
  let i = 0,
    j = 0;
  let starIndex = -1,
    matchIndex = -1;

  while (i < text.length) {
    if (j < pattern.length && (pattern[j] === text[i] || pattern[j] === "?")) {
      i++;
      j++;
    } else if (j < pattern.length && pattern[j] === "*") {
      starIndex = j;
      matchIndex = i;
      j++;
    } else if (starIndex !== -1) {
      j = starIndex + 1;
      matchIndex++;
      i = matchIndex;
    } else {
      return false;
    }
  }

  // skip trailing '*' in pattern
  while (j < pattern.length && pattern[j] === "*") {
    j++;
  }

  return j === pattern.length;
};

// Examples
console.log(isMatch("dog", "d?g")); // true
console.log(isMatch("apple", "a*e")); // true
console.log(isMatch("apple", "a*p")); // false
console.log(isMatch("cat", "c?*")); // true
console.log(isMatch("banana", "b*na")); // true
console.log(isMatch("hello", "h?l*o")); // true
