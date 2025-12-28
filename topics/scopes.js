let a = 2;                   // it is the global scope 

if (true){
  let a = 4                     // it is the blocked scope 
  const b = 8
  console.log( "inner" , a);      // here display the blocked scope
  

}
console.log(a);       // here display the global scope 

//++++++++++++++++++++++  nested scope +++++++++++++++++++++++++++++++++++++

if (true){
  const username = "tushar"

  if (username==="tushar"){
    const website = "portfolio"
    console.log(username);        // it display because it is in the scope 
    
  }
  // console.log(website);          // it can not display because it is out of scope 
  
}


//+++++++++++++++++++++++++++ function and expression ++++++++++++++++++++++++++++++++++

function addone (num){         // it is called function 
  return num+1
}

console.log(one(3));             // it can be access before initialisation 

const addTwo = function(num){                     // it is called expression  , curly brases is the scope , expression can hold anything like jsons
  return num + 3
}
console.log(addTwo(3));               // it cannot be access before initialisation 


