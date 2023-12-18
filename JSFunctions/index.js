//Function Declaration
function walk() {
  console.log("walk");
}

//Anonymous Function Expression
let run = function () {
  console.log("run");
};

//A function in JavaScript is a function 🎅, if we are going to use the anonymous function expression yo need to declare it after you create it, example: run();
//If you do it before creating it it's going to throw a uncaught reference Error: run is not defined. HOISTING, hoisting is the process of moving functions declarations
//at the top of the file.

let move = run;
run();
move();

//Getters and setters
const person = {
  firstName: "Omar",
  lastName: "Coppola",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split("");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

//this is the object that is executing the current function
//method -> obj
//function -> global (window, global)

const video = {
  title: "quePadre",
  play() {
    console.log(this);
  },
};
