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









