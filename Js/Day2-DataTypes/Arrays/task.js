// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//1.add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
// console.log(shoppingCart);

//2.add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
// console.log(shoppingCart);

// 3.remove 'Honey' if you are allergic to honey
// shoppingCart.splice(4, 1);
// console.log(shoppingCart);

//4.modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green Tea");
// console.log(shoppingCart);

// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
const result = ages.sort();
// console.log(result);
// console.log(Math.max(...result));
// console.log(Math.min(...result));
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)

const avg = ages.reduce((prev, curr) => {
  return prev + curr;
}, 0);

// console.log("avg", Math.round(avg / ages.length));
// Find the range of the ages(max minus min)
const range = Math.max(...result) - Math.min(...result);
console.log("range", range);
