const validatePayload = (payload, schema) => {
  if (typeof payload !== "object" || payload === null) {
    return false;
  }

  const payloadKeys = Object.keys(payload);
  const schemaKeys = Object.keys(schema);

  if (payloadKeys.length !== schemaKeys.length) {
    return false;
  }

  for (const key of schemaKeys) {
    const value = payload[key];
    const type = schema[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      if (!validatePayload(value, type)) {
        return false;
      }
    } else {
      if (type === "array" && !Array.isArray(value)) {
        return false;
      }
      if (type === "null" && value !== null) {
        return false;
      }
      if (
        typeof value !== type &&
        type !== "array" &&
        type !== "null"
      ) {
        return false;
      }
    }
  }

  return true;
};

// Payload 1
const payload1 = {
  id: 123,
  name: "Alice",
};
const schema1 = {
  id: "number",
  name: "string",
};
console.log("payload 1: ", validatePayload(payload1, schema1));
// Payload 2
const payload2 = {
  id: "123",
  name: "Bob",
};
const schema2 = {
  id: "number",
  name: "string",
};
console.log("payload 2: ", validatePayload(payload2, schema2));
// Payload 3
const payload3 = {
  id: 456,
};
const schema3 = {
  id: "number",
  name: "string",
};
console.log("payload 3: ", validatePayload(payload3, schema3));
// Payload 4
const payload4 = {
  user: {
    id: 789,
    name: "Charlie",
  },
  status: "active",
};
const schema4 = {
  user: {
    id: "number",
    name: "string",
  },
  status: "string",
};
console.log("payload 4: ", validatePayload(payload4, schema4));
