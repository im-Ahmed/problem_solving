const uniqueCharacterMapping = (str, arr) => {
  const charMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    charMap.set(arr[i], i);
  }
  const result = [];
  for (const char of str) {
    result.push(charMap.has(char) ? charMap.get(char) : -1);
  }

  return result;
};
const str = "hello world";
const arr = ["w", "o", "r", "l", "d", "h", "e", "l"];
console.log(uniqueCharacterMapping(str, arr));
