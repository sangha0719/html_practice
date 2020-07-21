"use strict";

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
// 배열은 0부터 시작하기 때문에 배열 길이의 -1을 주게 되면 마지막 인덱스를 불러올 수 있다.
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index, array) {
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 뒤에 있는 것들을 앞으로 당겨와야 하기 때문에 항상 느릴 수 밖에 없다.
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥")); // 배열에 값이 없다면 -1로 출력된다.

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥")); // 배열에 값이 없다면 false로 출력된다.

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 제일 첫번째로 해당하는 값을 만나면 그 index를 출력한다.
console.log(fruits.lastIndexOf("🍎")); // 제일 마지막으로 해당하는 값을 만나면 그 index를 출력한다.
