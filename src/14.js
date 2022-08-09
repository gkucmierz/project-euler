
// https://projecteuler.net/problem=14

const MAX = 1e6;

const next = n => {
  if (n % 2 === 0) return n / 2;
  return n * 3 + 1;
};

const length = n => {
  let cnt = 0;
  while (n !== 1) {
    n = next(n);
    ++cnt;
  }
  return cnt;
};

let max = 0;
let res;
for (let i = 1; i < MAX; ++i) {
  const len = length(i);
  if (len > max) {
    max = len;
    res = i;
  }
}

console.log(res); // 837799
