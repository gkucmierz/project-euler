
// https://projecteuler.net/problem=85

const TARGET = 2e6;

//    1  2  3  4
// 1  1
// 2  3  7
// 3  6 18
// 4 10

const countRectangles = (a, b) => {
  let sum = 0;
  for (let ai = 0; ai < a; ++ai) {
    for (let bi = 0; bi < b; ++bi) {
      sum += (b - bi) * (a - ai);
    }
  }
  return sum;
};

const naturalSearch = (cond, retFirstTrue = true) => {
  let min = 1;
  let max = 1;
  while(1) {
    const stop = cond(max);
    if (stop) break;
    min = max;
    max *= 2;
  }
  let mid;
  while (1) {
    mid = Math.floor((min + max) / 2);
    const stop = cond(mid);
    if (stop) {
      max = mid;
    } else {
      min = mid;
    }
    const diff = max - min;
    if (max - min <= 1) {
      return retFirstTrue ? max : min;
    }
  }
};

let min = Infinity;
let minRes;

const report = (res, inp) => {
  const diff = Math.abs(res - TARGET);
  if (diff < min) {
    min = diff;
    minRes = inp;
    // console.log(min, minRes);
  }
};

for (let i = 1; i < 2e3; ++i) {
  const below = naturalSearch(n => {
    const res = countRectangles(i, n);
    return res > TARGET;
  }, false);
  const above = below + 1;
  report(countRectangles(i, below), [i, below]);
  report(countRectangles(i, above), [i, above]);
}

// console.log(min, minRes);

console.log(minRes.reduce((a, b) => a * b)); // 2772
