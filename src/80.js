
// https://projecteuler.net/problem=80

const squareRootBI = n => {
  if (n === 0n) return 0n;
  if (n < 4n) return 1n;
  if (n < 9n) return 2n;
  if (n < 16n) return 3n;
  let res = BigInt(n.toString().substr(0, n.toString().length / 2));
  let last;
  while (true) {
    last = res;
    res = (res + n / res) / 2n;
    const p = res * res;
    if (p === n) return res;
    if (last === res) return res;
    const next = p + res * 2n - 1n;
    if (n > next) return res;
  }
  return res;
};

const sumd = n => {
  const d = 100;
  const m = 10n ** BigInt(d * 2);
  const bi = BigInt(n);
  const sq = squareRootBI(bi * m) + '';
  let sum = 0;
  for (let i = 0; i < d; ++i) {
    sum += +sq[i];
  }
  return sum;
};

let sum = 0;
for (let i = 0; i < 100; ++i) {
  if (i ** 0.5 % 1 === 0) continue;
  sum += sumd(i);
}

console.log(sum); // 40886
