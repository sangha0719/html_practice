// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

//  2. Variable <- 변수 (변경될 수 있는 값)
// let (added in ES6) <- 자바 스크립트에서 유일하게 쓸 수 있는 변수를 설정할 수 있는 키워드

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!) <- var는 사용하면 안 된다.
// var hoisting 이란? (move declaration from bottom to top) <- 어디에 선언했는가에 상관 없이 항상 제일 위로 선언을 끌어올려준다.
// has no block scape <- 블록을 철저히 무시하는 키워드이기 때문에 사용해서는 안 된다.

{
  age = 4;
  var age;
}
console.log(age);

// 3. Contants <- 변경이 불가능한 데이터 타입을 의미한다.
// favor immutable data type always for a few reasons:
// - security <- 보안상의 이유
// - thread safety <- 한 가지의 프로세스 안에서는 다양한 쓰레드들이 동시에 값을 변경하면 위험할 수 있기 때문에 값의 변경이 없는 것이 좋다.
// - reduce human mistakes <- 인간의 실수를 줄여줄 수 있다.
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol <- 더 이상 작은 단위로 나타낼 수 없는 하나의 item을 의미한다.
// object, box container <- 하나의 item들을 묶어서 하나로 관리해 주는 것들을 의미한다.
// function, first-class function <- 프로그래밍 언어에서는 function도 다른 데이터 타입처럼 변수에 할당이 가능하고, 또 그렇기 때문에 함수에 인자(parameter)로도 전달이 되고, 함수에서 return type으로도 function을 리턴하는 것이 가능한 것을 말한다.

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN(Not a Number 숫자가 아니다.)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) <- 마지막 숫자 뒤에 n이라고 붙이면 된다. 다른 브라우저에서는 지원이 되지 않고 크롬과 파이어폭스에서만 지원이 된다.
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53) ~ 2**53) 의 범위까지만 인식 된다.
console.log(`value: ${bigInt}, type: $(typeof bigInt}`);
// Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) <- ` 백틱을 의미한다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
