
// https://projecteuler.net/problem=48

let sum = 0n;

for (let i = 1n; i <= 1000n; ++i) {
  sum += i ** i;
}

console.log((sum+'').slice(-10)); // 9110846700
