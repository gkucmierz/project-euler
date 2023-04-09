
// https://projecteuler.net/problem=93

const combinations = (n, k) => {
  const arr = new Array(n).fill(0).map((_, i) => i);
  const res = [];
  
  const next = (arr, n, max) => {
    if (n < 0) return;
    for (let i = arr[n] + 1; i < max; ++i) {
      arr[n] = i;
      res.push(arr.slice());
      next(arr.slice(), n - 1, arr[n]);
    }
  };
  
  res.push(arr.slice());
  next(arr, n - 1, k);
  
  return res;
};

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

const ops = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => b - a,
  (a, b) => a * b,
  (a, b) => a / b,
  (a, b) => b / a,
];

const integerTargets = digits => {
  const set = new Set();
  [...permutationsGenerator(digits)].map(perm => {
    const len = ops.length;
    const i = [];
    for (i[0] = 0; i[0] < len; ++i[0]) {
      for (i[1] = 0; i[1] < len; ++i[1]) {
        for (i[2] = 0; i[2] < len; ++i[2]) {
          const res = perm.reduce((a, b, idx) => {
            return ops[i[idx-1]](a, b);
          });
          if (res <= 0) continue;
          if (res % 1 !== 0) continue;
          set.add(res);
        }
      }
    }
  });
  return set;
};

const digits = [1,2,3,4];

const getLongest = digits => {
  const set = integerTargets(digits);
  for (let i = 1; 1; ++i) {
    if (!set.has(i)) return i - 1;
  }
};

let max = 0;
let maxRes;
combinations(4, 9).map(comb => {
  const digits = comb.map(n => n + 1);
  const len = getLongest(digits);
  if (len > max) {
    max = len;
    maxRes = digits.join('');
  }
}).slice(0, 0);

console.log(+maxRes); // 1258
