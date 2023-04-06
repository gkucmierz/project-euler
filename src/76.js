
// https://projecteuler.net/problem=76

// just for printing
const printWays = n => {
  const res = [];
  const loop = (left, max = n - 1, joined = []) => {
    if (left === 0) {
      res.push(joined);
      return;
    }
    const last = joined.length;
    for (let i = max; i > 0; --i) {
      joined[last] = i;
      if (left - i < 0) continue;
      loop(left - i, i, joined.slice());
    }
  };
  loop(n);
  return res.map(arr => arr.join(' '));
};

// printWays(n).length;

// still can be optimized (memoization)
const countWays = n => {
  const loop = (left, max = n - 1) => {
    if (left === 0) return 1;
    let sum = 0;
    for (let i = max; i > 0; --i) {
      if (left - i < 0) continue;
      sum += loop(left - i, i);
    }
    return sum;
  };
  return loop(n);
};

console.log(countWays(100)); // 190569291
