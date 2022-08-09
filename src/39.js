
// https://projecteuler.net/problem=39

const MAX = 1000;

const solutions = side => {
  const MAX_SIDE = side - 2;

  let cnt = 0;
  for (let i = 1; i <= MAX_SIDE; ++i) {
    for (let j = 1; j <= MAX_SIDE; ++j) {
      const k = (i ** 2 + j ** 2) ** 0.5;
      const perim = i + j + k;
      if (perim === side) ++cnt;
    }
  }
  
  return cnt;
};

let max = 0;
let res;
for (let i = 1; i <= MAX; ++i) {
  const t = solutions(i);
  if (t > max) {
    max = t;
    res = i;
  }
}

console.log(res); // 840
