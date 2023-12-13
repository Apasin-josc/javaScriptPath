//logical Operators
/* and, or, not */

//Logical AND (&&)
//returns true if BOTH operands are TRUE
console.log(true && true);
//we got two operands and both are true

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
//true

//Logical OR (||)
//returns true if ONE of the operands is TRUE
let highIncomeOr = true;
let goodCreditScoreOr = true;
let eligibleForLoanOr = highIncome || goodCreditScore;
console.log(eligibleForLoanOr);
//true, but if we changed one of these to false, anyways would return a TRUE 😉

//Logical NOT operator (!)
let applicationRefused = !eligibleForLoan;
//whatever we give to eligible for loan the not operator is going to give us the opposite

//anything that is not Falsy -> Truthy
/*
false || true
true

false  || 'QuePadre'
QuePadre

false || 1
1

false || 1 || 2|
1
the evaluation starts in false, at soon as we find a operand that is truthy in this case 1 so the evaluation stops and returns the `1`
this is called short-circuiting
*/
