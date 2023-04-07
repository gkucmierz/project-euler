
// https://projecteuler.net/problem=1

let sum = 0;
for (let i = 0;i < 1e3; ++i) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum); // 233168


// formula's solution:
//
// max = 999;
// a = (max / 5 | 0) * (max / 5 + 1 | 0) / 2 * 5;
// b = (max / 3 | 0) * (max / 3 + 1 | 0) / 2 * 3;
// c = (max / 15 | 0) * (max / 15 + 1 | 0) / 2 * 15;
//
// a+b-c
