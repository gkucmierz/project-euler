
// https://projecteuler.net/problem=15
const latticePaths = (m, n) => {
  let cnt = 1;
  for (let k = n + 1; k <= m + n; ++k) {
    cnt = cnt * k / (k-n);
  }
  return cnt;
};

console.log(
  latticePaths(20, 20) // 137846528820
);
