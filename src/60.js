
// https://projecteuler.net/problem=60

const MAX_SIEVE = 1e8;
const MAX_ITER = 1e4;

const Sieve = (max = 1e5) => {
  const maxi = Math.sqrt(max);
  const notPrime = new Int8Array(max);
  notPrime[0] = notPrime[1] = 1;
  for (let i = 2; i < maxi; ++i) {
    if (notPrime[i] === 0) {
      for (let j = 2*i; j < max; j += i) {
        notPrime[j] = 1;
      }
    }
  }
  return {
    isPrime: n => !notPrime[n],
    getPrimes: n => {
      const res = [];
      let cnt = 0;
      const limit = Math.min(max, n);
      for (let i = 0; i < limit; ++i) {
        if (!notPrime[i]) {
          res[cnt++] = i;
        }
      }
      return res;
    }
  };
};

const sieve = Sieve(MAX_SIEVE);

const primes = sieve.getPrimes(MAX_ITER);

const check = (p1, p2) => {
  const str = [p1, p2].join('');
  const n = +str;
  if (n > MAX_SIEVE) return false;
  return sieve.isPrime(n);
};

const map = new Map();

const addMap = (p1, p2) => {
  const set = map.get(p1) ?? new Set();
  set.add(p2);
  map.set(p1, set);
};

for (let i = 0; i < primes.length; ++i) {
  for (let j = i + 1; j < primes.length; ++j) {
    const [p1, p2] = [primes[i], primes[j]];
    if (!check(p1, p2)) continue;
    if (!check(p2, p1)) continue;
    addMap(p1, p2);
    addMap(p2, p1);
  }
}

const res = new Map();
const addRes = arr => {
  if (arr.length < 5) return;
  const cpy = arr.slice().sort((a, b) => a - b);
  const hash = cpy.join(',');
  res.set(hash, cpy);
};

const buildPairs = arr => {
  const last = arr.at(-1);
  let mod = false;
  for (const pair of map.get(last)) {
    if (arr.includes(pair)) continue;
    const isPair = arr.every(n => check(n, pair) && check(pair, n));
    if (!isPair) continue;
    arr.push(pair);
    buildPairs(arr);
    arr.pop();
    mod = true;
  }
  if (!mod) {
    addRes(arr);
  }
};

for (const [n] of map) {
  buildPairs([n]);
}

console.log(
  [...res][0][1].reduce((a, b) => a + b) // 26033
);
