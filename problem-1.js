// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.


// **** answer****

function celsius_to_fahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
const result=celsius_to_fahrenheit(45);
console.log('Result in fahrenheit is:', result);
