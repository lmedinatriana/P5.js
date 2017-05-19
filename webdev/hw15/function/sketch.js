/* 
Create a code project that defines and uses at least two functions. 

Created by w3resource 
Modified by Luis Medina Triana May 2017. 

*/

//
function celsiusToF(celsius) //function for Celsius to Fahrenheit
{
  var cTemp = celsius;// variable for Celsius temperature
  var cToFahr = cTemp * 9 / 5 + 32;// formula for celsius to fahrenheit
  var message = cTemp+'\xB0Celsius is ' + cToFahr + ' \xB0Fahrenheit.';//message to show on console
    console.log(message);//write on console the mesagge variable
}

function fahrenheitToC(fahrenheit) //function for farenheit to celsius
{
  var fTemp = fahrenheit;// variable for farenheit temperature
  var fToCel = (fTemp - 32) * 5 / 9;//formula for farenheit to celsius
  var message = fTemp+'\xB0Fahrenheit is ' + fToCel + '\xB0Celsius.';//message to show on console
    console.log(message);//write message on console
} 
celsiusToF(28);//convert 28 celsius to farenheit
fahrenheitToC(80);//convert 80 farenheit to celsius