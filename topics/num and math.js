const balance = new Number(1000); // it gives you number with prototype 
console.log(balance);

const babyNum = 1000  // it gives you number without prototype 
console.log(babyNum);

console.log(balance.toString()); // it changes your number to string 

console.log(babyNum.toFixed(2)); // it fixed 00 after point 

const otherNumber = 129.987
console.log(otherNumber.toPrecision(3)); // it gives you precise value 

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); // it put commma between zero and 'en-IN' it make it as indian standard 

//=================  MATHS  =========================

console.log(Math.abs(-4)); // it convert negative to positive 
console.log(Math.round(5.44)); 
console.log(Math.floor(8.9)); 
console.log(Math.ceil(4.3));

console.log(Math.random()); //it gives you a value between 0 and 1 
console.log((Math.random()*10) + 1 );
console.log(Math.floor(Math.random()*10) + 1); // it gives you a single value without decimal 

const min = 1 ;
const max = 6 ;

console.log(Math.floor(Math.random() * (max-min+1)) + min );



 



