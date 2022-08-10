
// https://projecteuler.net/problem=53

const MAX = 100n;
const LIMIT = 1_000_000n;

const power = n => {
  if (n === 0n) return 1n;
  return n * power(n - 1n);
};

const nk = (n, k) => {
  return power(n) / (power(k) * power(n - k));
};

let cnt = 0;
for (let i = 1n; i <= MAX; ++i) {
  for (let j = i; j <= MAX; ++j) {
    if (nk(j, i) > LIMIT) ++cnt;
  }
}

console.log(cnt); // 4075
