const sparseArraySum= (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of the same length");
  }
  let n = arr1.length;
  let sumArray = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (arr1[i] !== 0 || arr2[i] !== 0) {
      sumArray[i] = arr1[i] + arr2[i];
    }
  }

  return sumArray;
};

const arr1 = [0, 5, 0, 0, 12];
const arr2 = [0, 0, 8, 0, -3];

console.log(sparseArraySum(arr1, arr2));
