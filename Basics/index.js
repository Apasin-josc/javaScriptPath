//Variables
//Variables most be en camel case example joseOmarSanchezCoppola
//if you don't define a value to a variable it's going to throw undefined
let name;
console.log(name);

//constant
//the value of a constant cannot change
const interestRate = 0.3;
// it's going to throw us a error if we put this line after the declaration of const : interestRate = 1;
console.log(interestRate);

//Primitive Types
/*
✔String                          let name = `Jose Omar`                              
✔Number                          let age = 26;                        
✔Boolean                         let isApproved = true/false;                            
✔Undefined                       let name = undefined;
✔Null                            let selectedColor = null;  //situations where we want to clear the value of a variable
*/

//javaScript is a dynamic typing language 😎

//Reference Types
/*
✔Object
✔Array
✔Function
*/

/* A object in JavaScript is like a person in real like, think about a person, name, age, address and so on, properties of a person*/
let person = {
  name: `Jose Omar`,
  age: 26,
};
/*you add the key propertie in this case name/age and after that a semicolon (:) to declare the primitive type of value that we want to use 😁*/
/* Two ways to access to the values inside the object
1. Dot notation
person.name = `Que Padre`;

2. Bracket notation
person['name'] = `mjm`;
*/

//Arrays 🤠
let selectedColors = [];
//let selectedColors = ['red', 'blue']; Once that we create an array it aquires the attributes from an object if you put selectedColors.(allFunctionsAvailableForTheArray);

//Functions 🧉
//A function is a pseudo statement that perfoms an task
function greet() {
  //body of the function with all the statements to add the logic
  console.log(`Hello World`);
}
greet(); //Calling the function 😋

//Our functions can have inputs
function greetPadre(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
}
greetPadre("Omar", "Coppola"); //argument of the greetPadre function, name is the parameter of the greetPadre function 🙂

//Types of functions
function square(number) {
  return number * number;
}
console.log(square(2)); //functions called in this line 2 -> console.log and square() function :)
