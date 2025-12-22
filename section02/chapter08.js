// 5가지 요소 순회 및 탐색 메서드

/* 
    1. forEach
     - 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
*/

let arr = [1, 2, 3];
arr.forEach(function (item, idx, arr) {
    /* console.log(idx, item * 2, arr); */
});

let doubleArr = [];

arr.forEach((item, idx) => {
    doubleArr.push(item * 2);
});

console.log(doubleArr);

/* 
    2. inlcudes
     - 배열에 특정 요소가 있는지 확인하는 메서드
*/

let arr2 = [1, 2, 3];
let isInlcudes = arr2.includes(3);

console.log(isInlcudes);

/* 
    3. indexOf
     - 특정요소의 인덱스(위치)를 찾아서 반환
     - 중복된 값이 있는 배열은 배열에 맨 앞에서부터 찾아서 반환
     - 특정값 입력시 배열에 없는경우는 -1로 반환한다.
*/

let index = arr2.indexOf(20);
console.log(index);

/* 
    4. findIndex
     - 특정 요소의 인덱스(위치)를 반환한다
     - 모든 요소를 순회하면서 콜백함수를 만족하는 그런
*/

let findIdx = arr2.findIndex((item) => {
    if (item === 2) {
        return true;
    }
});
console.log(findIdx);

/* 
    5. find
     - 모든요소를 순회하면서 콜백함수를 만족하는 요소를 찾고, 요소를 그대로 반환
*/

let objectArr = [{ name: "조윤후" }, { name: "백진주" }];

const findItem = objectArr.find((item) => {
    if (item.name === "조윤후") {
        return true;
    }
});

console.log(findItem);
