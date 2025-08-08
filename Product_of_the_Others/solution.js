const productOfOthers = (arr) => {
  const n = arr.length;
  const finalProduct = new Array(n).fill(1);
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate left products
  for (let i = 1; i < n; i++) {
    leftProducts[i] = arr[i - 1] * leftProducts[i - 1];
  }

  // Calculate right products
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = arr[i + 1] * rightProducts[i + 1];
  }

  // Calculate final finalProduct
  for (let i = 0; i < n; i++) {
    finalProduct[i] = leftProducts[i] * rightProducts[i];
  }

  return finalProduct;
};
const inputArray = [1, 2, 3, 4];
const result = productOfOthers(inputArray);
console.log(result);
