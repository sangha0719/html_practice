// Function
// - fundamental building block in the program
// subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}

printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2.Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
// ellie 라는 reference 주소에 있는 key(name)의 값(ellie)을 의미한다.
console.log((ellie.name = "hello"));
// ellie.name으로 직접 접촉해서 hello로 바꾸게 되면 콘솔창에 hello가 출력된다.
changeName(ellie);
// function을 통하여 ellie.name의 값을 'coder'로 바꾸어 주는 작업
console.log(ellie);
// 결과 {name: "coder"} 가 출력된다.

const a = [1, 10];
console.log((a[0] = 2));

// 3.Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  // parameter 옆에다가 원하는 디폴드 값(unknown)을 지정해주면 된다.
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ... <- Rest parameter 배열 형태로 전달이 된다.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope // 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //   console.log(childMessage); // error
}
printMessage();

// 6. Return a value <- 리턴 값이 없는 함수들은 return undefined이 생략되어 있는 것이다. 또는 값을 지정해줄 수 있다.
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love ypu") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes");
};

const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
