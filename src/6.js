
// https://projecteuler.net/problem=6

const MAX = 100;

let sum = 0;
let sq = 0;
for (let i = 1; i <= MAX; ++i) {
  sum += i;
  sq += i * i;
}

console.log(sum * sum - sq); // 25164150
