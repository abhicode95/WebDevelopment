const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1.Find the sum of price of products using only reduce reduce(callback))
const productSum = products.reduce((prev, curr) => {
  return prev + Number(curr.price);
}, 0);

console.log(productSum);
