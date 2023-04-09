
// https://projecteuler.net/problem=95

const MAX = 1e6;

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
  return [...divisors].sort((a, b) => a - b);
};

const next = n => {
  return divisors(n).reduce((a, b) => a + b, 0);
};

const map = new Map();
const amicable = new Set();

for (let i = 1; i <= MAX; ++i) {
  let n = i;
  while (1) {
    if (map.has(n)) {
      break;
    }
    const tmp = next(n);
    if (tmp > MAX) break;
    map.set(n, tmp);
    n = tmp;
  }
  n = i;
  const visited = new Set();
  while (map.has(n)) {
    const tmp = map.get(n);
    visited.add(n);
    if (tmp === i) amicable.add(i);
    if (visited.has(tmp)) break;
    n = tmp;
  }
}

const chains = [...amicable].map(ami => {
  let n = ami;
  let chain = [ami];
  let cnt = 1000;
  while (--cnt) {
    const tmp = map.get(n);
    chain.push(tmp);
    if (tmp === ami) break;
    n = tmp;
  }
  return chain;
});

const lengths = chains.map(c => c.length);
const maxLen = Math.max(...lengths);

const maxChains = chains.filter(c => c.length === maxLen);

// maxChains.map(c => c.join(' -> '));

console.log(
  Math.min(...maxChains.map(c => Math.min(...c))) // 14316
);
