
// https://projecteuler.net/problem=92

const check = n => {
  while (true) {
    const str = n + '';
    n = [...str].reduce((sum, c) => sum + +c * + c, 0);
    if (n === 1 || n === 89) return n;
  }
}

let cnt = 0;
for (let i = 1; i < 1e7; ++i) {
  if (check(i) === 89) ++cnt
}

console.log(cnt); // 8581146
