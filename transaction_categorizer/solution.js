const transactionCategorizer = (input) => {
  return input.reduce((acc, transaction) => {
    acc[transaction.category] ??= [];
    acc[transaction.category].push(transaction);
    return acc;
  }, {});
};

const transactions = [
  {
    id: 1,
    description: "Groceries",
    amount: 50,
    type: "expense",
    category: "Food",
    date: "2023-10-26",
  },
  {
    id: 2,
    description: "Salary",
    amount: 3000,
    type: "income",
    category: "Income",
    date: "2023-10-25",
  },
  {
    id: 3,
    description: "Dinner",
    amount: 30,
    type: "expense",
    category: "Food",
    date: "2023-10-24",
  },
  {
    id: 4,
    description: "Book",
    amount: 20,
    type: "expense",
    category: "Education",
    date: "2023-10-23",
  },
];

console.log(transactionCategorizer(transactions));
