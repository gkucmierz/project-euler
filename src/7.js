
// https://projecteuler.net/problem=7

const N = 10001;
const m = 20;

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
      for (let i = 0; i <= n; ++i) {
        if (!notPrime[i]) {
          res[cnt++] = i;
        }
      }
      return res;
    }
  };
};

const sieve = Sieve(N * m);

console.log(sieve.getPrimes(N * m)[N-1]); // 104743
