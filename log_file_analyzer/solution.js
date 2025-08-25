const analyzeLogs = (input) => {
  let uniqueUser = new Set();
  let totalSessions = 0;
  let totalPurchases = 0;
  let actionCounts = {}; // use plain object
  let activeSessions = new Set();

  for (let i = 0; i < input.length; i++) {
    const [timestamp, user, action, details] = input[i].trim().split(" - ");

    // Track unique users
    uniqueUser.add(user);

    // Track action counts
    if (!actionCounts[user]) {
      actionCounts[user] = 0;
    }
    actionCounts[user] += 1;

    // Handle actions
    if (action === "LOGIN") {
      activeSessions.add(user);
    } else if (action === "LOGOUT") {
      if (activeSessions.has(user)) {
        totalSessions += 1;
        activeSessions.delete(user);
      }
    } else if (action === "PURCHASE") {
      totalPurchases += 1;
    }
  }

  // Find most active user
  let mostActiveUser = null;
  let maxActions = -1;
  for (const user in actionCounts) {
    if (actionCounts[user] > maxActions) {
      maxActions = actionCounts[user];
      mostActiveUser = user;
    }
  }

  return {
    uniqueUsers: uniqueUser.size,
    totalSessions,
    totalPurchases,
    mostActiveUser
  };
};

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

console.log(analyzeLogs(logEntries));
