// premitive data type

// number => 2 to power 53 
// bigint 
// string => '', ""
// boolean => true / false 
// null => standalone value
// undefined => 
// symbol => unique 


// reference ( non premitive ) data type 
// 1. array  
 // example : 
 //const heros = [ "jaadu" , "raja"];
// 2. objects 
//example :
// let myObj = {
//   name: tushar,
//   age: 19,
// }
// object 

// console.log(typeof undefined); // it is undefined 
// console.log(typeof null); // null is an object  
// 3. functions 
const myFuntion = function(){
  console.log("hello world");
  
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (premitive) ,  Heap ( non premitive)

// stack example 
let myname = "tushar"
let myanothername = myname  // means myname is the copy of the actual myname 
myanothername = "tussi"  // then here myanothername give the value 

console.log(myname);
console.log(myanothername); 

//heap example 
let userOne = {
  email: "tushar11@gmail.com" ,
  upi: "tushar@ybl"
}

let userTwo = userOne // means usertwo gets the actual refrence of the original value 
userTwo.email = "tushar88@gmail.com"  // then it changes to the new value from old refrence value 

console.log(userOne.email);
console.log(userTwo.email);


