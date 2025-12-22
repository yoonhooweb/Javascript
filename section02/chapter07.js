// 6가지 배열 조작 메서드

/* 
    1. push
     - 배열에 맨 뒤에 새로운 요소를 추가하는 메서드
*/

let arr = [1, 2, 3];
arr.push(3, 4, 5);
/* console.log(arr); */

/* 
    2. pop
     - 배열의 맨 뒤에 있는 요소를제거하고, 반환
     - 제거된값을 변수에 넣으면 확인가능
*/

let arr2 = [3, 4, 5];
let popItem = arr2.pop();
/* console.log(popItem, arr2); */

/* 
    3. shift
     - 배열에 맨 앞에 있는 요소를 제거하고 반환
     - 제거된값을 변수에 넣으면 확인가능
*/

let arr3 = [1, 2, 3];
let shiftItem = arr.shift();
/* console.log(shiftItem, arr2); */

/* 
    4. unshift
     -  배열에 맨 앞에 새로운 요소를 추가하는 메서드
*/

let arr4 = [1, 2, 3];
arr4.unshift(3, 4, 5);

/* console.log(arr4); */

/* 
    5. slice 
     - 배열에 특정 범위를 잘라내서 새로운 배열로 반환
     - 마지막 자르기전 인덱스 기준 + 1을 해야한다.
       ex)  2~5번까지 자르세요 하면 2번으로 시작해서 5로 끝나야한다.
     - 원본배열은 건드리지않는다.
*/
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(0, 3);
let sliced2 = arr5.slice(-1);

/* console.log(sliced);
console.log(sliced2); */

/* 
    6. concat
     - 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
*/

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

let newArr = arr6.concat(arr7);

console.log(newArr);
