const prompt = require('prompt-sync')();


function monthlySaving(){
    // 10 20 30,40 input system.....
    let userInput = prompt('Enter the value where array value separate-space and number saparate-coma : ');

    let parts = userInput.split(',');
    
    let number;
    let array = [];
    
    let firstPart = parts[0].trim();
    if (firstPart.includes(' ')) {
        array = firstPart.split(' ').map(Number);
    } else {

        console.log('Invalid input');
        return ;
    }

    let totalIncome = 0;
    let tax = 0;
    for(let tk of array){
        totalIncome += tk;
        if(tk>=3000){
            tax = (tk*20)/100;
        }
    }
    
    let livingCost = parseInt(parts[1]);
    let savingIncome = totalIncome - (tax+livingCost);
    
    if(savingIncome<0){
        console.log("Earn more...");
    }
    else{
        console.log(savingIncome);
        return;
    }
}
monthlySaving();