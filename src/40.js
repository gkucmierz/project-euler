
// https://projecteuler.net/problem=40

const arr = [];
let size = 0;
for (let i = 1; size < 1e6; ++i) {
  arr.push(i);
  size += Math.floor(Math.log10(i)) + 1;
}

const str = arr.join('');

let prod = 1;
for (let i = 0; i < 7; ++i) {
  prod *= +str[10 ** i - 1];
}

console.log(
  prod // 210
);
