// 1. 콜백함수
function main(value) {
    value();
}

main(() => {
    //   console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (value) => {
    console.log(value);
});

console.log("-------------");

repeat(5, (idx) => {
    console.log(idx * 2);
});
console.log("-------------");

repeat(5, (idx) => {
    console.log(idx * 3);
});
console.log("-------------");
function SD() {
    console.log(arguments[0]);
}

SD(555);
