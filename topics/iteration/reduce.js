// reducer kaam krte h array k andar ki sari values ko add operation karane me const myNums = [1, 2, 3] , reduce k andar accumulator ki value by default 0 rakhte h 

const myNums = [1, 2, 3]


// const myTotal = myNums.reduce(function (acc, currval) {
// console.log(`acc: ${acc} and currval: ${currval}`)
// return acc + currval
// }, 0)

const myTotal = myNums.reduce( ( acc , currvalue ) => acc+currvalue , 0)   // uper vale code ko aise bhi likh sakte h , arrow funtion k sath 
console.log(myTotal);            // acc = accumulator h , currval =  current value h , jab bhi hum isme scope open krte h to return use krna hota h 

const shoppingCart = [
  { itemName: "js course" ,
    price : 999
  },
  { itemName: "python course" ,
    price : 9999
  },
  { itemName: "dev course" ,
    price : 23991                                     
  }
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0 )        // ye 0 bydefault value dikhata h , iska matlab yha pe bydefault price to pay 0 h
console.log(priceToPay);
