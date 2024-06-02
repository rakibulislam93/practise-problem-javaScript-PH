
const prompt = require('prompt-sync')();

let year = prompt('Enter any year : ');

year = parseInt(year);


if(year%4==0 && year%100 !=0){
    console.log(year + " is leap year");
}
else if(year%400==0){
    console.log(year + " is leap year");
}else{
    console.log(year + " is not leap year");
}

