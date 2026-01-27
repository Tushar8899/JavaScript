// if 
const temp = 31 ;
if (temp < 40 ) {                    // agar condition true hogi to scope ka code execute hoga
    console.log(`temp is less than 40`);
    
}
else{
  console.log(`temp is greater than 40`);
  
}

// comparision operator -  < ,> ,== ,===, <= ,>= ,!= ,!==

const score = 200 ;
if (score < 300) {
  let power = "speed";   // here let is blocked scope , is power ka scope in bracket k andar hi h bss , agar hum var use krte to uska global scope hota h
  console.log(`user power : ${power}`);
  
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true 
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {                  // && this is AND condition
  console.log(`user can buy anything`);
  
} 

if (loggedInFromEmail || loggedInFromGoogle) {         // || is is OR condition
  console.log(` user login successfully`);
  
}