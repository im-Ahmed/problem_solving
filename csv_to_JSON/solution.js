const csvToJSON = (input) => {
  const lines = input.trim().split("\n");
  const headers = lines[0].trim().split(",");
  const finalArray = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].trim().split(",");
    let Obj = {};

    headers.forEach((header, index) => {
      const value = values[index];

      if (header.includes(".")) {
        const parts = header.split(".");
        let current = Obj;

        // traverse and create nested objects
        for (let j = 0; j < parts.length; j++) {
          const key = parts[j];
          if (j === parts.length - 1) {
            // last part = assign value
            current[key] = value;
          } else {
            // intermediate = ensure object exists
            if (!current[key]) current[key] = {};
            current = current[key];
          }
        }
      } else {
        Obj[header] = value;
      }
    });

    finalArray.push(Obj);
  }

  return JSON.stringify(finalArray, null, 2);
};

const csvString = `
  id,user.name,user.email,product.name,product.price
  1,Alice,alice@example.com,Laptop,1200
  2,Bob,bob@example.com,Mouse,25
  3,Charlie,charlie@example.com,Keyboard,75
  `;

console.log(csvToJSON(csvString));
