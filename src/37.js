
// https://projecteuler.net/problem=37

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

console.log(
  primes.filter(p => {
    const str = p + '';
    let ok = true;
    for (let i = 0; i < str.length - 1; ++i) {
      const c1 = !sieve.isPrime(+str.substr(0, i + 1));
      const c2 = !sieve.isPrime(+str.substr(i + 1));
      if (c1 || c2) {
        ok = false;
        break;
      }
    }
    return p >= 10 && ok;
  }).reduce((a, b) => a + b, 0) // 748317
);
