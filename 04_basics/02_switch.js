/*
switch (key) {
    case value:
        break;

        default:
            break;

}     */
 

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter month (1-5): ", (input) => {
    const month = parseInt(input); // Convert input to a number

    if (isNaN(month) || month < 1 || month > 5) {
        console.log("Invalid input. Please enter a number between 1 and 5.");
    } else {
        switch (month) {
            case 1:
                console.log("You entered month: January");
                break;
            case 2:
                console.log("You entered month: February");
                break;
            case 3:
                console.log("You entered month: March");
                break;
            case 4:
                console.log("You entered month: April");
                break;
            case 5:
                console.log("You entered month: May");
                break;
        }
    }

   
    rl.close();
});
