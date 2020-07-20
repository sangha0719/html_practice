// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:
...
1 + 2 = ${1 + 2}`);

console.log("ellie's\n\tbook");

// 2. Numeric oprators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value <- 가장 처음 거짓의 값을 찾는다.
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullalbeObject && nullableObject.something
// 또한 간편하게 null값을 측정할 때에도 종종 사용된다.
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// !(not) <- 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion <- 타입을 자동으로 변경해서 검사해준다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion <- 타입이 다르면 다른애들이라고 판단한다.
// 코딩을 할 때에는 strict equality를 사용하는 것이 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// * reference는 참조(공간을 나타내는 주소의 이름)를 의미한다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");
// 간단할 때에만 사용한다.

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
// 블럭을 먼저 실행하고 싶다면 do while을 써야한다.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// nesting으로 작성하는 것은 cpu에 좋지 않다.
// 되도록이면 피할 것을 추천
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, k:${j}`);
  }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`quiz01. ${i}`);
}
// 02. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`quiz02.${i}`);
}
