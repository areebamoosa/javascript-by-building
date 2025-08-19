let msg = document.getElementById("message");
let show = document.getElementById("display");

msg.addEventListener("input", () => {
  show.innerText = msg.value;
});
