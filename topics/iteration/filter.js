const coding = [ "java", "ruby" , "javascript", "python", "swift"]

 const variable = coding.forEach( (item) => {
  console.log(item);
  
})
console.log(variable);

const myNums = [ 1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter( (num) =>{ return num > 4})        // .filter ka jab use krte h to usme condition bhi lagti h , num>4 ye condition h , or agar hum condition {} k andar likhenge to return keyword ka use krna pdega , agar return keyword use nhi krenge to empty array show hoga 
  console.log(newNum);
  
const Books = [
  { name: "book one " , genre: 'history' , publish: '2000'},
  { name: "book two " , genre: 'lifestyle' , publish: '1998'},
  { name: "book three " , genre: 'friction' , publish: '2010'},
  { name: "book four " , genre: 'english' , publish: '2005'},
  { name: "book five " , genre: 'science' , publish: '1900'}
]

const userBooks = Books.filter( (bk) => bk.genre === "friction")          // filter aise use krte h 
  console.log(userBooks);
  