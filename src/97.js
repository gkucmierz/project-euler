
// https://projecteuler.net/problem=97

const POWER = 7830457;

let n = '2';
for (let i = 1; i < POWER; ++i) {
  n = ((BigInt(n) * 2n) + '').slice(-10);
}

const res = (28433n * BigInt(n) + 1n) + '';

console.log(res.slice(-10)); // 8739992577
