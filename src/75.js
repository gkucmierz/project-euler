
// https://projecteuler.net/problem=75

const MAX = 1_500_000;
const map = new Map();
for (let a = 1; a <= MAX / 2; ++a) {
  for (let b = a + 1; b <= MAX / 2; ++b) {
    const c = (a ** 2 + b ** 2) ** 0.5;
    if (c % 1 !== 0) continue;
    const sum = a + b + c;
    if (sum > MAX) continue;
    const cnt = map.get(sum) ?? 0;
    map.set(sum, cnt + 1);
  }
}

console.log([...map].filter(([s, c]) => c === 1).length); // 161667
