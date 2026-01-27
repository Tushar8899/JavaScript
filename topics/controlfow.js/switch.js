// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }                               this is the syntax of switch case 

const month = 3 
switch (month) {
  case 1:
    console.log(`january`);
    
    break;
  case 2:
    console.log(`feb`);
    
    break;
  case 3:
    console.log(`march`);
    
    break;
  case 4:
    console.log(`april`);
    
    break;             // agr hum break nhi lagate to ye match k baad ka sara code executte kr deta , except default 

  default:
    console.log(`default case match `);
    
    break;
}