function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#sub").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#mult").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#mult1").val());
    const number2 = parseInt($("#mult2").val());
    const result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#div").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = divide(number1, number2);
    $("#output").text(result);
  });
});





// -----------------------------
// const number1 = parseInt(prompt("CHOOSE A TEMPERATURE IN CELSIUS"))
// const number2 = parseInt(prompt("CHOOSE A TEMPERATURE IN FARENH"))
// function tempConverttoF (number1) {
//   return number1 * (9/5) + 32
// }
// function tempConverttoC (number2) {
//   return number2 -32 * (5/9)
// }



// const temp1 = tempConverttoF(number1)
// const temp2 = tempConverttoC(number2)

// alert("Your frist temp is Celsius:" + temp1 + "and Your second temp is Fareh:" + temp2)

