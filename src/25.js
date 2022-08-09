
// https://projecteuler.net/problem=25

let [a, b] = [1n, 1n];
let cnt = 2;

while ((b+'').length < 1000) {
  [a, b] = [b, a + b];
  ++cnt;
}

console.log(cnt); // 4782
