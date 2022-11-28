
// https://projecteuler.net/problem=49

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
const MAX = 1e4;
const N = 3;
const sieve = Sieve(MAX);

const sanitize = n => {
  return [...n+''].map(n => +n).sort((a, b) => a-b).join('');
};

for (let i = 1000; i <= MAX; ++i) {
  if (!sieve.isPrime(i)) continue;
  if (i === 1487) continue;
  const digits = sanitize(i);
  for (let j = 1; j < MAX; ++j) {
    let cnt = 0;
    for (let k = 0; k < N; ++k) {
      const p = i + j * k;
      if (!sieve.isPrime(p)) break;
      if (digits !== sanitize(p)) break;
      ++cnt;
    }
    if (cnt === N) {
      console.log(
        +[i + j * 0, i + j * 1, i + j * 2].join('') // 296962999629
      );
    }
  }
}
