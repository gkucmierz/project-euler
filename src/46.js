
// https://projecteuler.net/problem=46

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

const MAX = 1e6;
const sieve = Sieve(MAX);
const primes = sieve.getPrimes(MAX);
const set = new Set(primes);

for (let i = 2; i < MAX; ++i) {
  if (i % 2 === 0) continue;
  if (sieve.isPrime(i)) continue;
  const maxsq = (i/2) ** 0.5 | 0;
  let can = false;
  for (let sq = 1; sq <= maxsq; ++sq) {
    const d = i - (sq ** 2) * 2;
    if (!set.has(d)) continue;
    can = true;
    break;
  }
  if (can) continue;
  console.log(i); // 5777
  break;
}
