let input = document.getElementById("inputVal");

let firstNum;
let operator;
let secNum;

// Event Listener for each operator.

document.getElementById("btn-1").addEventListener("click", () => {
  firstNum = Number(input.value);
  operator = "+";
  input.value = "";
});

document.getElementById("btn-2").addEventListener("click", () => {
  firstNum = Number(input.value);
  operator = "-";
  input.value = "";
});

document.getElementById("btn-3").addEventListener("click", () => {
  firstNum = Number(input.value);
  operator = "*";
  input.value = "";
});

document.getElementById("btn-4").addEventListener("click", () => {
  firstNum = Number(input.value);
  operator = "/";
  input.value = "";
});

// Calculate Function using Function Declaration

// let result2 = Calculate(3, 5, "+");
// Can be called before it's written in the code.

function Calculate(firstNum, secNum, operator) {
  if (operator == "+") {
    return firstNum + secNum;
  } else if (operator == "-") {
    return firstNum - secNum;
  } else if (operator == "*") {
    return firstNum * secNum;
  } else if (operator == "/") {
    return firstNum / secNum;
  } else {
    return "Invalid operator";
  }
}

// Calculate Function using Function Expression

// let result = Calculation(3, 5, "+");
// Cannot be called before it's defined — you’ll get a ReferenceError or TypeError.

// let Calculation = function (firstNum, secNum, operator) {
//   if (operator == "+") {
//     return firstNum + secNum;
//   } else if (operator == "-") {
//     return firstNum - secNum;
//   } else if (operator == "*") {
//     return firstNum * secNum;
//   } else if (operator == "/") {
//     return firstNum / secNum;
//   } else {
//     return "Invalid operator";
//   }
// };

// Event listener for equals sign

document.getElementById("equal").addEventListener("click", () => {
  secNum = Number(input.value);
  input.value = Calculate(firstNum, secNum, operator);
  // input.value = Calculation(firstNum, secNum, operator);
});
