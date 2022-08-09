
// https://projecteuler.net/problem=30

const POWER = 5;
const all = [];

for (let i = 2; i < 1e6; ++i) {
  const d = [...i+''].map(n => +n);
  const sum = d.reduce((a, b) => a + b ** POWER, 0);
  if (sum === i) {
    all.push(sum);
  }
}

console.log(
  all.reduce((a, b) => a + b) // 443839
);
