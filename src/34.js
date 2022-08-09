
// https://projecteuler.net/problem=34

const power = n => {
  if (n === 0) return 1;
  return power(n - 1) * n;
};

const p = []

for (let i = 0; i < 10; ++i) {
  p[i] = power(i);
}

let all = 0;
for (let i = 3; i < 1e6; ++i) {
  const sum = [...i+''].reduce((a, b) => a + p[b], 0);
  if (i === sum) {
    all += sum;
  }
}

console.log(all); // 40730
