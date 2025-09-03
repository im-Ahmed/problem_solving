function findLargestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0,
    end = 0;

  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // length = right - left - 1
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd-length palindrome
    const len2 = expandAroundCenter(i, i + 1); // Even-length palindrome
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
console.log(findLargestPalindrome("babad")); // "bab" or "aba"
console.log(findLargestPalindrome("cbbd")); // "bb"
console.log(findLargestPalindrome("a")); // "a"
console.log(findLargestPalindrome("ac")); // "a" or "c"
