let fName = document.getElementById("nameVal");
let save = document.getElementById("save");
let forget = document.getElementById("forget");
let reload = document.getElementById("reload");

// Event Listener for save button
save.addEventListener("click", () => {
  if (fName.value === "") {
    alert("Please enter your name in the input field.");
  } else {
    saveName(fName.value);
    let p = document.createElement("p");
    p.innerHTML = `<p>Welcome back, ${fName.value}!</p>`;
    reload.appendChild(p);
  }
});

// Saves name in Local Storage
function saveName() {
  localStorage.setItem("fName", fName.value);
}

// Event Listener for forget me  button
forget.addEventListener("click", () => {
  forgetMe();
});

// Clears the name from Local Storage
function forgetMe() {
  localStorage.removeItem("fName");
  fName.value = "";
  reload.innerHTML = "";
}

//When the page reloads
window.addEventListener("load", () => {
  let storedName = localStorage.getItem("fName");

  if (storedName) {
    fName.value = storedName; // keep the input filled
    let p = document.createElement("p");
    p.innerHTML = `<p>Welcome back, ${storedName}!</p>`;
    reload.appendChild(p);
  }
});
