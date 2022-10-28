
// https://projecteuler.net/problem=36

let sum = 0;

for (let i = 0; i < 1e6; ++i) {
  const n2 = i.toString(2);
  const r2 = [...n2].reverse().join('');
  const n10 = i + '';
  const r10 = [...n10].reverse().join('');
  
  if (n2 === r2 && n10 === r10) {
    sum += i;
  }
}

console.log(sum); // 872187
