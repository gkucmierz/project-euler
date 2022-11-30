
// https://projecteuler.net/problem=44

const pn = n => n * (3*n - 1) / 2;

const set = new Set();

for (let i = 1; i < 1e6; ++i) {
  set.add(pn(i));
}

let min = Infinity;
for (let d = 1; d < 2e3; ++d) { 
  for (let i = 1; i < 1e5; ++i) {
    const p1 = pn(i);
    const p2 = pn(i+d);
    const diff = p2 - p1;
    const sum = p1 + p2;
    if (set.has(diff) && set.has(sum)) {
      min = Math.min(min, diff);
    }
  }
}

console.log(min); // 5482660
