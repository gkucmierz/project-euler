
// https://projecteuler.net/problem=100

const MIN = 1_000_000_000_000n;

const sign = (a, b) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

const getProp = (h, l, digits) => {
  h *= MIN;
  return (h / l);
};

let r = 1n;
let b = 1n;

let last;
let lastProp;

while (1) {
  const a = r + b;
  const num = b * (b-1n);
  const den = a * (a-1n);
  const s = sign(num * 2n, den);
  if (s === 0) {
    const digits = 20;
    if (last) {
      lastProp = getProp(a, last.a, digits);
      // console.log(
      //   getProp(a, last.a),
      //   getProp(r, last.r),
      //   getProp(b, last.b),
      // );
    }
    if (a >= MIN) {
      // console.log(a+ '', r+'', b+'');
      console.log(+(b+'')); // 756872327473
      break;
    }
    last = {r, b, a};
    if (1 && lastProp) {
      b = (b * lastProp) / MIN;
      r = (r * lastProp) / MIN;
    } else {
      ++b;
      ++r;
    }
  } else {
    if (s < 1) {
      ++b;
    } else {
      ++r;
    }
  }
}
