const products = [
  { category: "Electronics", price: 199.99 },
  { category: "Books", price: 12.5 },
  { category: "Electronics", price: 45.5 },
  { category: "Clothing", price: 25.0 },
  { category: "Books", price: 18.0 },
  { category: "Electronics", price: 75.0 },
];

const summarizeProducts = (products) => {
  return products.reduce((acc, currentProduct) => {
    // If category doesn't exist in accumulator, initialize it
    if (!Object.prototype.hasOwnProperty.call(acc, currentProduct.category)) {
      acc[currentProduct.category] = {
        totalPrice: currentProduct.price,
        count: 1,
      };
    } else {
      // If category exists, update total price and increment count
      acc[currentProduct.category] = {
        totalPrice:
          acc[currentProduct.category].totalPrice + currentProduct.price,
        count: acc[currentProduct.category].count + 1,
      };
    }
    return acc; // Return updated accumulator
  }, {}); // Initial value is an empty object
};

const result = summarizeProducts(products);
console.log(result);
