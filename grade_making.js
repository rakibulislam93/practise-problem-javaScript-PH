
const prompt = require('prompt-sync')();

let marks = prompt("Enter the marks 0 t0 100 : ");
marks = parseInt(marks);

if(marks>=80){
    console.log("A+");
}
else if(marks>=70 && marks<80){
    console.log("A");
}
else if(marks>=60 && marks<70){
    console.log('A-');
}
else if(marks>=50 && marks<60){
    console.log('B');
}
else if(marks>=40 && marks<50){
    console.log("C");
}
else if(marks>=33 && marks<40){
    console.log("D");
}
else{
    console.log("F");
}