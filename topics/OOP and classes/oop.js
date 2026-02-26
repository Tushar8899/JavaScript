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
const promiseOne = new Promise()      // is new ka matlab constructor function
const date = new Date()
