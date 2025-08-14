const hasConflict = (meeting) => {
  let conflict = false;
  meeting.sort((a, b) => a.start - b.start);
  for (let i = 0; i < meeting.length - 1; i++) {
    if (!(meeting[i].end <= meeting[i + 1].start)) {
      conflict = true;
      break;
    }
  }

  return conflict;
};

const meetings1 = [
  { start: 0, end: 30 },
  { start: 15, end: 20 },
  { start: 5, end: 10 },
];
const meetings2 = [
  { start: 0, end: 10 },
  { start: 10, end: 20 },
  { start: 20, end: 30 },
];
const meetings3 = [
  { start: 5, end: 10 },
  { start: 15, end: 20 },
  { start: 25, end: 30 },
];
const result1 = hasConflict(meetings1);
const result2 = hasConflict(meetings2);
const result3 = hasConflict(meetings3);
console.log("conflict in meetings1: ", result1);
console.log("conflict in meetings2: ", result2);
console.log("conflict in meetings3: ", result3);
