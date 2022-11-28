
// https://projecteuler.net/problem=31

const arr = [200, 100, 50, 20, 10, 5, 2, 1];

const TARGET = 200;

const ways = (left, ai = 0) => {
  if (ai > arr.length) return 0;
  if (left === 0) return 1;
  let sum = 0;
  for (let i = 0; i <= left; i += arr[ai]) {
    sum += ways(left - i, ai + 1);
  }
  return sum;
};

console.log(
  ways(TARGET) // 73682
);
