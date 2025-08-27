const aggregateLogs = (logs) => {
  let finalObj = {};
  for (let i = 0; i < logs.length; i++) {
    const parts = logs[i].trim().split(" ");
    const user = parts[0];
    const status = parts[2];
    if (!finalObj[user]) {
      finalObj[user] = {};
    }
    if (!finalObj[user][status]) {
      finalObj[user][status] = 0;
    }
    finalObj[user][status]++;
  }
  return finalObj;
};

const logs = [
  "user1 1678886400 SUCCESS",
  "user2 1678886405 ERROR",
  "user1 1678886410 SUCCESS",
  "user3 1678886415 TIMEOUT",
  "user2 1678886420 SUCCESS",
  "user1 1678886425 ERROR",
];

console.log(aggregateLogs(logs));
