// there are two ways to make objects 1. leterals 2. constructor 
// when we make object as constuructor it makes singleton 
// when we make objects as literals it not makes singleton   

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object literal 
// [""]  => it is called square notation
const mySym = Symbol("key1");
const student_info = {
  name:"tushar",
  age: 20 ,
  [mySym] : "mykey1", // use this to make symbol as object key 
  email : "tuahartyagi0001@gmail.com" ,
  location: "up",
  "address": "sec 128"

}

// console.log(student_info.name); // this is dot method 
// console.log(student_info["address"]); // this is the best way to get object values , this is square notation
// console.log(student_info[mySym]); // to access symbol use this 

student_info.email = "tushar@8899.com"; // = is used to update the value of object key
// console.log(student_info.email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const laptop_name = new Object();  // this is a singleton object 
// const laptop_name = {};   // this is non singleton object 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

const obj4 = Object.assign({}, obj1,obj2,obj3);  //.assign is used to combine objects , but we use spread(...) instead of assign 
// console.log(obj4);

// console.log(Object.keys(student_info)); // it gives you result in array 
// console.log(Object.values(student_info)); // it gives you result in array 
console.log(Object.entries(student_info)); 

