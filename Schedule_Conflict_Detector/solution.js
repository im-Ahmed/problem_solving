const isConflict = (meeting) => {
  let conflict = false;
  const sortedMeeting = meeting.sort((a, b) => a.start - b.start);
  for (let i = 0; i < sortedMeeting.length - 1; i++) {
    if (sortedMeeting[i].end <= sortedMeeting[i + 1].start) {
      conflict = false;
    } else {
      conflict = true;
      break;
    }
  }

  return conflict;
};

const meetings1 = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
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
const result1 = isConflict(meetings1);
const result2 = isConflict(meetings2);
const result3 = isConflict(meetings3);
console.log("conflict in meeting1: ", result1);
console.log("conflict in meeting2: ", result2);
console.log("conflict in meeting3: ", result3);
