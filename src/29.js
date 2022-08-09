
// https://projecteuler.net/problem=29

const MIN = 2;
const MAX = 100;

const set = new Set();

for (let i = MIN; i <= MAX; ++i) {
  for (let j = MIN; j <= MAX; ++j) {
    set.add(i ** j);
  }
}

console.log(set.size); // 9183
