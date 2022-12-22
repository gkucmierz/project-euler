
// https://projecteuler.net/problem=74

const fmap = new Map();
let m = 1;
for (let i = 0; i < 10; ++i) {
  m *= Math.max(1, i);
  fmap.set(i, m);
}

const chain = n => {
  const set = new Set([n]);
  while (1) {
    n = [...n+''].reduce((sum, n) => sum + fmap.get(+n), 0);
    if (set.has(n)) return set.size;
    set.add(n);
  }
};

let cnt = 0;
for (let i = 0; i < 1e6; ++i) {
  const cl = chain(i);
  if (cl >= 60) ++cnt;
}

console.log(cnt); // 402
