function cleanUpInactiveSessions(sessions) {
  // 1. Get the lastActive timestamps and sort them in descending order.
  const sortedTimestamps = sessions
    .map((session) => session.lastActive)
    .sort((a, b) => b - a);

  // 2. Get the 10 most recent unique timestamps.
  // Using a Set ensures we only have unique values.
  const recentTimestamps = new Set(sortedTimestamps.slice(0, 10));

  // 3. Filter the original sessions array to find those not in the protected set.
  const sessionsToRemove = sessions.filter((session) => {
    return !recentTimestamps.has(session.lastActive);
  });

  return sessionsToRemove;
}

const sessions = [
  { sessionId: "userA", lastActive: 1678886400 },
  { sessionId: "userB", lastActive: 1678886401 },
  { sessionId: "userC", lastActive: 1678886402 },
  { sessionId: "userD", lastActive: 1678886403 },
  { sessionId: "userE", lastActive: 1678886404 },
  { sessionId: "userF", lastActive: 1678886405 },
  { sessionId: "userG", lastActive: 1678886406 },
  { sessionId: "userH", lastActive: 1678886407 },
  { sessionId: "userI", lastActive: 1678886408 },
  { sessionId: "userJ", lastActive: 1678886409 },
  { sessionId: "userK", lastActive: 1678886410 },
  { sessionId: "userL", lastActive: 1678886411 },
  { sessionId: "userM", lastActive: 1678886412 },
  { sessionId: "userN", lastActive: 1678886413 },
  { sessionId: "userO", lastActive: 1678886414 },
  { sessionId: "userP", lastActive: 1678886415 },
  { sessionId: "userQ", lastActive: 1678886416 },
  { sessionId: "userR", lastActive: 1678886417 },
  { sessionId: "userS", lastActive: 1678886418 },
  { sessionId: "userT", lastActive: 1678886419 },
];

console.log(cleanUpInactiveSessions(sessions));
