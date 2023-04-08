
// https://projecteuler.net/problem=94

const MAX = 1e9;

function factors(n) {
  let max = Math.floor(Math.sqrt(n));
  let res = [];
  for (let i = 2; i <= max; ++i) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min(...res) || 2) - 1;
    }
  }
  res.push(n);
  return res;
}

// const calcArea = (a, b, c) => {
//   const s = (a + b + c) / 2;
//   const mul = s * (s - a) * (s - b) * (s - c);
//   return mul ** 0.5;
// };

// if square root is integer than its input factors
// should always have pairs, so we can reduce them
const hasIntegerArea = (a, b) => {
  const s = a * 2 + b;
  const sf = (factors(s));
  // const af = (factors(s - a * 2));
  const bf = (factors(s - b * 2));
  // a factors can be reduced bcs. are doubled
  // const f = [...sf, ...af, ...af, ...bf];
  const f = [...sf, ...bf];
  // console.log(f);
  for (let i = 0; i < f.length; ++i) {
    if (f[i] === 0) continue;
    const idx = f.indexOf(f[i], i + 1);
    if (idx === -1) return false;
    f[idx] = 0;
  }
  return true;
};

const lookAround = (n, cnd) => {
  if (cnd(n)) return n;
  let diff = 1;
  while (1) {
    if (cnd(n + diff)) return n + diff;
    if (cnd(n - diff)) return n - diff;
    ++diff;
  }
};

// hasIntegerArea(2433601, 2433602);
// hasIntegerArea(9082321, 9082320);
const approxRatio = 9082321 / 2433601;

let n = Math.round(approxRatio)
let sum = 0;
while (n < MAX / 3) {
  const match = lookAround(n, n => {
    return hasIntegerArea(n, n - 1) || hasIntegerArea(n, n + 1);
  });
  n = Math.round(match * approxRatio);
  const neg = hasIntegerArea(match, match - 1) ? -1 : 1;
  const perim = match * 3 + neg;
  console.log(match, match + neg, perim);
  sum += perim;
}

console.log(sum); // 518408346
