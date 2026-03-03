//ES6

// class User {                           // class use ki h 
//   constructor(username , email , password){                   // yha pe constructor use kiya h 
//     this.username = username ;
//     this.email = email;
//     this.password = password
//   }

//   encryptPassword(){
//     return `${this.password}abcd`    // yha pe jo bhi password aaiga database se uske sath abcd add hoke aaiga 
//   }
// }

// const newUser = new User("tushar" , "tushar01.com" , "5678")

// console.log(newUser.encryptPassword());  


// behind the scene ye aise hota h 

function User(username, email, password){
   this.username = username ;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abcd`
}
const user1 = new User("tushar" , "tushar01.com" , "5678")

console.log(user1.encryptPassword());  
