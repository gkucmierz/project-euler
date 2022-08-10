
// https://projecteuler.net/problem=28

const SIZE = 1001;

let sum = 1;
let cnt = 1;
for (let i = 0 ; i < (SIZE - 1) / 2; ++i) {
  for (let j = 0; j < 4; ++j) {
    cnt += 2 * (i + 1);
    sum += cnt;
  }
}

console.log(sum); // 669171001
