//removing elements from an array

const numbers = [1, 2, 3, 4];

//END
const last = numbers.pop();

//BEGINNING
const first = numbers.shift();

//MIDDLE
numbers.splice(2, 1);

//EMPTYING AN ARRAY
//<instead of using const use let> || numbers.length = 0;
