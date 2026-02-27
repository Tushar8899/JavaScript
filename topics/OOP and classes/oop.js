const user = {
  username: "Tushar " ,
  loginCount: 8 ,
  singedIn: true, 

   getUserDetail: function() {
  // console.log("get user details from database");
    console.log(`Username: ${this.username}`);      // yha pe this keyword ka matlab h ki vo isi object ki bat kr rha h , agar this nhi lagatte to ye bhar k context samajhta h , this ka matlab current context hota h 
    
   }
}

//console.log(user.username);
//console.log(user.getUserDetail());


//constructor funtion 
//const promiseOne = new Promise()      // is new ka matlab constructor function
//const date = new Date()

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this 
}
const userOne = new User("tuhsar", 12, true) 
const userTwo = new User("sury", 12, false)   // yha pe ye second wala user first wale ko overwrite kr deta h aise, to isko shi krne k liye hum new keyword ka use krte h 
console.log(userOne);
console.log(userTwo); 

// constructor funtion har bar ek new instance deta h 
// jab hum new keyworrd use krte h to sabse phle ek empty object create hota h jisko hum instance bolte h 
