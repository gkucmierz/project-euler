
// https://projecteuler.net/problem=38

const sort = s => [...s].map(n => +n).sort((a, b) => a-b).join('');
const pand = '123456789';

const res = [];
for (let m = 2; m <= 9; ++m) {
  for (let i = 1; i < 1e5; ++i) {
    const concat = [];
    for (let j = 1; j < m; ++j) {
      concat.push(i * j);
    }
    const join = concat.join('');
    if (join.length < 9) continue;
    if (join.length > 9) break;
    if (pand === sort(join)) {
      res.push(+join);
    }
  }
}

console.log(
  Math.max(...res) // 932718654
);
