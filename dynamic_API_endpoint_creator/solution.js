const apiBase = "https://api.example.com/v1";
const resourceList = ["users", "products", "orders"];

const createApiEndpoints = (apiBase, resourceList) => {
  let endPointsObj = {};

  resourceList.map((resource) => {
    const resourceURL = `${apiBase}/${resource}`;

    endPointsObj[resource] = {
      get: () => resourceURL,
      getById: (id) => `${resourceURL}/${id}`,
      create: () => resourceURL,
      update: (id) => `${resourceURL}/${id}`,
      delete: (id) => `${resourceURL}/${id}`,
    };
  });
  return endPointsObj;
};

const api = createApiEndpoints(apiBase, resourceList);

console.log(api.users.get());
// Expected: "https://api.example.com/v1/users"

console.log(api.orders.create());
// Expected: "https://api.example.com/v1/products/456"

console.log(api.users.getById(123));
// Expected: "https://api.example.com/v1/users/123"

console.log(api.products.update(456));
// Expected: "https://api.example.com/v1/products/456"
