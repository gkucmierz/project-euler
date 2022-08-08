
// https://projecteuler.net/problem=5

const MAX_N = 20;

function factors(n) {
  let max = Math.floor(Math.sqrt(n));
  let res = [];
  for (let i = 2; i <= max; ++i) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min(...res) || 2) - 1;
    }
  }
  res.push(n);
  return res;
}

let prod = 1;
const f = [];
for (let i = 2; i <= MAX_N; ++i) {
  prod *= i;
  f.push(...factors(i));
}

const isDiv = n => {
  for (let i = 2; i <= MAX_N; ++i) {
    if (n % i !== 0) return false;
  }
  return true;
};

f.map(n => {
  if (isDiv(prod / n)) {
    prod /= n;
  }
});

console.log(prod); // 232792560
