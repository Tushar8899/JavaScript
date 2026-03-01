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