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
