const string1 = "Hello";
const string2 = "Hello"; // "", '' 둘 중 하나 선택해서 사용하면 됨
const string3 = `Hello ${string1} ?!`; // ${} 보관처리 >> 템플릿 리터럴.. `` 여기 안에서만 사용 가능

console.log(string3);

const number = -123.1234;
const pi = 0.14; // 0이 자동으로 붙어서 0.14가 된다

console.log(number + 1);
console.log(number + undefined); // NaN : Not a Number
console.log(typeof (number + undefined));
console.log(pi);
console.log(typeof pi);

const a = 0.1;
const b = 0.2;

console.log(a + b); // 0.30000000004
// 부동 소수점 오류 >> 10진수를 2진수로 표현할 때 유한하게 표현하기 위해 계산상 올바른 데이터가 안올 수 있다
console.log((a + b).toFixed(1)); // 소수점 첫번째 자리까지만 남겨둔다
// toFixed는 숫자 >> 문자열로 바꾸기 때문에 주의할 필요가 있음
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));

//-----------------------------------------------------------------------------------------
// Boolean
const a2 = true;
const b2 = false;

if (a2) {
  console.log("Hello");
}

let age = null; // 명시적 >> 값이 없다
let age2 = undefined; // 암시적 >> 값을 모른다

console.log(age);
console.log(age2);

// setTimeout(function () { // 뒤 시간만큼 있다가 실행
//     age = 85
//     age2 = 95
//     console.log(age)
//     console.log(age2)
// })

//-----------------------------------------------------------------------------------------
const user = {
  name: "JINHO",
  age: 31,
  email: null,
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.email); // user에 email이 없다는 것을 명시적으로 기입했기 때문에 null을 반환
console.log(user.abc); // user에 값은 없지만 출력하려는 것에 대해 암시적인 undefined를 반환

//-----------------------------------------------------------------------------------------
// Array(배열)
const fruits = new Array("Apple", "Banana", "Cherry"); // 배열의 요소(element), 아이템
const fruits2 = ["Apple2", "Banana2", "Cherry2"]; // 배열 리터럴

console.log(fruits);
console.log(fruits2);
console.log(fruits2[1]); // Banana2 >> 인덱싱, 대괄호 표기법
console.log(fruits.length); // 배열의 길이
console.log(fruits[fruits.length - 1]); // Cherry

//-----------------------------------------------------------------------------------------
// Object(객체)

/*
const user2 = new Object()
user2.name = 'JINHO'
user2.age = 31
 
console.log(user2)
 */
// age: 31
// name: "JINHO" >> key: value

/*
// 함수 생성 방식
function User() {
    this.name = 'JINHO'
    this.age = 31
}
const user2 = new User()

console.log(user2)
 */

// 리터럴 방식
const user2 = {
  name: "JINHO",
  age: 31,
};
const key = "name";

console.log(user2); // 객체데이터 내부에서 name이 먼저 만들어졌어도 순서가 있는 것이 아니기 때문에 age가 먼저 출력될 수 있다
console.log(user2.name); // 점 표기법
console.log(user2["age"]); // 대괄호 표기법
console.log(user2[key]);

const userA = {
  name: "JINHO",
  age: 31,
};

const userB = {
  name: "NEO",
  age: 22,
  parent: userA,
};

console.log(userB);
console.log(userB.parent);
console.log(userB.parent.name); // 점 표기법은 객체데이터에서 지속적으로 사용 가능
console.log(userB["parent"]);
console.log(userB["parent"]["name"]);

const users = [userA, userB];

console.log(users[0].name);
console.log(users[0]["name"]);

//-----------------------------------------------------------------------------------------
// function

function hello() {
  console.log("Hello!");
}

hello();
console.log(hello);

function getNumber() {
  return 123;
}

console.log(getNumber);
console.log(getNumber()); // ()를 붙여주어야 함수가 실행된다, ()가 없으면 함수 그 자체가 출력
console.log(typeof getNumber); // function
console.log(typeof getNumber()); // number

const getNumber2 = function () {
  // 익명함수
  return 123;
};

console.log(typeof getNumber2); // function
console.log(typeof getNumber2()); // number

