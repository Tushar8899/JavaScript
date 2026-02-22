const promiseOne = new Promise(function(resolve, reject) {              // hum  promise k andar ek funtion likhte h
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

