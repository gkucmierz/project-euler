
// https://projecteuler.net/problem=2

const MAX = 4e6;

let [a, b] = [1, 1];
let sum = 0;

while (b < MAX) {
  [a, b] = [b, a + b];
  if (b % 2 === 0) {
    sum += b;
  }
}

console.log(sum); // 4613732
