const sparseArrayUnion = (arrA, arrB) => {
  let finalArray = [];
  let i = 0,
    j = 0;

  while (i < arrA.length || j < arrB.length) {
    if (i >= arrA.length) {
      finalArray.push(arrB[j]);
      j++;
    } else if (j >= arrB.length) {
      finalArray.push(arrA[i]);
      i++;
    } else {
      if (arrA[i].id < arrB[j].id) {
        finalArray.push(arrA[i]);
        i++;
      } else if (arrA[i].id > arrB[j].id) {
        finalArray.push(arrB[j]);
        j++;
      } else {
        finalArray.push(arrB[j]);
        i++;
        j++;
      }
    }
  }

  return finalArray;
};

const arrA = [
  { id: 1, value: 10 },
  { id: 4, value: 30 },
  { id: 5, value: 50 },
];
const arrB = [
  { id: 2, value: 20 },
  { id: 3, value: 35 },
  { id: 4, value: 40 },
];
console.log(sparseArrayUnion(arrA, arrB));
