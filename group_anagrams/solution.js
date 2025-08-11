const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (strs) => {
  // create a map
  const map = new Map();
  for (const str of strs) {
    // normalise element in sorted form
    const key = str.toLowerCase().split("").sort().join();
    if (map.has(key)) {
      // if map has that key then their must be an array already exist so push current element to that array
      map.get(key).push(str);
    } else {
      // if it is not then create an array at that particular key
      map.set(key, [str]);
    }
  }

  // the values of the map are our final groups of anagrams.
  return Array.from(map.values());
};

const result = groupAnagrams(input);
console.log(result);
