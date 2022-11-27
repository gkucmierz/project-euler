
// https://projecteuler.net/problem=21
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
  for (let i = 1; i < max; ++i) {
    let div = 1;
    for (let j = 0; j < size; ++j) {
      if ((1 << j) & i) {
        div *= factors[j];
      }
      divisors.add(div);
    }
  }
  divisors.delete(1);
  return [...divisors].sort((a, b) => a - b);
};

const sumDiv = n => divisors(n).reduce((a, b) => a + b, 0) + 1;

let sum = 0;
for (let i = 1; i < 1e4; ++i) {
  const candidate = sumDiv(i);
  if (candidate === i) continue;
  if (sumDiv(candidate) !== i) continue;
  sum += i;
}
console.log(sum); // 31626
