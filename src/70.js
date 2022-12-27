
// https://projecteuler.net/problem=70

const MAX = 1e7;

const factors = n => {
  if (n < 2) return [];
  const res = [];
  let max = Math.floor(Math.sqrt(n));
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
};

const getPhiEuler = factors => {
  return n => {
    return [...new Set(factors(n))].reduce((res, f) => res - res / f, n);
  };
};

const phi = getPhiEuler(factors);
const sortn = n => [...n+''].sort((a, b) => a.localeCompare(b)).join('');

let min = Infinity;
let res;
for (let i = 2; i < MAX; ++i) {
  const p = phi(i);
  const ratio = i / p;
  if (ratio < min) {
    if (sortn(i) !== sortn(p)) continue;
    min = ratio;
    res = i;
  }
}

console.log(res); // 8319823
