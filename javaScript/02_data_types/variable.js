// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

//  2. Variable, rw(read/write) <- 변수 (변경될 수 있는 값)
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

// 3. Contant, r(read only) <- 변경이 불가능한 데이터 타입을 의미한다.
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive type, frozen objects(i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security <- 보안상의 이유
// - thread safety <- 한 가지의 프로세스 안에서는 다양한 쓰레드들이 동시에 값을 변경하면 위험할 수 있기 때문에 값의 변경이 없는 것이 좋다.
// - reduce human mistakes <- 인간의 실수를 줄여줄 수 있다.

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

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id"); // string에 맞는 심볼을 만드는 것이기에 값이 같다고 나온다.
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 }; // ellie는 const 키워드로 정의 되어 있기 때문에 다른 object로 할당이 불가능하다.
ellie.age = 21; // ellie object 안에 있는 변수들은 변경이 가능하다.

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h <- 첫번째 index의 값은 0의 자리에 있는 h가 출력된다.
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // 문자열에 string 값이 있기 때문에 숫자도 string으로 변환하여 인식한다.
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // 반대로 string과 string을 나누게 되면 스트링 안의 값을 확인하여 실제값이 숫자일 경우 연산처리를 해준다.
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // h <- 타입을 중간에 숫자로 바꾸었기 때문에 runtime error(Type error)가 발생한다.
