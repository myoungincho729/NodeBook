// let , const : block scope <-> var: function scope
if (true) {
  var x = 3;
}
console.log(x);

if (true) {
  let y = 4;
}
// console.log(y);

const a = 0;
// a = 1;

let b = 0;
b = 1;

// const c;

// template string
const num1 = 1;
const num2 = 2;
const string = `${num1} + ${num2} = ${num1 + num2}`;
console.log(string);
