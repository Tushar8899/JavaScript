const promiseOne = new Promise(function(resolve, reject) {              // hum  promise k andar ek funtion likhte h
  // Do an async task
  // DB calls
  // network call 
  setTimeout ( function (){
    console.log('async task is completed');
    resolve()
  }, 1000)
})

promiseOne.then(function(){                   // then ka direct relation resolve se hota h 
  console.log("promise consumed");
  
})