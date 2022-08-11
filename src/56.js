
// https://projecteuler.net/problem=56

const MAX = 100n;

let max = 0;
for (let i = 1n; i < MAX; ++i) {
  for (let j = 1n; j < MAX; ++j) {
    const n = i ** j;
    const sum = [...n+''].reduce((a, b) => a + +b, 0);
    if (sum > max) max = sum;
  }
}

console.log(max); // 972
