
// https://projecteuler.net/problem=77

const MAX_P = 1e4;
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

const sieve = Sieve(MAX_P);
const primes = sieve.getPrimes(MAX_P);

const waysSumPrimesTo = n => {
  const arr = primes.filter(p => p <= n).reverse();
  return waysSumTo(n, arr);
};

const naturalSearch = (cond, retFirstTrue = true) => {
  let min = 1;
  let max = 1;
  while(1) {
    const stop = cond(max);
    if (stop) break;
    min = max;
    max *= 2;
  }
  let mid;
  while (1) {
    mid = Math.floor((min + max) / 2);
    const stop = cond(mid);
    if (stop) {
      max = mid;
    } else {
      min = mid;
    }
    const diff = max - min;
    if (max - min <= 1) {
      return retFirstTrue ? max : min;
    }
  }
};

const findIdxBinary = (arr, cond) => {
  const firstNatural = 1;
  return naturalSearch(n => {
    return cond(arr[n-firstNatural] || 0);
  }, true) - firstNatural;
};

const waysSumTo = (n, arr) => {
  const minPrime = 2;
  const loop = (left, max = left) => {
    if (left === 0) return 1;
    const idx = findIdxBinary(arr, n => n <= max);
    let sum = 0;
    for (let i = idx; i < arr.length; ++i) {
      const tmp = left - arr[i];
      if (tmp < 0) continue;
      sum += loop(tmp, arr[i]);
    }
    return sum;
  };

  return loop(n);
  return arr;
};

const res = naturalSearch(n => {
  const ways = waysSumPrimesTo(n);
  // console.log(n, ways);
  return ways > 5000;
});

console.log(res); // 71
