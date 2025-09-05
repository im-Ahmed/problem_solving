# Optimize Meeting Room Scheduling

## Problem Statement

You need to implement a function **`findOptimalSchedule(meetings, rooms)`** that schedules meetings into rooms as efficiently as possible.

The scheduling should follow these rules:

1. A meeting can only be scheduled in a room that is **equal to or larger** than its required size (`small`, `medium`, `large`).
2. Always use the **smallest available room** that meets the requirement.
3. Each room can only host **one meeting**.
4. Rooms and meetings should be considered in the **order they appear** in the input arrays.
5. Meetings that cannot be scheduled (no available suitable rooms) should be skipped.

---

## Function Signature

```javascript
function findOptimalSchedule(meetings, rooms) => Array<{ meetingName: string, roomName: string }>
```

---

## Input

### Meetings

- An array of objects:

```javascript
{ name: string, duration: number, requiredRoomSize: 'small' | 'medium' | 'large' }
```

---

### Rooms

- An array of objects:

```javascript
{ name: string, capacity: 'small' | 'medium' | 'large' }
```

---

## Output

- An array of objects:

```javascript
{ meetingName: string, roomName: string }
```

---

- Only contains successful assignments.

- Unassigned meetings are excluded.

## Example

### Input

```javascript
const meetings = [
  { name: "Team Sync", duration: 30, requiredRoomSize: "small" },
  { name: "Client Pitch", duration: 60, requiredRoomSize: "medium" },
  { name: "All-Hands", duration: 90, requiredRoomSize: "large" },
  { name: "One-on-One", duration: 15, requiredRoomSize: "small" },
];

const rooms = [
  { name: "Room Alpha", capacity: "medium" },
  { name: "Room Beta", capacity: "small" },
  { name: "Room Gamma", capacity: "large" },
];
```

---

### Expected Output

```javascript
[
  { meetingName: "Client Pitch", roomName: "Room Alpha" },
  { meetingName: "Team Sync", roomName: "Room Beta" },
  { meetingName: "All-Hands", roomName: "Room Gamma" },
];
```

---

## Constraints

- The input will always contain at least one meeting and at least one room.

- Room capacities are one of 'small', 'medium', or 'large'.

- Meetings are scheduled in the order provided.
