/* 
    1. Spread 연산자
     - 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 개념
*/

let arr = [1, 2, 3];
let arr1 = [4, ...arr, 5, 6];

/* console.log(arr1); */

let obj = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj,
    c: 3,
    d: 4,
};

/* console.log(obj2); */

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

/* funcA(...arr); */

/* 
    Rest매개변수
     - rest는 나머지, 나머지 배개변수다
     - 인수, ...rest 를 사용하면 첫번째 배열값은 one 나머지는 rest에 들어간다
*/

function funcB(one, ...rest) {
    console.log(rest);
}

funcB(...arr);

let o1 = {
    name: "조윤후",
};
