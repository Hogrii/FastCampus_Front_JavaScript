const string1 = "Hello"
const string2 = 'Hello' // "", '' 둘 중 하나 선택해서 사용하면 됨
const string3 = `Hello ${string1} ?!` // ${} 보관처리 >> 템플릿 리터럴.. `` 여기 안에서만 사용 가능

console.log(string3)

const number = -123.1234
const pi = .14 // 0이 자동으로 붙어서 0.14가 된다

console.log(number+1)
console.log(number+undefined) // NaN : Not a Number
console.log(typeof(number+undefined))
console.log(pi)
console.log(typeof(pi))

const a = 0.1
const b = 0.2

console.log(a+b) // 0.30000000004
                 // 부동 소수점 오류 >> 10진수를 2진수로 표현할 때 유한하게 표현하기 위해 계산상 올바른 데이터가 안올 수 있다
console.log((a+b).toFixed(1)) // 소수점 첫번째 자리까지만 남겨둔다
                              // toFixed는 숫자 >> 문자열로 바꾸기 때문에 주의할 필요가 있음
console.log(typeof(a+b).toFixed(1))
console.log(Number((a+b).toFixed(1)))

//-----------------------------------------------------------------------------------------
// Boolean
const a2 = true;
const b2 = false;

if(a2) {
    console.log('Hello')
}

let age = null; // 명시적 >> 값이 없다
let age2 = undefined; // 암시적 >> 값을 모른다

console.log(age)
console.log(age2)

// setTimeout(function () { // 뒤 시간만큼 있다가 실행
//     age = 85
//     age2 = 95
//     console.log(age)
//     console.log(age2)
// })

//-----------------------------------------------------------------------------------------
const user = {
    name: 'JINHO',
    age: 31,
    email: null
}

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.email) // user에 email이 없다는 것을 명시적으로 기입했기 때문에 null을 반환
console.log(user.abc)   // user에 값은 없지만 출력하려는 것에 대해 암시적인 undefined를 반환

//-----------------------------------------------------------------------------------------
// Array(배열)
const fruits = new Array('Apple', 'Banana', 'Cherry') // 배열의 요소(element), 아이템
const fruits2 = ['Apple2', 'Banana2', 'Cherry2'] // 배열 리터럴

console.log(fruits)
console.log(fruits2)
console.log(fruits2[1]) // Banana2 >> 인덱싱, 대괄호 표기법
console.log(fruits.length) // 배열의 길이
console.log(fruits[fruits.length-1]) // Cherry

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
    name: 'JINHO',
    age: 31
}
const key = 'name'

console.log(user2) // 객체데이터 내부에서 name이 먼저 만들어졌어도 순서가 있는 것이 아니기 때문에 age가 먼저 출력될 수 있다
console.log(user2.name) // 점 표기법
console.log(user2['age']) // 대괄호 표기법
console.log(user2[key])


const userA = {
    name: 'JINHO',
    age: 31
}

const userB = {
    name: 'NEO',
    age: 22,
    parent: userA
}

console.log(userB)
console.log(userB.parent)
console.log(userB.parent.name) // 점 표기법은 객체데이터에서 지속적으로 사용 가능
console.log(userB['parent'])
console.log(userB['parent']['name'])


const users = [userA, userB]

console.log(users[0].name)
console.log(users[0]['name'])

//-----------------------------------------------------------------------------------------
// function

function hello() {
    console.log('Hello!')
}

hello()
console.log(hello)

function getNumber() {
    return 123
}

console.log(getNumber) 
console.log(getNumber())// ()를 붙여주어야 함수가 실행된다, ()가 없으면 함수 그 자체가 출력
console.log(typeof getNumber) // function
console.log(typeof getNumber()) // number

const getNumber2 = function() { // 익명함수
    return 123
}

console.log(typeof getNumber2) // function
console.log(typeof getNumber2()) // number

const a3 = function() {
    console.log('A')
}

const b3 = function(c3) {
    console.log(c3)
    c3()
}

b3(a3)
