class User {

  constructor(username){
    this.username = username
  }

  logMe(){
   console.log(`USERNAME is ${this.username}`);
   
  }
}

   // yha pe new class banai h teacher name se or extends keyword se user ki properties ko inherit kiya h 
class Teacher extends User {       
  constructor(username, email, password){
    super(username)                    // super se parent ki property ko use kiya h 
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`new course was added by ${this.username}`);
    
  }
}

const user1 = new Teacher("tushar" , "tushar.com" , "8899")
user1.addCourse()
user1.logMe()