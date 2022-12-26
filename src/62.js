
// https://projecteuler.net/problem=62

const map = new Map();
const sortn = n => {
  return [...n+''].sort((a, b) => a.localeCompare(b)).join('');
};

for (let i = 0; i < 1e6; ++i) {
  const n = i ** 3;
  const hash = sortn(n);
  const set = map.get(hash) ?? new Set();
  set.add(i);
  map.set(hash, set);
  if (set.size >= 5) {
    const [first] = set;
    console.log(first ** 3); // 127035954683
    break;
  }
}