const a3 = function () {
  console.log("A");
};

const b3 = function (c3) {
  console.log(c3);
  c3();
};

b3(a3);

//-----------------------------------------------------------------------------------------
// 형 변환(Type Conversion)

const a4 = 1; // Number
const b4 = "1"; // String

console.log(a4 === b4); // false 일치 연산자
console.log(a4 == b4); // true 동등 연산자 >> 숫자, 문자 데이터이지만 형 변환이 일어나 true가 나오게 된다

const a5 = 0;
const b5 = false;

console.log(a5 === b5); // false
console.log(a5 == b5); // true

const a6 = 1;
const b6 = true;

console.log(a6 === b6); // false
console.log(a6 == b6); // true

//-----------------------------------------------------------------------------------------
// 참과 거짓(Truthy & Falsy)

// 거짓 리스트
// 1) false
// 2) 0
// 3) null(명시적)
// 4) undefined(암시적)
// 5) NaN
// 6) ''(빈 문자)
// 7) 0n

if (true) {
  console.log("true 참!");
}

if (false) {
  console.log("false 거짓!");
}

if (123) {
  // Truthy
  console.log("123 참!");
}

if (0) {
  console.log("0 거짓!");
}

if ("0") {
  console.log('"0" 참!');
}

if (null) {
  console.log("null 거짓!");
}

if (undefined) {
  console.log("undefined 거짓!");
}

if (NaN) {
  console.log("NaN 거짓!");
}

if ("") {
  console.log('"" 거짓!');
}

if (0n) {
  console.log("0n 거짓!");
}

const fruits3 = ["Apple", "Banana"];

if (fruits3.length) {
  // 아이템의 개수가 0개가 되면 false가 된다
  console.log("아이템이 들어있음!");
}

//-----------------------------------------------------------------------------------------
// 데이터 타입 확인

const a7 = 123;

console.log(typeof a7);
console.log(typeof "Hello" === "string");
console.log(typeof 123 === "number");
console.log(typeof false === "boolean");
console.log(typeof undefined === "undefined");
console.log(typeof null === "null"); // false
console.log(typeof null === "object"); // true
console.log(typeof [] === "object");
console.log(typeof {} === "object");
console.log(typeof function () {} === "function");

// console.log(null.constructor) // null에서는 constructor가 존재하지 않아서 읽을 수 없다
console.log([].constructor === Array);
console.log({}.constructor === Object);

console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType("Hello"));
console.log(checkType(123));
console.log(checkType(false));
console.log(checkType(undefined));
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(function () {}));
//-----------------------------------------------------------------------------------------
// 산술, 할당, 증감 연산자

// 산술
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3)); // false
console.log(isEven(12)); // true

// 할당
// const a8 = 3 // const는 재할당이 불가능한 변수
let a8 = 3;
a8 = a8 + 2; // a8 += 2
// a8 -= 2
// a8 *= 2
// a8 /= 2
// a8 %= 2

console.log(a8); // 5

//-----------------------------------------------------------------------------------------
// 증감 연산자

let a9 = 3; // 변수 a9는 언제든 재할당이 가능하다

console.log(a9++); // 3
console.log(++a9); // 5
console.log(a9); // 5
console.log(a9--); // 5
console.log(--a9); // 3
console.log(a9); // 3

//-----------------------------------------------------------------------------------------
// 부정(Negation)

console.log(!true); // false
console.log(!false); // true

