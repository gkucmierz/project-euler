
// https://projecteuler.net/problem=32

const m = '123456789';
const sd = s => [...s].map(n => +n).sort((a, b) => a-b).join('');

const set = new Set();
for (let i = 0; i < 1e3; ++i) {
  for (let j = i + 1; j < 1e4; ++j) {
    const p = i * j;
    const s = [i, j, p].join('');
    if (s.length !== m.length) continue;
    if (sd(s) !== m) continue;
    console.log(i, j, p)
    set.add(p);
  }
}

console.log(
  [...set].reduce((a, b) => a + b, 0) // 45228
);
