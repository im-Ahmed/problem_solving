const data = [
  { userId: "u1", event: "login", timestamp: 1678886400 },
  { userId: "u2", event: "logout", duration: 120 },
  { userId: "u1", event: "pageview", pageId: "home" },
  { userId: "u3", event: "login", timestamp: 1678886500, region: "us" },
];

const aggregateProperties = (data) => {
    if (!data || data.length === 0) {
      return {};
    }
  
    return data.reduce((accumulator, currentObject) => {
      for (const key in currentObject) {
        if (Object.prototype.hasOwnProperty.call(currentObject, key)) {
          if (!accumulator[key]) {
            // If the key doesn't exist, initialize it with an array containing the value
            accumulator[key] = [currentObject[key]];
          } else {
            // If the key exists, push the new value to its array
            accumulator[key].push(currentObject[key]);
          }
        }
      }
      return accumulator;
    }, {}); // The initial value for the accumulator is an empty object
  };
  
  const result = aggregateProperties(data);
  console.log(result);