
// https://projecteuler.net/problem=41

const MAX_DIGITS = 9;

const checkDigits = DIGITS => {
  const MAX = 10 ** DIGITS;

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

  const sieve = Sieve(MAX);
  const primes = sieve.getPrimes(MAX);

  for (let i = primes.length - 1; i >= 0; --i) {
    const set = new Set([...primes[i]+'']);
    if (set.size === DIGITS) {
      let good = true;
      for (let j = 1; j <= DIGITS; ++j) {
        if (!set.has(j+'')) good = false;
      }
      if (good) {
        return primes[i];
      }
    }
  }
  
  return -1;
}

for (let i = MAX_DIGITS; i > 0; --i) {
  const res = checkDigits(i);
  if (res !== -1) {
    console.log(res); // 7652413
    break;
  }
}
