/* 배열순회 */

let arr = [1, 2, 3];

// 1.배열 인덱스
for (let i = 0; i < arr.length; i++) {
    /* console.log(i); 
    결과값 - 0,1,2
    console.log(arr[i]); 
    결과값 - 1,2,3 */
}

/* 
    2. for of 반복문
     - 배열을 순회할때만 사용한다.
     - 인덱스를 저장하지않고 배별안에 값만 순회한다.
 */
for (const item of arr) {
    /* console.log(item);  */
}

/* 3. 객체 순회하는방법 */

let person = {
    name: "조윤후",
    age: 30,
    hobby: "컴퓨터",
};

/* 
    3. object.keys 사용
     - 객체에서 key 값들만 뽑아서 새로운 배열로 반환한다.
 */

let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    /* console.log(keys[i]);
    결과값 - name, age, hobby
    console.log(person[keys[i]]);
    결과값 - 조윤후, 30, 컴퓨터
    */
}

for (const key of keys) {
    /* console.log(person[key]);
    결과값 - 조윤후, 30, 컴퓨터 */
}

/* 
    4. object.values
     - 객체에서 밸류값만 뽑아서 새로운 배열로 반환
*/
let values = Object.values(person);
for (const value of values) {
    /* console.log(value);
    결과값 - 조윤후, 30, 컴퓨터 */
}

/* 
    5. for in
     - 객체만을 위해 사용한다.
*/

for (let key in person) {
    let value = person[key];
    console.log(key, value);
}
