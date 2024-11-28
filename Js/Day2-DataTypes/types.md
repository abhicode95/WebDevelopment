Data types describe the characteristics of data. Data types can be divided into two:

Primitive data types
Non-primitive data types(Object References)

Primitive Data Types
Primitive data types in JavaScript include:

Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor
Non-primitive data types in JavaScript includes:

Objects
Arrays

Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it

Example:
let word = 'JavaScript'

Primitive data types are compared by its values.

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) //false

Non-Primitive Data Types
Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.

Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers) // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers) // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo) // true