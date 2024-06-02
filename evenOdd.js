
const prompt = require('prompt-sync')();

let number  = prompt('Enter the number : ');

number = parseInt(number);

if(number%2==0){
    console.log(number + " is even number");
}
else{
    console.log(number + ' is odd number');
}