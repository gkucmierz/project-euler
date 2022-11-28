
// https://projecteuler.net/problem=35

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

const cond1 = str => {
  return [...str].every(n => +n % 2 === 1);
};
const cond2 = str => {
  return new Array(str.length - 1).fill(0).every((_, i) => {
    return sieve.isPrime(+(str.substr(i+1) + str.substr(0, i+1)));
  });
};

console.log(
  sieve.getPrimes(MAX).reduce((cnt, p) => {
    const str = p + '';
    if (p === 2) return cnt + 1;
    if (!cond1(str)) return cnt;
    if (!cond2(str)) return cnt;
    return cnt + 1;
  }, 0) // 55
);
