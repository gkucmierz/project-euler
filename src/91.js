
// https://projecteuler.net/problem=91

const MAX = 50;
const X_MAX = MAX;
const Y_MAX = MAX;

const dist = (x1, y1, x2, y2) => {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
};

const isRightTriangle = (x1, y1, x2, y2, x3, y3) => {
  const sides = [
    dist(x1, y1, x2, y2),
    dist(x1, y1, x3, y3),
    dist(x3, y3, x2, y2),
  ];
  if (sides[0] * sides[1] * sides[2] === 0) return false;
  sides.sort((a, b) => b - a);
  return sides[0] === sides[1] + sides[2];
};

let cnt = 0;
for (let x1 = 0; x1 <= X_MAX; ++x1) {
  for (let x2 = 0; x2 <= X_MAX; ++x2) {
    for (let y1 = 0; y1 <= Y_MAX; ++y1) {
      for (let y2 = 0; y2 <= Y_MAX; ++y2) {
        if (!isRightTriangle(x1, y1, x2, y2, 0, 0)) continue;
        ++cnt;
      }
    }
  }
}

console.log(cnt / 2); // 14234
