let btn = document.getElementById("btn");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let success = document.querySelector(".succesfull");
let tryAgain = document.getElementById("try");

btn.addEventListener("click", () => {
  // If user enters both email and pass correct
  if (email.value === "areebamoosa@gmail.com" && pass.value === "123") {
    success.classList.toggle("hidden");
  }

  // If user enters only email correct
  else if (email.value === "areebamoosa@gmail.com" || pass.value === " ") {
    alert("Password incorrect");
    tryAgain.classList.toggle("hidden");
  }

  // If user enters only pass correct
  else if (email.value === "" || pass.value === "123") {
    alert("Email incorrect");
    tryAgain.classList.toggle("hidden");
  }

  // If user both  email incorrect
  else {
    alert("Sorry Login Unsuccesful! Please enter correct user crededentials");
    tryAgain.classList.toggle("hidden");
  }
});

tryAgain.addEventListener("click", () => {
  email.value = "";
  pass.value = "";
});
