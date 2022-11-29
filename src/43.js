
// https://projecteuler.net/problem=43

const primes = [2, 3, 5, 7, 11, 13, 17];
const last = primes.pop();

const res = [];

const digits = new Array(10).fill(0).map((_, i) => i);

const pandigitalStep = arr => {
  const set = new Set(arr);
  if (set.size < 9) return;
  res.push(
    +[...new Set([...[...set].reverse(), ...digits])]
    .reverse()
    .join('')
  );
};

const find = (primes, arr) => {
  const prime = primes.pop();
  if (!prime) return pandigitalStep(arr);
  arr.unshift(0);
  for (let i = 0; i <= 9; ++i) {
    arr[0] = i;
    const n = arr[0] * 100 + arr[1] * 10 + arr[2];
    if (n % prime !== 0) continue;
    find(primes, arr);
  }
  arr.shift();
  primes.push(prime);
};

for (let i = 100 + (last - 100 % last); i < 1000; i += last) {
  const num = [...i+''].map(n => +n);
  find(primes, num);
}

res.reduce((a, b) => a + b, 0) // 16695334890
