// JSON
const student = {
  name: "sakib khan",
  age: 32,
  movies: ["king khan", "mastan ali"],
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch

// keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [12, 45, 65, 87, 92];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// add or remove from an array
const newProducts = [...products, newProduct];

const remaining = products.filter((p) => p.name !== "phone");
