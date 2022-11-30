
// https://projecteuler.net/problem=45

const tn = n => n * (1*n + 1) / 2;
const pn = n => n * (3*n - 1) / 2;
const hn = n => n * (2*n - 1) / 1;

const pSet = new Set();
const hSet = new Set();

for (let i = 2; i < 1e6; ++i) {
  pSet.add(pn(i));
  hSet.add(hn(i));
  // hexagonal raises fastest
  const t = tn(i);
  if (!pSet.has(t)) continue;
  if (!hSet.has(t)) continue;
  if (t === 40755) continue;
  console.log(t); // 1533776805
  break;
}
