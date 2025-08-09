const hierarchy = [
  {
    id: 1,
    name: "Parent A",
    children: [
      { id: 2, name: "Child A1" },
      {
        id: 3,
        name: "Child A2",
        children: [{ id: 4, name: "Grandchild A2-1" }],
      },
    ],
  },
  { id: 5, name: "Parent B" },
];

const flattenHierarchy = (hierarchy) => {
  return hierarchy.reduce((acc, currentObj) => {
    // add the id and name of current object into result
    const result = [...acc, { id: currentObj.id, name: currentObj.name }];
    // if the current object contains children then 
    if (currentObj.children && currentObj.children.length > 0) {
      return result.concat(flattenHierarchy(currentObj.children));
    }

    return result;
  }, []); // initialize the accumulator as an empty array
};
const result = flattenHierarchy(hierarchy);
console.log(result);
