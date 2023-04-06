
const MAX = 1e6;

const limit = 3 / 7;

const findLess = (a, b) => {
  while (b <= MAX) {
    ++b;
    if (a / b < limit) return [a, b];
  }
  return false
};

let [a, b] = [0, 1];
let best = 0;
let besta;
// let bestb;
while (1) {
  const res = findLess(a+1, b);
  if (res) {
    a = res[0];
    b = res[1];
    if (a/b > best) {
      best = a/b;
      besta = a;
      // bestb = b;
    }
  } else {
    break;
  }
}

console.log(besta); // 428570
