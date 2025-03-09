// Follow along with the examples here

//This is a function name (function keyword, function name, followed by parenthesis and curly brackets)
function doNothing() {}
//Bellow is a function declaration

function sayHello() {
  console.log("Hello!");
}
//For a function to function, it must be called out
sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

//Understand arguments and parameters

function doSomething(thing) {
  console.log(thing); //the return value will be "anything"
}

doSomething("anything");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

//it worked
function saySorryTo(neighbor) {
  console.log(`Sorry, ${neighbor}!`);
}
saySorryTo("Faith");

//Variable Scope
/*1. Local scope
2. Global scope 
*/

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`); //"Goodbye, Julio!"
}
say("Goodbye", "Julio");

function say(greeting, lastName) {
  console.log(`${greeting}, ${lastName}!`); //Ssup, Kwame!
}
say("Ssup", "Kwame");

//Order of Arguments
//the parameter names only have meaning to us, the programmer; JavaScript assigns values to parameters based solely on the order of the arguments that are passed.

//Return Values in JavaScript
