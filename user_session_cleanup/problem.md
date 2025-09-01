## Problem: User Session Cleanup

In a multi-user application, you need to **identify and clean up inactive user sessions** from a database to free up resources.

Each session is an object with a `lastActive` timestamp. Some sessions, however, must be **protected** and should never be deleted, even if they are old.

A session is **protected** if its `lastActive` timestamp is **one of the ten most recent timestamps across all sessions**.

Your task is to implement a function:

```js
cleanUpInactiveSessions(sessions);
```

---

## Input

- An array of objects, where each object has:

- sessionId: string → Unique identifier of the user session.

- lastActive: number → Unix timestamp representing when the session was last active.

## Output

- A new array containing only the inactive sessions that should be removed.

- These are the sessions not among the ten most recently active.

## Constraints

- The input array sessions will contain at least 10 session objects.

- lastActive is always a positive integer.

- The order of the output array does not matter.

## Approach (Analysis)

- Identify the ten most recent lastActive timestamps.

- Mark those sessions as protected.

- Return all remaining sessions as the list of inactive sessions to be removed.

## Example

### Input

```javascript
const sessions = [
  { sessionId: "userA", lastActive: 1678886400 },
  { sessionId: "userB", lastActive: 1678886401 },
  { sessionId: "userC", lastActive: 1678886402 },
  // ... many more sessions
];
```

---

## Expected Behavior

- Determine the 10 most recent timestamps.

- Keep those sessions as protected.

- Return the list of all other sessions as inactive.
