// Event Listeners

// Mouse Events

let click = document.getElementById("click");
let dbl = document.getElementById("dblclick");
let move = document.getElementById("mousemove");
let over = document.getElementById("mouseover");
let out = document.getElementById("mouseout");

click.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgreen";
  alert("You clicked the button!");
});

dbl.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "lightpink";
  alert("Double click detected!");
});

move.addEventListener("mousemove", () => {
  document.body.style.backgroundColor = "lightyellow";
});

over.addEventListener("mouseover", () => {
  over.style.backgroundColor = "orange";
  over.textContent = "Mouse is over me!";
});

out.addEventListener("mouseout", () => {
  out.style.backgroundColor = "lightblue";
  out.textContent = "Mouse left me!";
});

//Keyboard Events

// Keyboard Events
let keyboardInput = document.getElementById("keyboardInput");
let keyOutput = document.getElementById("keyOutput");

// Key down (fires when you press a key down)
keyboardInput.addEventListener("keydown", (event) => {
  keyOutput.textContent = `Key Down: ${event.key}`;
  keyOutput.style.backgroundColor = "lightblue";
});

// Key press (fires while holding a key)
keyboardInput.addEventListener("keypress", (event) => {
  keyOutput.textContent = `Key Press: ${event.key}`;
  keyOutput.style.backgroundColor = "lightgreen";
});

// Key up (fires when you release a key)
keyboardInput.addEventListener("keyup", (event) => {
  keyOutput.textContent = `Key Up: ${event.key}`;
  keyOutput.style.backgroundColor = "lightpink";
});

// Form Events

let inputVal = document.getElementById("inputVal");
let submitBtn = document.getElementById("submit");
let elementDiv = document.querySelector(".element");
let form = document.querySelector("form");

// Change event (fires when value changes and input loses focus)
inputVal.addEventListener("change", () => {
  elementDiv.textContent = `Value changed to: ${inputVal.value}`;
  elementDiv.style.backgroundColor = "lightyellow";
});

// Focus event (when input is clicked/selected)
inputVal.addEventListener("focus", () => {
  elementDiv.textContent = "Input is focused!";
  elementDiv.style.backgroundColor = "lightgreen";
});

// Blur event (when input loses focus)
inputVal.addEventListener("blur", () => {
  elementDiv.textContent = "Input lost focus!";
  elementDiv.style.backgroundColor = "lightcoral";
});

// Submit event (when form is submitted)
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops page reload
  elementDiv.textContent = `Form submitted with name: ${inputVal.value}`;
  elementDiv.style.backgroundColor = "lightblue";
});

// Window Events

let loadStatus = document.getElementById("loadStatus");
let resizeStatus = document.getElementById("resizeStatus");
let scrollStatus = document.getElementById("scrollStatus");

// Load event (fires when page finishes loading)
window.addEventListener("load", () => {
  loadStatus.textContent = "Page has fully loaded!";
  loadStatus.style.backgroundColor = "lightgreen";
});

// Resize event (fires when window size changes)
window.addEventListener("resize", () => {
  resizeStatus.textContent = `Window size: ${window.innerWidth}px x ${window.innerHeight}px`;
  resizeStatus.style.backgroundColor = "lightyellow";
});

// Scroll event (fires when you scroll the page)
window.addEventListener("scroll", () => {
  scrollStatus.textContent = ` Scroll position: ${window.scrollY}px`;
  scrollStatus.style.backgroundColor = "lightblue";
});
