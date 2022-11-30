
// https://projecteuler.net/problem=51

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
const combinations = (n, k) => {
  const arr = new Array(n).fill(0).map((_, i) => i);
  const res = [];
  
  const next = (arr, n, max) => {
    if (n < 0) return;
    for (let i = arr[n] + 1; i < max; ++i) {
      arr[n] = i;
      res.push(arr.slice());
      next(arr.slice(), n - 1, arr[n]);
    }
  };
  
  res.push(arr.slice());
  next(arr, n - 1, k);
  
  return res;
};

const MAX = 1e6;
const sieve = Sieve(MAX);
const primes = sieve.getPrimes(MAX);
const set = new Set(primes);

const zeroPos = (n, arr) => {
  return arr.reduce((n, pos) => {
    const t = (10 ** pos);
    const mod = n % (10 ** (pos+1));
    const p = mod / t | 0;
    return n - t * p;
  }, n);
};
const getDiff = arr => {
  return arr.reduce((n, pos) => n + 10 ** pos, 0);
};
const getIter = function*(n, arr) {
  const start = zeroPos(n, arr);
  const diff = getDiff(arr);
  for (let i = 1; i < 10; ++i) {
    yield start + diff * i;
  }
};

const posArr = [0, 2, 4, 6];

// zeroPos(n, posArr);
// getDiff(posArr);
// [...getIter(n, posArr)];

let res;
for (const prime of primes) {
  if (prime < 100) continue;
  const size = Math.floor(Math.log10(prime));
  for (let i = 1; i <= size; ++i) {
    const c = combinations(i, size).map(arr => arr.map(n => n+1));
    c.map(arr => {
      const found = [...getIter(prime, arr)].reduce((res, n) => {
        if (!sieve.isPrime(n)) return res;
        return res.push(n), res;
      }, []);
      if (found.length >= 8) {
        res = found[0];
      }
    });
    if (res) break;
  }
  if (res) break;
}

console.log(res); // 121313
