const url1 =
  "https://www.example.com/search?q=hello%20world%20again&page=2&sort=true";
const url2 = "https://www.example.com/home";

const parseUrlParams = (URL) => {
  let params = {}; // Object to store extracted parameters

  const parseIfNumberOrBoolean = (value) => {
    const trimmed = value.trim().toLowerCase();
    if (trimmed === "true") return true; // Convert "true" to boolean true
    if (trimmed === "false") return false; // Convert "false" to boolean false

    const num = Number(value);

    return isNaN(num) ? value : num; // Convert to number if valid, else keep string
  };

  if (URL.includes("?")) {
    // Extract query string part and split into key=value pairs
    let query = URL.substring(URL.indexOf("?") + 1).split("&");
    query.map((pair) => {
      // Decode and split into key and value
      const [key, value] = pair.split("=").map(decodeURIComponent);
      // Assign converted value (number/boolean/string) to params
      params[key] = parseIfNumberOrBoolean(value);
    });
  } else {
    // No query params, return empty object
    return params;
  }
  return params; // Return final parsed object
};

const params1 = parseUrlParams(url1);
const params2 = parseUrlParams(url2);

console.log("URL with query: ", params1);
console.log("URL without query: ", params2);
