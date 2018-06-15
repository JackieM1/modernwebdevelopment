function displayName(name) {
    console.log('Hello '+ name)
}
displayName("Jackie");

temp = 212;
temp1 = 212; 
function convertFahrenheittoCelsius(temp) {
    let temp = (temp - 32) / 1.8;
    console.log('fahrenheit temp ' + temp + ' is ' + temp1 + ' celsius');  
};

console.log('*********************');

temp = 60;
temp1 = 60;
function convertCelsiustoFahrenheit(temp) {
    let temp1 = (temp * 1.8) + 32;  
    console.log('celsius temp ' + temp + ' is ' + temp1 + ' fahrenheit');  
} 

console.log('*********************');

let celsius=20;
let factor=1.8;
let added=32;
let fahrenheit = (celsius * 1.8) + added;
console.log('20 degrees celsius is ' + fahrenheit + ' fahrenheit');
