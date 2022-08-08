
// https://projecteuler.net/problem=9

const MAX = 1e3;

for (let i = 1; i < MAX; ++i) {
  for (let j = 1; j < MAX; ++j) {
    for (let k = 1; k < MAX; ++k) {
      const sum = i + j + k === MAX;
      const tri = i * i + j * j === k * k;
      if (sum && tri) {
        console.log(i * j * k); // 31875000
      }
    }
  }
}

