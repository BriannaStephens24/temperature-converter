/* create prompt for user to input a Fahrenheit temp
tell them we will convert to celcius*/

const fahrenheitInput = prompt (`Enter a temperature in fahrenheit and we will convert it to Celsius! `)

// change their string input in prompt to a number input
Number(fahrenheitInput)
// console.log(typeof Number (fahrenheitTemp))

/* create convertToCelsius function using:
celsiusTemp = (fahrenheitTemp - 32) * (5/9)
*/

const celsiusTemp = (fahrenheitInput -32) * (5/9)

//make a describeTemperature funciton using this chart below
/* Temperature     ->     Description
< 32              ->      "very cold"
< 64              ->          "cold"        
< 86              ->         "warm"     
< 100             ->           "hot"       
>= 100            ->        "very hot" 
*/
const describeTemperature = (fahrenheitInput) => {
if (fahrenheitInput < 32) {
    return `It's very cold!`
} else if (fahrenheitInput < 64) {
  return `It's cold!`
} else if (fahrenheitInput < 86) {
  return `It's warm!`
}  else if (fahrenheitInput < 100) {
  return `It's hot!`
} else if (fahrenheitInput >= 100) {
  return `It's very hot!`
}
}



/* Create an alert popup for the user that 
returns the temperature and the how it feels*/
// push to gitub 

alert (`It is ${celsiusTemp} degrees Celsius! ${describeTemperature(fahrenheitInput)}`);
