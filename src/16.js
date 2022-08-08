
// https://projecteuler.net/problem=16

const n = 2n ** 1000n;

console.log([...n+''].reduce((a, b) => a + +b, 0)); // 1366
