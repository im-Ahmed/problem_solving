const DataValidator = (profile) => {
  // 1. Validate required fields and types upfront
  if (
    typeof profile.name !== "string" ||
    profile.name.length === 0 ||
    typeof profile.email !== "string" ||
    typeof profile.age !== "number" ||
    profile.age < 18 ||
    !Array.isArray(profile.hobbies)
  ) {
    return false;
  }

  // 2. Validate email format
  if (!profile.email.includes("@") || !profile.email.includes(".")) {
    return false;
  }

  // 3. Validate hobbies array content
  if (profile.hobbies.some((hobby) => typeof hobby !== "string")) {
    return false;
  }

  // 4. Validate optional contact property (if it exists)
  if (profile.contact !== undefined) {
    if (typeof profile.contact !== "string" || !/^\d+$/.test(profile.contact)) {
      return false;
    }
  }

  // If all checks pass, the profile is valid
  return true;
};
// ✅ Valid Profile
const validProfile = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  age: 25,
  hobbies: ["reading", "hiking"],
  contact: "1234567890",
};
console.log(DataValidator(validProfile)); // true

// ❌ Invalid Profile (multiple issues)
const invalidProfile = {
  name: "",
  email: "johndoe.com",
  age: 17,
  hobbies: [123, "coding"],
};
console.log(DataValidator(invalidProfile)); // false

// ✅ Valid Profile without contact (optional)
const noContactProfile = {
  name: "Sam Smith",
  email: "sam.smith@example.com",
  age: 30,
  hobbies: [],
};
console.log(DataValidator(noContactProfile)); // true
