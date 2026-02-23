const promiseOne = new Promise(function(resolve, reject) {              // hum  promise k andar ek funtion likhte h , and promise ek object hota h 
  // Do an async task
  // DB calls
  // network call 
  setTimeout ( function (){   
    console.log('async task is completed');
    resolve()                                 // jab hum resolve ko call krte h to .then() run hota h 
  }, 1000)
})

promiseOne.then(function(){                   // then ka direct relation resolve se hota h   , promise ko then() ya catch() se consume krte h 
  console.log("promise consumed");
  
})            

// jaruri nhi h hum promise ko varriable me store kre 

new Promise(function(resolve, reject) {
setTimeout(function() {
console.log("Async task 2");
resolve()
}, 1000)
}).then(function() {
console.log("Async 2 resolved");
})             
 
const promiseThree = new Promise(function(resolve, reject) {          // then k andar hum function likhte h 
setTimeout(function() {
resolve({username: "Tushar", email: "tushar@example"})
}, 1000)
})
promiseThree.then(function(user) {                     // yha pe ye user pura object la rha h resolve se 
console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
setTimeout(function(){
let error = false
if (!error) {
resolve({username: "tushar", password: "123"})
} else {
reject('ERROR: Something went wrong')
}
}, 1000)
})


promiseFour
.then((user) => {             // yha pe then me arrow function use kr rhe h , or usme user ki value return ho rhi h 
console.log(user);
return user.username  
})
.then((username) => {                // yha pe hum then ki chaining kr rrhe h 
console.log(username); 
})
.catch(function(error) {            // .catch() ka relation reject se hota h 
console.log(error); 
}).finally (() => console.log("The promise is either resolved or rejected"))       // .finally() to chalta hi chalta h resolved ho ya reject , it is like default


const promiseFive = new Promise(function(resolve, reject) {
setTimeout(function(){
let error = true
if (!error) {
resolve({username: "javascript", password:
"123"})
} else {
reject('ERROR: JS went wrong')
}
}, 1000)
})
 
async function consumePromiseFive(){           // async await directly error ko handle nhi kr sakta , fir try catch method se handle krte h 

// const response = await promiseFive
// console.log(response);
// }
try {
const response = await promiseFive        // promise object h , isye () nhi use kiya 
console.log(response);
} catch (error) {
console.log(error);
}
}

consumePromiseFive()


// async function getAllUsers(){
// try {
// const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()                 // yha pe await use isliye kiya kyuki .json() ko bhi response krne me time lagta h 
// console.log(data);
// }
//  catch (error) {
// console.log("E: ", error);
// }
// }
// getAllUsers()


 // ye jo upar comment kya h async iski terha hi same result dega ye , bss vo async se kiye h ye then and catch se 
fetch('https://jsonplaceholder.typicode.com/users') 
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error)) 

// important = fetch() ki special queue banti h jab usko use krte h uska name hota h micro task queue , or priority queue , or async ki alag task queue  banti h 
//fetch() is a built-in browser function that goes to a URL, asks for data (or sends data), and brings a response back.