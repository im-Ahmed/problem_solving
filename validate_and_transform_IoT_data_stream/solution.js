const processDataStream = (data) => {
  return data.reduce((acc, current) => {
    // Validation checks
    const isValid =
      typeof current.id === "string" &&
      current.id.length > 0 &&
      typeof current.timestamp === "number" &&
      current.timestamp > 0 &&
      current.value !== null &&
      current.value !== undefined &&
      current.meta &&
      typeof current.meta.unit === "string" &&
      current.meta.unit.length > 0;

    if (isValid) {
      // Transformation
      const transformedData = {
        ...current,
        date: new Date(current.timestamp),
      };
      delete transformedData.timestamp;

      // Aggregation
      const source = transformedData.meta.source;
      if (!acc[source]) {
        acc[source] = [];
      }
      acc[source].push(transformedData);
    }

    return acc;
  }, {});
};
const data = [
  {
    id: "a1",
    timestamp: 1672531200000,
    value: 25.5,
    meta: { unit: "C", source: "sensor-1" },
  },
  {
    id: "a2",
    timestamp: -1000,
    value: 12,
    meta: { unit: "F", source: "sensor-2" },
  }, // Invalid: negative timestamp
  {
    id: "a3",
    timestamp: 1672534800000,
    value: null,
    meta: { unit: "C", source: "sensor-1" },
  }, // Invalid: null value
  {
    id: "a4",
    timestamp: 1672538400000,
    value: 30,
    meta: { unit: "C", source: "sensor-1" },
  },
  {
    id: "a5",
    timestamp: 1672542000000,
    value: 75,
    meta: { unit: "F", source: "sensor-2" },
  },
];
console.log(processDataStream(data));
