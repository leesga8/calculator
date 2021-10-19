// function add (number1, number2) {
//   return number1 + number2;
// }

// function subtract (number1, number2) {
//   return number1 - number2;
// }
// function multiply (number1, number2) {
//   return number1 * number2;
// }
// function divide (number1, number2) {
//   return number1 / number2;
// }

function tempConverttoF (number1) {
  return number1 * (9/5) + 32
}
function tempConverttoC (number2) {
  return number2 -32 * (5/9)
}

const number1 = parseInt(prompt("CHOOSE A TEMPERATURE IN CELSIUS"))
const number2 = parseInt(prompt("CHOOSE A TEMPERATURE IN FARENH"))


// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const result = divide(number1, number2);

const temp1 = tempConverttoF(number1)
const temp2 = tempConverttoC(number2)

alert("Your frist temp is Celsius:" + temp1 + "and Your second temp is Fareh:" + temp2)

