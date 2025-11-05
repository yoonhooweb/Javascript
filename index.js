/* let a = 10; */
let b = 20;

/* a += 1; */

/* console.log(a); */

const res = 10 < 20 && 10 == 10;
console.log(res);

const res2 = true && 0 && 10 < 20;
console.log(res2);

const BMI = 65 / (1.72 * 1.72);

console.log(BMI);

const tall = 172 / 10;
const kg = 65;

const c = kg / (tall * tall);

console.log(c);

let score = "30";

if (score >= 90) {
    console.log(`A학점입니다.`);
} else if (score >= 80 && score < 90) {
    console.log("B학점");
} else if (score >= 70 && score < 80) {
    console.log("C학점");
} else if (score >= 60 && score < 70) {
    console.log("D학점");
} else {
    console.log("낙점");
}

switch (score) {
    case "1":
        console.log("a");
        break;
    case "2":
        console.log("b");
        break;
    case "30":
        console.log("c");
        break;
    case "20":
        console.log("d");
        break;
    default:
        console.log("test");
}

let num = 1;

while (num < 10) {
    console.log(num);
    num++;
}

/* for (let i = 2; i <= 9; i++) {
    console.log(`${i}단 입니다.`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i + "x" + j}= ${i * j}`);
    }
} */

const arr = [10, 20, 30];
const tasks = {
    name: "철수",
    age: 20,
};

for (let task in tasks) {
    console.log(tasks[task]);
}

for (let task of tasks) {
    console.log(tasks[task]);
}

function sum(num1, ...args) {
    console.log(num1);
    console.log(args);
    return args;
}

sum(10, 20, 30);

function ex2(num) {
    return num * num;
}

console.log(ex2(5));

const a = 10;
function sum(b) {
    return a + b;
}
console.log(sum(5)); // 출력 값은 ? -> 15

function multiple(c) {
    return sum(5) * c;
}
console.log(multiple(4)); // 출력 값은 ? -> 60

function division(d) {
    const a = 4;
    function inner(e) {
        return a / e;
    }
    return inner(d);
}
console.log(division(2)); // 출력 값은? -> 2

function A2() {
    console.log("A환경");
}
function B2(callback, callback2) {
    setTimeout(() => {
        console.log("B환경");
        callback();
        callback2();
    }, 0);
}
function C2() {
    console.log("C환경");
}
function D2() {
    console.log("D환경");
}

A2();
B2(C2, D2);
console.log("after");

function count(n, callback) {
    setTimeout(() => {
        let sum = n + 1;
        console.log(sum);
        if (callback) {
            callback(sum);
        }
    }, 0);
}

count(0, (n) => {
    count(n, function (n) {
        count(n);
    });
});

new Promise(function (resolve, reject) {
    // 비동기 로직
    // 1. 대기(pending) : promise코드가 본격적으로 시작되기 전 상태
    console.log("시작함");
    // 2. 이행(fulfilled) :
    resolve(1);
    // 3. 거절(rejected) : resolve가 있으면 실행안됨
    /* reject(new Error("데이터를 불러오지 못했습니다.")); */
})
    .then((res) => {
        //resolve에서 매개변수를 받을수 있다.
        return res * 3;
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        //reject 에서 매개변수 받을수있따.
        console.log(err);
    });

function counter(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = n + 1;
            console.log(sum);
            if (n > 5) {
                reject(new Error("5보다 클수 없습니다."));
            } else {
                resolve(sum);
            }
        });
    });
}

counter(0).then((a) => counter(a));
