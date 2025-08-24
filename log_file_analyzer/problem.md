# 📝 Log File Analyzer

## Problem Statement

You are given an array of log entries from a system, and your task is to analyze the data to produce a summary report.

Each log entry is a string with a consistent format:

### Actions to Track:

- **LOGIN**: A user logs into the system.
- **LOGOUT**: A user logs out.
- **PURCHASE**: A user makes a purchase.
- **VIEW_PRODUCT**: A user views a product page.

### Requirements:

Your function **`analyzeLogs`** must take an array of these log strings and return a single object containing the following summary information:

- **uniqueUsers** → Total count of unique users who appeared in the logs.
- **totalSessions** → Total number of completed sessions (a LOGIN followed by a LOGOUT for the same user). A LOGIN without a corresponding LOGOUT does **not** count.
- **totalPurchases** → Total count of all PURCHASE actions.
- **mostActiveUser** → The username of the user with the highest number of total actions (LOGIN, LOGOUT, PURCHASE, VIEW_PRODUCT).

---

## Input Example

```javascript
const logEntries = [
  "2025-08-24T10:00:00Z - user1 - LOGIN - system_startup",
  "2025-08-24T10:05:00Z - user2 - LOGIN - system_startup",
  "2025-08-24T10:10:00Z - user1 - VIEW_PRODUCT - product_A",
  "2025-08-24T10:15:00Z - user2 - PURCHASE - order_ID_123",
  "2025-08-24T10:20:00Z - user1 - LOGOUT - session_end",
  "2025-08-24T10:25:00Z - user3 - LOGIN - system_startup",
  "2025-08-24T10:30:00Z - user2 - LOGOUT - session_end",
  "2025-08-24T10:35:00Z - user3 - PURCHASE - order_ID_456",
  "2025-08-24T10:40:00Z - user3 - LOGOUT - session_end",
];
```

---

## Expected Output

```javascript
{
  uniqueUsers: 3,
  totalSessions: 2,
  totalPurchases: 2,
  mostActiveUser: "user3"
}
```

---

## Approach

- Parse Each Log Entry → Split the string into timestamp, user, action, and details.

- Track Users → Use a Set to collect unique usernames.

- Track Sessions → Maintain a map of user login states; increment session count only when a matching LOGOUT is found.

- Track Purchases → Increment a counter whenever the action is PURCHASE.
