//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 & 5 => FizzBuzz
//if it's not divisible by 3 || 5 => input
//if we pass a NaN => NaN

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log(`not a Number`);
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log(`FizzBuzz 🐟⚡`);
  } else if (input % 3 === 0) {
    console.log(`Fizz 🐟`);
  } else if (input % 5 === 0) {
    console.log(`Buzz ⚡ `);
  }
}
