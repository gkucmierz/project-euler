
const MAX = 12e3;

const min = 1/3;
const max = 1/2;

const set = new Set();

for (let a = 1; a <= MAX; ++a) {
  for (let b = a + 1; b <= MAX; ++b) {
    const n = a/b;
    if (n <= min) continue;
    if (n >= max) continue;
    set.add(a/b);
  }
}

console.log(set.size); // 7295372
