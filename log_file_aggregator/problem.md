# 📄 Log File Aggregator

## Problem

You need to create a JavaScript function `aggregateLogs` that processes an array of **web server log entries** and summarizes the **request statuses** for each user.  

### Log Format:
- Each log entry is a string in the format:  
```javascript
[user] [timestamp] [status]
```
---
- Example:  
`"user1 1678886400 SUCCESS"`

---

## Input

- An **array of strings**, where each string is a log entry.

### Example Input:

```javascript
const logs = [
"user1 1678886400 SUCCESS",
"user2 1678886405 ERROR",
"user1 1678886410 SUCCESS",
"user3 1678886415 TIMEOUT",
"user2 1678886420 SUCCESS",
"user1 1678886425 ERROR"
];
```
---
## Output

- An object where:

- Each key is a username.

- Each value is another object mapping status types (SUCCESS, ERROR, TIMEOUT, etc.) to their counts.
### Expected Output:
```javascript
{
  "user1": {
    "SUCCESS": 2,
    "ERROR": 1
  },
  "user2": {
    "ERROR": 1,
    "SUCCESS": 1
  },
  "user3": {
    "TIMEOUT": 1
  }
}
```
---
## Constraints

- The log format is always consistent: `[user] [timestamp] [status]`.

- Usernames and statuses are single words without spaces.

- Timestamps can be ignored (they are not used in the aggregation).