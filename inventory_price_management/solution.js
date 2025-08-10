const products = [
  { name: "Laptop", price: 1200, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 50 },
  { name: "Keyboard", price: 75, quantity: 20 },
  { name: "Monitor", price: 300, quantity: 10 },
];

const calculateInventoryValue = (products) => {
  return products.reduce((acc, currentProduct) => {
    return (acc += currentProduct.price * currentProduct.quantity);
  }, 0);
};

const result = calculateInventoryValue(products);
console.log("Total is: ", result);
