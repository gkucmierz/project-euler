
// https://projecteuler.net/problem=79

const data = `
319
680
180
690
129
620
762
689
762
318
368
710
720
710
629
168
160
689
716
731
736
729
316
729
729
710
769
290
719
680
318
389
162
289
162
718
729
319
790
680
890
362
319
760
316
729
380
319
728
716
`.trim().split(/\n/);

const uniq = new Set(data);
const arr = [...uniq];

const pos = new Array(10).fill(0);
const cnt = new Array(10).fill(0);

arr.map((s, i) => {
  pos[s[0]]--;
  pos[s[2]]++;
  cnt[s[0]]++;
  cnt[s[1]]++;
  cnt[s[2]]++;
});

const candidate = pos
  .map((n, i) => ({n, i}))
  .sort((a, b) => a.n - b.n)
  .map(({i}) => i)
  .filter((n, i) => cnt[i] > 0)
  .join('');

const valid = arr.every(s => {
  const re = new RegExp(s.split('').join('.*'));
  return re.test(candidate);
});

if (valid) {
  console.log(candidate); // 73162890
}
