let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getHours());
console.log(newDate.getMonth());