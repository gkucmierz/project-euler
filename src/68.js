
// https://projecteuler.net/problem=68

const permutationsGenerator = function*(sizeOrArr) {
  const arr = sizeOrArr.map ? sizeOrArr.slice() : new Array(sizeOrArr).fill(0).map((_, i) => i);
  const size = arr.length;

  const gen = function*(res, used, shift) {
    const len = size - used;

    if (len === 0) yield res;

    for (let i = 0; i < len; ++i) {
      const iter = gen([...res, shift[i]], used + 1, [...shift.slice(0, i), ...shift.slice(i + 1)]);
      for (let val of iter) yield val;
    }
  };

  const iter = gen([], 0, arr);
  for (let val of iter) yield val;
};

let max = 0;
const arr = new Array(10).fill(0).map((_, i) => i + 1);
for (const p of permutationsGenerator(arr)) {
  const ring = [
    // [p[0], p[3], p[4]],
    // [p[1], p[4], p[5]],
    // [p[2], p[5], p[3]],
    [p[0], p[5], p[6]],
    [p[1], p[6], p[7]],
    [p[2], p[7], p[8]],
    [p[3], p[8], p[9]],
    [p[4], p[9], p[5]],
  ];
  const externals = ring.map(arr => arr[0]);
  const min = Math.min(...externals);
  if (ring[0][0] !== min) continue;
  const sums = ring.map(arr => arr.reduce((a, b) => a + b));
  const sum = sums.reduce((last, curr) => last === curr ? curr : -1);
  if (sum === -1) continue;
  const concat = ring.map(arr => arr.join('')).join('');
  if (concat.length !== 16) continue;
  // console.log(externals.join(' '), concat);
  max = Math.max(max, +concat);
}

console.log(max); // 6531031914842725
