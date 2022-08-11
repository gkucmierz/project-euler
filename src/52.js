
// https://projecteuler.net/problem=52

const sortDigits = n => {
  return [...n+''].map(n => +n).sort((a, b) => a - b).join('');
};

for (let i = 1; 1; ++i) {
  let fail = false;
  const str = sortDigits(i);
  for (let j = 2; j <= 6; ++j) {
    const tmp = sortDigits(i * j);
    if (str !== tmp) {
      fail = true;
      break;
    }
  }
  if (!fail) {
    console.log(i); // 142857
    break;
  }
}
