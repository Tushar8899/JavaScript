const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman"," naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[]);

// Array methods 
myArr.push(6) // it pushes a value in array 
myArr.pop() // it delete the last value from array 
// console.log(myArr);

myArr.unshift(2) // it add a value at the starting of the array 
console.log(myArr);
myArr.shift() // it delete a value from the starting of the array 
// console.log(myArr);

const newArray = myArr.join() // join converts the array into string and type 
// console.log(myArr);
// console.log(newArray);

// slice or splice 

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)  // slice cannot manipulate the actual array and it not include 3 

console.log(myn1);
console.log("b ", myArr);

const myn2 = myArr.splice(1, 3) // but splice manipulate  the actual array and it include 3 
console.log("c ", myArr);
console.log(myn2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const teachers = [ "raman" ,  " shyam", " rani"] ;
const students = [ "tushar" , " siddharth", " vishal"];

// teachers.push(students); // push second wale array ko ek hi element manta h or ye existing array pe hi work krta h 
// console.log(teachers);

// const combine = teachers.concat(students); // concat second array sabhi element ko combine krta h or iske liye ek new const banana padta h ye existing array pe work nhi krta 
// console.log(combine);

const all_combine = [ ...teachers, ...students]; // ye three dot ... spread hai , isme array k sare element spread ho jate h , 
console.log(all_combine);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("tushar"));
console.log(Array.from("tushar"));
console.log(Array.from({name : "tushar"}));  // in this we specify that what we want to make array , keys or value 

let score1 = 300;
let score2 = 400;
let score3 = 500;

console.log(Array.of(score1,score2,score3));  // of is also make array from values 

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Converting array of user objects to just their names
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

const numbers = [1, 2, 3];

const result = numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6 (just logs)
console.log(result); // undefined
console.log(numbers); // [1, 2, 3] - Original unchanged
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach(fruit => console.log(fruit));


// When to Use forEach():
// When you need to perform an action for each item
// When you don't need a new array
// For side effects like:
// Logging values
// Updating DOM elements
// Saving to database
// Modifying external variables
// When NOT to Use forEach():
// When you need to transform data (use map() instead)
// When you need to filter data (use filter() instead)
// When you need to stop early (use for loop instead)


















