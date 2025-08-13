let add = document.getElementById("add");
let rem = document.getElementById("remove");
let taskList = document.querySelector(".task-list ul");
let inputText = document.getElementById("input-val");

// Add Button

add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = inputText.value;
  taskList.appendChild(li);

  inputText.value = "";
});

//Remove Button

rem.addEventListener("click", () => {
  taskList.innerHTML = "";
});
