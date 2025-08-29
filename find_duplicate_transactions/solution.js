const findDuplicateTransactions = (transactions) => {
  const groupsMap = new Map();
  for (const t of transactions) {
    const key = `${t.sourceAccount}_${t.targetAccount}_${t.amount}`;
    if (!groupsMap.has(key)) groupsMap.set(key, []);
    groupsMap.get(key).push(t);
  }
  return [...groupsMap.values()].filter((group) => group.length > 1);
};

const transactions = [
  {
    id: "1",
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "food",
    time: "2023-01-01T10:00:00Z",
  },
  {
    id: "2",
    sourceAccount: "C",
    targetAccount: "D",
    amount: 250,
    category: "utility",
    time: "2023-01-02T11:00:00Z",
  },
  {
    id: "3",
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "food",
    time: "2023-01-01T10:05:00Z",
  },
  {
    id: "4",
    sourceAccount: "E",
    targetAccount: "F",
    amount: 50,
    category: "misc",
    time: "2023-01-03T12:00:00Z",
  },
  {
    id: "5",
    sourceAccount: "C",
    targetAccount: "D",
    amount: 250,
    category: "utility",
    time: "2023-01-02T11:15:00Z",
  },
  {
    id: "6",
    sourceAccount: "G",
    targetAccount: "H",
    amount: 300,
    category: "salary",
    time: "2023-01-04T13:00:00Z",
  },
];

console.log(findDuplicateTransactions(transactions));
