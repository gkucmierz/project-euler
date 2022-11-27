
// https://projecteuler.net/problem=12
const primeFactors = n => {
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

// finds all divisors of a natural number
const divisors = n => {
  const factors = primeFactors(n);
  const size = factors.length;
  const max = 2 ** size - 1;
  const divisors = new Set();
  for (let i = 1; i <= max; ++i) {
    let div = 1;
    for (let j = 0; j < size; ++j) {
      if ((1 << j) & i) {
        div *= factors[j];
      }
      divisors.add(div);
    }
  }
  return [...divisors].sort((a, b) => a - b);
};

const TARGET_DIV = 500;
const triangle = n => n * (n + 1) / 2;

for (let i = 0; true; ++i) {
  const t = triangle(i);
  const d = divisors(t);
  if (d.length > TARGET_DIV) {
    console.log(t); // 76576500
    break;
  }
}
