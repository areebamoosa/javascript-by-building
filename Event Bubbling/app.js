let parent = document.getElementById("box-1");
let child = document.getElementById("box-2");

parent.addEventListener("click", () => {
  let p = document.createElement("p");
  p.innerText = "Parent Box was clicked";
  parent.appendChild(p);
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  let p = document.createElement("p");
  p.innerText = "Child Box was clicked";
  child.appendChild(p);
});
