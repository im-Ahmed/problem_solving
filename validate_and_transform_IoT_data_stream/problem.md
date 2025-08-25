# 📡 Validate and Transform IoT Data Stream

## Problem

You need to create a JavaScript function `processDataStream` that takes an array of **IoT sensor data objects** and returns a validated, transformed, and aggregated result.

### Processing Rules:

1. **Validation**:  
   A data point is considered **invalid** if any of the following are true:

   - `id` is not a non-empty string.
   - `timestamp` is not a positive number.
   - `value` is `null` or `undefined`.
   - `meta.unit` is not a non-empty string.

2. **Transformation**:

   - Convert the `timestamp` (Unix timestamp in milliseconds) into a **JavaScript `Date` object**.
   - Replace the `timestamp` field with a new field `date`.

3. **Aggregation**:
   - Group all valid and transformed data points by their `meta.source`.
   - The result should be an **object** where each key is a source string and the value is an array of its corresponding data points.

---

## Input

- An **array of IoT sensor data objects**.

### Example Input:

```javascript
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
```

---

## Output

- An object where keys are sensor sources and values are arrays of validated and transformed data points.

### Expected Output

```javascript
{
  "sensor-1": [
    { "id": "a1", "date": "2023-01-01T00:00:00.000Z", "value": 25.5, "meta": { "unit": "C", "source": "sensor-1" } },
    { "id": "a4", "date": "2023-01-01T02:00:00.000Z", "value": 30, "meta": { "unit": "C", "source": "sensor-1" } }
  ],
  "sensor-2": [
    { "id": "a5", "date": "2023-01-01T03:00:00.000Z", "value": 75, "meta": { "unit": "F", "source": "sensor-2" } }
  ]
}

```

---

## Constraints

- The input will always be an array.

- Each object must follow the defined structure.

- Invalid data points must be filtered out.

- Works with any number of unique meta.source values.
