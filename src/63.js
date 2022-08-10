
// https://projecteuler.net/problem=63

const countNth = nth => {
  let cnt = 0;
  for (let i = 1n; i <= 10n; ++i) {
    const pow = i ** nth;
    const len = (pow + '').length;
    if (len === Number(nth)) ++cnt;
  }
  return cnt;
}

let cnt = 0;
for (let i = 1n; i < 50n; ++i) {
  cnt += countNth(i);
}

console.log(cnt); // 49
