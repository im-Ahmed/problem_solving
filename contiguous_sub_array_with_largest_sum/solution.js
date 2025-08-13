const contiguousSubArrayLargestSum = (nums) => {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

const num1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const num2 = [1];
const num3 = [5, 4, -1, 7, 8];

const example1 = contiguousSubArrayLargestSum(num1);
const example2 = contiguousSubArrayLargestSum(num2);
const example3 = contiguousSubArrayLargestSum(num3);
console.log("Example 1: ", example1);
console.log("Example 2: ", example2);
console.log("Example 3: ", example3);
