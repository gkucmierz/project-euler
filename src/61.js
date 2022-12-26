
// https://projecteuler.net/problem=61

const MAX = 6;

// Triangle   P3,n=n(n+1)/2   1, 3, 6, 10, 15, ...
// Square   P4,n=n2   1, 4, 9, 16, 25, ...
// Pentagonal   P5,n=n(3n−1)/2    1, 5, 12, 22, 35, ...
// Hexagonal    P6,n=n(2n−1)    1, 6, 15, 28, 45, ...
// Heptagonal   P7,n=n(5n−3)/2    1, 7, 18, 34, 55, ...
// Octagonal    P8,n=n(3n−2)    1, 8, 21, 40, 65, ...

const fns = [
  [1, +1, 2],
  [1, +0, 1],
  [3, -1, 2],
  [2, -1, 1],
  [5, -3, 2],
  [3, -2, 1],
].map(([a, b, c]) => n => n * (a * n + b) / c).slice(0, MAX);

const map = new Map();

const maps = fns.map((fn, fi) => {
  for (let i = 0; 1; ++i) {
    const val = fn(i);
    if (val < 1000) continue;
    if (val > 9999) break;
    const f2 = val / 100 | 0;
    const set = map.get(f2) ?? new Set();
    set.add([val, fi]);
    map.set(f2, set);
  }
  return map;
});

const buildChain = (arr, idxs) => {
  if (idxs.size >= MAX) {
    const f2 = arr[0] / 100 | 0;
    const l2 = arr.slice(-1)[0] % 100;
    if (f2 == l2) {
      // console.log(arr, idxs);
      console.log(
        arr.reduce((a, b) => a + b) // 28684
      );
    }
    return ;
  }
  const l2 = arr.slice(-1)[0] % 100;;
  const set = map.get(l2) || new Set();
  for (const [next, fidx] of set) {
    if (idxs.has(fidx)) continue;
    idxs.add(fidx);
    buildChain([...arr, next], idxs);
    idxs.delete(fidx);
  }
};

for (let i = 0; 1; ++i) {
  const val = fns[0](i);
  if (val < 1000) continue;
  if (val > 9999) break;
  buildChain([val], new Set([0]));
}
