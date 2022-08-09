
// https://projecteuler.net/problem=47

const FACTORS = 4;

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

let cnt = 0;
for (let i = 1; 1; ++i) {
  const f = new Set(factors(i));
  cnt = f.size === FACTORS ? cnt + 1 : 0;
  if (cnt === FACTORS) {
    console.log(i - FACTORS + 1); // 134043
    break;
  }
}
