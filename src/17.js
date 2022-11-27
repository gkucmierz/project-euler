
// https://projecteuler.net/problem=17
const number2Words = (n, and = 'and') => {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  const convertMillions = num => {
    if (num < 1e6) return convertThousands(num);
    return [...convertMillions(Math.floor(num / 1e6)), 'million', ...convertThousands(num % 1e6)];
  };
  
  const convertThousands = num => {
    if (num < 1e3) return convertHundreds(num);
    return [...convertHundreds(Math.floor(num / 1e3)), 'thousand', ...convertHundreds(num % 1e3)];
  };
  
  const convertHundreds = num => {
    if (num < 100) return [and, convertTens(num)];
    return [ones[Math.floor(num / 100)], 'hundred', and, convertTens(num % 100)];
  };
  
  const convertTens = num => {
    if (num < 10) return ones[num];
    if (num >= 10 && num < 20) return teens[num - 10];
    return (tens[Math.floor(num / 10)] + '-' + ones[num % 10]).replace(/\-$/, '');
  };

  const WS = ' ';
  if (n === 0) return 'zero';
  return (convertMillions(n)
    .filter(s => s !== '')
    .join(WS)
    .replace(new RegExp('^' + and + WS), '')
    .replace(new RegExp(WS + and + '$'), '')
  );
};

const count = n => number2Words(n).match(/\w/g).length;

let sum = 0;
for (let i = 1; i <= 1e3; ++i) {
  sum += count(i);
}
console.log(sum); // 21124
