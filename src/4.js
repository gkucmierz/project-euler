
// https://projecteuler.net/problem=4

const products = [];

for (let i = 100; i < 1e3; ++i) {
  for (let j = 100; j < 1e3; ++j) {
    products.push(i * j);
  }
}

products.sort((a, b) => b - a);

const isPalindrome = n => {
  const rev = [...n+''].reverse().join('');
  return n === +rev
};

const idx = products.findIndex(isPalindrome);

console.log(products[idx]); // 906609
