/* 변수 선언 */
let box = 123;
/* 변수 참조 */
console.log(box * 2);

/* 재할당 */
box = 345;
console.log(box);

/*  let 재할당 O, 재선언 X */

/* 상수 변수 , const 재할당, 재선언 X */
const word = "abc";

const secondWord = "abc";
secondword = "def";

/* var 재할당, 재선언 O */
var uniqueWord = "unique";
var uniqueWord = "ununiqueWord";

/*  camelCase snake_case PascalCase */

/* String, Number */
console.log("Hello " + "world");

console.log(1 + 2);

console.log(3 - 1);

console.log(10 / 2);

console.log("a" + 1); /* 문자 + 숫자는 문자열로 반환 */

console.log("1" + 1); /* 문자열 11 반환 */

console.log(1 + ""); /* 문자열로 변환 */

console.log("a" * 1); /* NaN (Not a Number) */

console.log("2" * 2); /* 숫자로 변환 후 4로 반환 */

/* Array, Object */
let ranking = [
  "jason",
  "Alice",
  "Chris",
  "Jane",
  "Tom",
]; /* 배열 속 데이터 = 요소(Element), 각 순서대로 index 값을 가진다 (0부터 차례로 증가) 
      ranking[0] --> "Jason" 
      ranking[1] --> "Alice" 
      ranking[2] --> "Chris" 
      순서가 존재하는 데이터 창고 */
