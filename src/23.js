
// https://projecteuler.net/problem=23

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
  const divisors = new Set([1]);
  for (let i = 1; i < max; ++i) {
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

const sum = n => divisors(n).reduce((a, b) => a + b, 0);
const MAX = 28123;
const abu = new Set();
for (let i = 1; i <= MAX; ++i) {
  const s = sum(i);
  if (s > i) abu.add(i);
}
const abuArr = [...abu];

const findSum = n => {
  let j = 0;
  for (let i = abuArr.length - 1; i >= 0; ) {
    const s = abuArr[j] + abuArr[i];
    if (s === n) return [abuArr[j], abuArr[i]];
    if (s > n) {
      --i;
    } else {
      ++j;
    }
  }
  return null;
};

let suma = 0;
for (let i = 1; i <= MAX; ++i) {
  let s = findSum(i)
  if (s === null) suma += i;
}

console.log(suma); // 4179871
