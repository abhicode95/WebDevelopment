// Methods to manipulate array
// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// 1.Array Constructor
// Array:To create an array.

// const arr = Array(4);
// console.log(arr);

// 2.Creating static values with fill
// fill: Fill all the array elements with a static value

// const arr = Array(4).fill("A");
// console.log(arr);

// 3.Concatenating array using concat
// concat:To concatenate two arrays.

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
// console.log("thirdList", thirdList);

//4.Getting array length
// Length:To know the size of the array
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);

//5.Getting index an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(5)); // -> 4
// console.log(numbers.indexOf(0)); // -> -1
// console.log(numbers.indexOf(1)); // -> 0
// console.log(numbers.indexOf(6)); // -> -1

// Check an element if it exist in an array.
// Check items in a list
// const fruits = ["banana", "orange", "mango", "lemon"];
// const index = fruits.indexOf("apple");
// if (index !== -1) {
//   console.log("This fruit exist in the array");
// } else {
//   console.log("This fruit does not exist in the array");
// }

//6.Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

// console.log(numbers.lastIndexOf(2)); // 7
// console.log(numbers.lastIndexOf(0)); // -1
// console.log(numbers.lastIndexOf(1)); //  6
// console.log(numbers.lastIndexOf(4)); //  3
// console.log(numbers.lastIndexOf(6)); // -1

//7.includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(5)); // true
// console.log(numbers.includes(0)); // false
// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(6)); // false

//8.Checking array
// Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5];
// console.log(Array.isArray(numbers)); // true

// const number = 100;
// console.log(Array.isArray(number)); // false

//9.Converting array to string
// toString:Converts array to string
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString());

//10.Joining array elements
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join("")); // 1,2,3,4,5

//11.Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.slice()); // -> it copies all  item
// console.log(numbers.slice(0)); // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)); // it copies all  item
// console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

//12.Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice();
// console.log(numbers); // -> remove all items

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(0, 1);
// console.log(numbers); // remove the first item

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(3, 3, 7, 8, 9);
// console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [7, 8, 9] //it removes three item and replace three items

// 13.Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
// const arr = ["item1", "item2", "item3"];
// arr.push("new item");
// console.log(arr);
// // ['item1', 'item2','item3','new item']

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers); // -> [1,2,3,4,5,6]

// 14.Add an element from the beginning
// unshift: Adding array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0); // -> add one item from the beginning
// console.log(numbers); // -> [0,1,2,3,4,5]

//15.Removing the end element using pop
// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop(); // -> remove one item from the end
// console.log(numbers); // -> [1,2,3,4]

//16.Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift(); // -> remove one item from the beginning
// console.log(numbers); // -> [2,3,4,5]

//17.Reversing array order
// reverse: reverse the order of an array.
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // -> reverse array order
// console.log(numbers); // [5, 4, 3, 2, 1]

// 18.Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// webTechs.sort();
// console.log(webTechs);

// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays
