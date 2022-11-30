
// https://projecteuler.net/problem=55

const getInverseNum = (ZERO, TEN) => {
  return n => {
    let res = ZERO;
    while (n) {
      const mod = n % TEN;
      res = res * TEN + mod;
      n = (n - mod) / TEN;
    }
    return res;
  };
};

const inverseNum = getInverseNum(0, 10);
const inverseNumBI = getInverseNum(0n, 10n);

const isLychrel = n => {
  for (let i = 0; i < 50; ++i) {
    const inv = inverseNumBI(n);
    if (inv === n && i > 0) return false;
    n += inv;
  }
  return true;
};

let cnt = 0;
for (let i = 1n; i < 10_000n; ++i) {
  if (isLychrel(i)) ++cnt;
}

console.log(cnt); // 249
