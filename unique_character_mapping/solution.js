const uniqueCharacterMapping = (str, arr) => {
  const result = [];
  for (const s of str) {
    result.push(arr.indexOf(s));
  }
  return result;
};
const str = "hello world";
const arr = ["w", "o", "r", "l", "d", "h", "e","l"];
console.log(uniqueCharacterMapping(str, arr));