console.log(!0); // true
console.log(!!0); // false
console.log(!!!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true
console.log(!""); // true

console.log(!{}); // false
console.log(![]); // false

//-----------------------------------------------------------------------------------------
// 비교(Comparison)

const a10 = 1;
const b10 = 3;

console.log(a == b); // false, 동등 연산자, 형 변환이 된다
console.log(a != b); // true, 부동 연산자
console.log(a === b); // false, 일치 연산자
console.log(a !== b); // true, 불일치 연산자
console.log(a > b); // false, 비교 연산자
console.log(a >= b); // false
console.log(a < b); // true
console.log(a <= b); // true

//-----------------------------------------------------------------------------------------
// 논리(Logical)

const a11 = true;
const b11 = false;

// AND 연산자
if (a11 && b11) {
  console.log("모두가 참!");
}

// OR 연산자
if (a11 || b11) {
  console.log("하나 이상이 참!");
}

// AND 연산자
console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log(0 && 1 && 2); // 0
console.log("A" && "B" && ""); // '' 빈 문자열 출력
console.log("A" && "B" && "C"); // C, 모두가 참이면 가장 마지막 참 값이 반환

// OR 연산자
console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // {}
console.log(false || [] || null); // []
console.log(function () {} || undefined || ""); // function() {}
console.log(false || 0 || NaN); // NaN

//-----------------------------------------------------------------------------------------
// Nullish 병합(Nullish Coalescing)

const n = 0;

// OR 연산자를 사용한 경우 -> 거짓이 아닌 참을 찾는다
const num1 = n || 7;
console.log(num1); // 7

// Nullish 병합 연산자를 사용한 경우 -> null, undefined는 건너뛰고 다른 데이터는 만나자마자 반환
const num2 = n ?? 7; // n이 0이기 때문(null, undefined가 아니라서)에 바로 반환
console.log(num2); // 0

console.log(null ?? 1); // null을 건너뛰고 1을 만나기 때문에 1을 출력
console.log(undefined ?? 2); // undefined를 건너뛰고 2를 만나기 때문에 2를 출력
console.log(null ?? undefined); // undefined가 마지막 데이터이기 때문에 출력
console.log(null ?? 1 ?? 2); // 1
console.log(false ?? 1 ?? 2); // false
console.log(0 ?? 1 ?? 2); // 0

//-----------------------------------------------------------------------------------------
// 삼항(Ternary)

const a12 = 1;

if (a12 < 2) {
  console.log("참!");
} else {
  console.log("거짓!");
}

console.log(a12 < 2 ? "참!" : "거짓!"); // 참!

function getAlert(message) {
  return message ? message : "메시지가 존재하지 않습니다!";
}

console.log(getAlert("안녕하세요~")); // 참
console.log(getAlert("")); // 거짓

//-----------------------------------------------------------------------------------------
// 전개 연산자

const a13 = [1, 2, 3];

console.log(a13); // [1, 2, 3]
console.log(...a13); // 1 2 3 -> 전개 연산자
console.log(1, 2, 3);

const b13 = [4, 5, 6];

const c13 = a13.concat(b13);
console.log(c13);

// const d13 = [a13, b13]
// console.log(d13)

const d13 = [...a13, ...b13];

const a14 = { x: 1, y: 2 };
const b14 = { y: 3, z: 4 };

const c14 = Object.assign({}, a, b);
console.log(c14);

const d14 = { ...a14, ...14 };
console.log(d14);

function fn(x, y, z) {
  console.log(x, y, z);
}

fn(1, 2, 3);

const a15 = [1, 2, 3];
fn(...a15);
//-----------------------------------------------------------------------------------------
// 구조 분해 할당

const arr = [1, 2, 3];
// const a16 = arr[0]
// const b16 = arr[1]
// const c16 = arr[2]

// 구조 분해 할당
const [a16, b16, c16] = arr; // 배열을 배열구조에 할당

console.log(a16, b16, c16);

// const [a17, rest] = arr
// console.log(a17, rest) // rest에 2번째 값이 들어가고 3번째 값은 사라짐

// 전개 연산자 적용
const [a17, ...rest] = arr;
console.log(a17, rest); // 1, [2, 3]

// 객체 구조 분해 할당
const obj = {
  a18: 1,
  b18: 2,
  c18: 3,
  x: 7,
  y: 100,
};
// const a18 = obj.a18
// const b18 = obj.b18
// const c18 = obj.c18

const { c18, ...rest2 } = obj;
// console.log(a18, b18/*, c18*/) // in.js:500 Uncaught ReferenceError: c18 is not defined
console.log(c18, rest2);
//-----------------------------------------------------------------------------------------
// 선택적 체이닝(Optional Chaining)

const user3 = undefined;

// console.log(user3.name) // null, undefined 데이터에는 점 표기법을 사용할 수 없음
console.log(user3?.name); // null, undefined여도 점 표기법 앞에 ?를 달아주면 오류를 발생시키지 않음

const userA2 = {
  name: "JINHO",
  age: 31,
  address: {
    country: "Korea",
    city: "Seoul",
  },
};

const userB2 = {
  name: "Neo",
  age: 22,
};

function getCity(user) {
  return user.address?.city || "주소 없음";
  // 물음표를 달아주어서 오류 발생을 막는다
  // || 연산자를 사용하면 앞이 null, undefined라면 뒤를 반환한다
}

console.log(getCity(userA2));
console.log(getCity(userB2));
//-----------------------------------------------------------------------------------------
// If 조건문

/*
// 1.
if(조건) {

}

// 2.
if(조건) {
    
}else{

}

// 3.
if(조건1){

}else if(조건2){

}else if(조건3){

}else{

}
 */
//-----------------------------------------------------------------------------------------

function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else if (number < 0) {
    return "음수";
  } else {
    return "0";
  }
  // return undefined // return의 기본값은 undefined
}

