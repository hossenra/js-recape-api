// arrow function
// const getFiftaFive = () => 55;
// const addSixtyFive = (num) => num + 65;
// const isEven = (x = x % 2 === 0);
// const addThree = (a, b, c) => a + b + c;
// const doMath = (num1, num2) => {
//   const add = num1 + num2;
//   return add;
// };

const numbers = [12, 45, 56, 87, 23];
const newNumbers = [...numbers];
numbers.push(99);
// console.log(numbers);
// console.log(newNumbers);

const currentNumbers = [...numbers, 55];
console.log(currentNumbers);
