
// https://projecteuler.net/problem=50

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
const primesSum = [primes[1]];

for (let i = 1; i < primes.length; ++i) {
  primesSum[i] = primesSum[i-1] + primes[i];
}

let max = 0;
let prime;
for (let i = 0; i < primesSum.length; ++i) {
  for (let j = i + 1; j < primesSum.length; ++j) {
    const sum = primesSum[j] - primesSum[i];
    const diff = j - i;
    if (!set.has(sum)) continue;
    if (diff <= max) continue;
    max = diff;
    prime = sum;
  }
}

console.log(prime); // 997651
// console.log(max);
