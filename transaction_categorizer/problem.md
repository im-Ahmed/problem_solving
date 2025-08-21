# Problem: Transaction Categorizer

You are tasked with building a **Transaction Categorizer** function that processes an array of financial transactions and organizes them by category.  
The goal is to return a new object where each key is a **category name**, and the corresponding value is an array of all transactions belonging to that category.

---

## Input

An **array of transaction objects**.  
Each object has the following structure:

```javascript
{
  id: number,
  description: string,
  amount: number,
  type: 'income' | 'expense',
  category: string,
  date: string
}
```
## Output
A single object where:

- Each key is a unique category string.

- The corresponding value is an array of all transactions that fall under that specific category.
---
## Example
### Input
```javascript
const transactions = [
  { id: 1, description: 'Groceries', amount: 50, type: 'expense', category: 'Food', date: '2023-10-26' },
  { id: 2, description: 'Salary', amount: 3000, type: 'income', category: 'Income', date: '2023-10-25' },
  { id: 3, description: 'Dinner', amount: 30, type: 'expense', category: 'Food', date: '2023-10-24' },
  { id: 4, description: 'Book', amount: 20, type: 'expense', category: 'Education', date: '2023-10-23' }
];
```
## Expected Output
```javascript
{
  "Food": [
    { id: 1, description: 'Groceries', amount: 50, type: 'expense', category: 'Food', date: '2023-10-26' },
    { id: 3, description: 'Dinner', amount: 30, type: 'expense', category: 'Food', date: '2023-10-24' }
  ],
  "Income": [
    { id: 2, description: 'Salary', amount: 3000, type: 'income', category: 'Income', date: '2023-10-25' }
  ],
  "Education": [
    { id: 4, description: 'Book', amount: 20, type: 'expense', category: 'Education', date: '2023-10-23' }
  ]
}
```
---
## Constraints

- The input array will not be empty.

- The category property will always be a string.
