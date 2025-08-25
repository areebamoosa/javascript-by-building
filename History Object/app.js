let backBtn = document.getElementById("back-btn");
let forBtn = document.getElementById("for-btn");
let hist = document.getElementById("history");

backBtn.addEventListener("click", () => {
  history.back();
});
forBtn.addEventListener("click", () => {
  history.forward();
});

let historyLength = history.length;

hist.innerHTML = `<p> History Length : ${historyLength} </p>`;
