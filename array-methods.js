const brands = products.map((product) => product.brand);
const prices = products.map((product) => product.price);

products.forEach((product) => console.log(product.color));

products.forEach((product) => {});

// filter
const cheap = products.filter((product) => product.price <= 5000);

const specificName = products.filter((product) => product.name.includes("n"));

// find
const special = products.find((product) => product.name.includes("n"));
