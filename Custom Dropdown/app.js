let btn = document.getElementById("drop");
let drop = document.getElementById("dropdown-list");

btn.addEventListener("click", () => {
  drop.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !drop.contains(e.target)) {
    drop.classList.remove("show");
  }
});
