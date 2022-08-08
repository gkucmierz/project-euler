
// https://projecteuler.net/problem=20

const power = (n = 1n) => {
  let res = 1n;
  const max = BigInt(n);
  for (let i = 1n; i <= max; ++i) {
    res *= i;
  }
  return res;
};

console.log([...power(100n)+''].reduce((a, b) => a + +b, 0)); // 648
