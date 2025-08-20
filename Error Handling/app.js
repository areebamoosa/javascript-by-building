const display = document.getElementById("display");
const errorMsg = document.getElementById("error-msg");
const digitButtons = document.querySelectorAll(".digit");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

const operatorButtons = [
  document.getElementById("plus"),
  document.getElementById("sub"),
  document.getElementById("mult"),
  document.getElementById("divd"),
];

// Function to clear error message
function clearError() {
  errorMsg.textContent = "";
  errorMsg.style.color = "";
}

// Add digit button clicks
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearError();
    display.value += button.textContent;
  });
});

// Add operator button clicks
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearError();
    display.value += button.textContent;
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  display.value = "";
  clearError();
});

// Equal button tries to evaluate the expression safely
equalBtn.addEventListener("click", () => {
  try {
    clearError();

    let expression = display.value;

    // Check if input is empty
    if (!expression.trim()) {
      throw new Error("Please enter an expression.");
    }

    let result = Function(`"use strict"; return (${expression})`)();

    if (typeof result !== "number" || isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid calculation result.");
    }

    // Show result in display
    display.value = result;
  } catch (error) {
    errorMsg.textContent = "Error: " + error.message;
    errorMsg.style.color = "red";
  } finally {
    console.log("Calculation attempt finished.");
  }
});
