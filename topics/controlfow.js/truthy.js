// // falsy values 
// false , 0 , -0 , NaN , BigInt 0n , null , undefined , "" 
// truthy values 
// "0" , "false" , " " ,[] , {} ,funtion (){}, 

// .length se hum pta laga sakte h hmare array empty h ya nhi 
 
const emptyObj = {}
if (Object.keys(emptyObj).length === 0 ) {          // aise hum pta laga sakte h hmara objecct empty h ya nhi 
  console.log(`object is empty`);
  
}

// Nullish Coalescing Operator (??):  null , undeffined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 19    // nulloe undefined  ko nhi display krta 
// val1 = undefined ?? 14


// console.log(val1); 

// terniary operator
// condition ? true : false 

