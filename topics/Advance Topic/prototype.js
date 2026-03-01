// javascript ka default behaviour prototypel behaviour h , isi ko inheritance bolte h 

function multipleBy5(num) {
  return num*5
}

multipleBy5.power = 2 

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// javascript me har ek chij object hoti h , function to function hota hi h but object ki terha bhi use kr sakte h 

function createUser (username, score){
  this.username = username
  this.score = score 
}

createUser.prototype.increment = function(){
  this.score++                           // yha this ka matlab hai jisne bhi this ko call kiye h vo uska score badha dega, this ka matlab jis  
}

createUser.prototype.printMe = function(){
  console.log(` price is ${this.score}`);
  
}

const milk = new createUser("milk", 35)                 // yha pe properties to aai h , par bataya nhi h isko ki ye properties aai h , isko btane k liye new ka use krenge 
const coffee = createUser("coffee", 50) 

milk.printMe()       

// javascript  new keyword k through constructor function deti h 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let myHeros = ['thor', 'spiderman']

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    
  }
}

Object.prototype.Tushar = function(){                          // yha pe tushar ko directly object me inject kiya h through prototype 
  console.log(` tushar is present in all objects `);
  
}

Array.prototype.heyTushar = function(){                      // yha pe heyTushar method ko directly array me inject kiya h through prototype 
  console.log(` hello i am tushar `);
  
} 

myHeros.Tushar() 
heroPower.heyTushar()       // yha pe error aaiga kyuki humne heyTushar array me inject kiya to usko hum object me acces nhi kr sakte 


// inheritance 
// har object ka apna alag instance hota h 
// aajkal .setPrototypeOf se inheritance krte h but phle __proto__ se inhertance krte the  ( isko yaad rakhna h )