//Create a simple calculator that prompts the user for a number,
//an operator (either +, -, * or /) and another number,
//and then uses the functions
//created in the hard challenge to output the value in sentence form.
//Example output: "3 + 4 = 7"

const numberOne = parseFloat(prompt("Enter your first number "));
const operator = prompt(
  "Type the operator symbol to calculate your function( + , - , * , / ): "
);
const numberTwo = parseFloat(prompt("Enter your second number "));

let result;

if (operator === "+") {
  result = numberOne + numberTwo;
} else if (operator === "-") {
  result = numberOne - numberTwo;
} else if (operator === "*") {
  result = numberOne * numberTwo;
} else {
  result = numberOne / numberTwo;
}
alert(numberOne + operator + numberTwo + " = " + result);
