
// https://projecteuler.net/problem=1

let sum = 0;
for (let i = 0;i < 1e3; ++i) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum); // 233168
