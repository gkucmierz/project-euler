
// https://projecteuler.net/problem=26

const MAX = 1000;

const fractionToDecimal = (numerator, denominator) => {
  const sign = numerator * denominator < 0 ? '-' : ''
  const [num, den] = [Math.abs(numerator), Math.abs(denominator)];
  let rem = num % den;
  let left = (num - rem) / den;
  let cnt = 0;
  let right = '';
  const map = new Map();
  while (rem) {
    rem *= 10;
    if (map.has(rem)) {
      break;
    }
    map.set(rem, cnt);
    const d = rem / den | 0;
    rem %= den;
    right += d;
    ++cnt;
  }
  const ptr = map.get(rem);
  const rightPart = right.slice(0, ptr);
  const period = right.slice(ptr);
  return {
    sign,
    left,
    right,
    rightPart,
    reminder: rem,
    period,
    joined: sign + (right ? `${left}.${rightPart}${rem ? `(${period})` : ''}` : left)
  };
};

let max = 0;
let res;
for (let i = 1; i < MAX; ++i) {
  const len = fractionToDecimal(1, i).period.length;
  if (len > max) {
    max = len;
    res = i;
  }
}

console.log(res); // 983
