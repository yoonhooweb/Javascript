// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

let varD = function () {
    return 12;
};

console.log(varD());
