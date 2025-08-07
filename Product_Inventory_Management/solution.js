const currentInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Microphone"],
];

const updateInventory = (currentInv, newInv) => {
  for (newItem of newInv) {
    const itemIndex = currentInv.findIndex(
      (currentItem) => currentItem[1] === newItem[1]
    );
    if(itemIndex !== -1){
        currentInv[itemIndex][0] += newItem[0];
    }else{
        currentInv.push(newItem);
    }
  }
  return currentInv.sort((a, b) => a[1].localeCompare(b[1]));
};

let result = updateInventory(currentInv, newInv);
console.log(result);
