let radius = 1;
let x = 1;
let y = 1;

//Objected-oriented Programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

//circle.draw(); //Method

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

//Constructor Function
//Pascal notation: OneTwoThreeFour
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);

const arrowFunction = () => {
  console.log(`hola mundo`);
};

arrowFunction();
