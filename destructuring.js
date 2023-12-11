const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 34);

// console.log(boxify(65, 89));

const [firstMovie, secondMovie] = student.movies;

// object destructring

const { name, age, id } = { id: 12, name: "alu", age: 14 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 55,
    weight: 70,
    address: "khilkhat ",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "apple",
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
