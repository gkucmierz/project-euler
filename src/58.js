
// https://projecteuler.net/problem=58

const isPrime = n => {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  const root = Math.sqrt(n);
  for (let i = 3; i <= root; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const getLayer2Num = corner => l => (1 + 2 * l) ** 2 - l * 2 * corner;
const layer2num = new Array(4).fill(0).map((_, i) => i).map(getLayer2Num);
const side = l => 1 + l * 2;
  
let sum = 0;
let all = 1;
for (let i = 1; 1; ++i) {
  sum += layer2num.map(fn => fn(i)).map(isPrime).reduce((sum, is) => sum + (is ? 1 : 0));
  all += 4;
  const ratio = sum/all;
  if (ratio < 0.1) {
    console.log(side(i)); // 26241
    break;
  }
  // console.log(ratio, sum, all, side(i));
}
