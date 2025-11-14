// there are two ways to make objects 1. leterals 2. constructor 
// when we make object as constuructor it makes singleton 
// when we make objects as literals it not makes singleton   

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object literal 
// [""]  => it is called square notation

const student_info = {
  name:"tushar",
  age: 20 ,
  email : "tuahartyagi0001@gmail.com" ,
  location: "up",
  "address": "sec 128"

}

console.log(student_info.name); // this is dot method 
console.log(student_info["address"]); // this is the best way to get object values , this is square notation

