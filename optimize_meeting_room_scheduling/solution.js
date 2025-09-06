function findOptimalSchedule(meetings, rooms) {
  // Helper function to get a numerical value for room/meeting size
  const getSizeValue = (size) => {
    switch (size) {
      case 'small': return 1;
      case 'medium': return 2;
      case 'large': return 3;
      default: return 0;
    }
  };

  // Sort meetings by size, largest first
  meetings.sort((a, b) => getSizeValue(b.requiredRoomSize) - getSizeValue(a.requiredRoomSize));

  // Sort rooms by capacity, largest first
  rooms.sort((a, b) => getSizeValue(b.capacity) - getSizeValue(a.capacity));

  const scheduledMeetings = [];
  const availableRooms = [...rooms]; // Create a mutable copy

  for (const meeting of meetings) {
    let roomFound = false;
    for (let i = 0; i < availableRooms.length; i++) {
      const room = availableRooms[i];
      // Check if the room capacity meets the meeting's requirement
      if (getSizeValue(room.capacity) >= getSizeValue(meeting.requiredRoomSize)) {
        // Assign the meeting to this room
        scheduledMeetings.push({
          meetingName: meeting.name,
          roomName: room.name,
        });

        // Remove the room from the available pool
        availableRooms.splice(i, 1);
        roomFound = true;
        break; // Move to the next meeting
      }
    }
  }

  return scheduledMeetings;
}
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
console.log(findOptimalSchedule(meetings, rooms));
