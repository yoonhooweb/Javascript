let a = 10;
let b = 20;

a += 1;

console.log(a);

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

let score = 81;

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