console.log(isPositive(1));
console.log(isPositive(10));
console.log(isPositive(-2));
console.log(isPositive(0));
//-----------------------------------------------------------------------------------------
// Switch 조건문

/*
switch(조건) {
    case 값1:
        break // break가 없으면 다음 조건문으로 넘어가기 때문에 주의!
    case 값2:
        break
    default:
}
 */
//-----------------------------------------------------------------------------------------

function price(fruit) {
  // let p
  switch (fruit) {
    case "Apple":
      // p = 1000
      // break
      return 1000;
    case "Banana":
      // p = 1500
      // break
      return 1500;
    case "Cherry":
      // p = 2000
      // break
      return 2000;
    default:
      return 0;
  }
  // return p

  /*
    if(fruit === 'Apple') {
        return 1000
    }else if(fruit === 'Banana') {
        return 1500
    }else if(fruit === 'Cherry') {
        return 2000
    }else {
        return 0
    }
     */
}

console.log(price("Apple"));
console.log(price("Banana"));
console.log(price("Cherry"));
console.log(price("Hello"));
//-----------------------------------------------------------------------------------------
// For 반복문

/*
for (초기화; 조건; 증감) {
  // 반복 실행할 코드
}
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 9; i > -1; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
//-----------------------------------------------------------------------------------------
// For of 반복문

const fruits4 = ["Apple", "Banana", "Cherry"];

/*
for (let i = 0; i < fruits4.length; i++) {
  console.log(fruits[i]);
}
 */

for (const fruit of fruits4) {
  // 개선된 포문..?
  console.log(fruit);
}
//-----------------------------------------------------------------------------------------
// For of 반복문

const users2 = [
  {
    name: "JINHO",
    age: 31,
  },
  {
    name: "Neo",
    age: 22,
  },
  {
    name: "Lewis",
    age: 34,
  },
];

for (let i = 0; i < users2.length; i++) {
  console.log(users2[i].name);
}

for (const user of users2) {
  console.log(user.name);
}
//-----------------------------------------------------------------------------------------
// For in 반복문

const user4 = {
  name: "Jinho",
  age: 31,
  isValid: true,
  email: "jinho@naver.com",
};

for (const key in user4) {
  // 속성(name, age, isValid, email 등)을 출력
  console.log(key);
  console.log(user4[key]); // 대괄호 표기법
}
//-----------------------------------------------------------------------------------------
// While 반복문

let n2 = 0;
while (n2 < 4) {
  // 언제 거짓으로 변하는지가 아주아주아주아주 중요!
  console.log(n2);
  n2++;
}
//-----------------------------------------------------------------------------------------
// Do While 반복문

let n3 = 0;
/*
while (n3) {
  console.log(n3);
}
 */

do {
  // 조건을 먼저보지 않고 do {} 부분을 먼저 실행시킨다(최초 1번은 무조건 실행)
  // 이후 while의 조건문에 따라 do를 실행시킬지 탈출할지 결정한다
  console.log(n3);
  n3++;
} while (n3 < 4);
