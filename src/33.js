// https://projecteuler.net/problem=33

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

const check = (a, b) => {
  const [as, bs] = [a + '', b + ''];
  if (as[0] !== bs[1]) return false;
  const ar = +as.replace(as[0], '');
  const br = +bs.replace(as[0], '');
  return a/b === ar/br;
};

let num = 1;
let den = 1;
for (let i = 10; i < 100; ++i) {
  for (let j = i + 1; j < 100; ++j) {
    if (check(j, i)) {
      num *= i;
      den *= j;
    }
  }
}

const sub = (a1, a2) => {
  for (let i = 0; i < a1.length; ++i) {
    const idx = a2.indexOf(a1[i]);
    if (idx !== -1) {
      a1.splice(i--, 1);
      a2.splice(idx, 1);
    }
  }
};

const fnum = factors(num);
const fden = factors(den);

sub(fnum, fden);
sub(fden, fnum);

const res = fden.reduce((a, b) => a * b); // 302575

console.log(res); // 100
