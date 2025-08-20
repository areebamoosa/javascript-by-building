let submit = document.getElementById("submit");
let fullName = document.getElementById("name");
let rollNo = document.getElementById("roll-no");
let msg = document.getElementById("error-msg");

submit.addEventListener("click", () => {
  msg.innerHTML = "";

  if (fullName.value.trim() === "" && rollNo.value.trim() === "") {

    let p = document.createElement("p");
    p.innerText = "Please enter the crededentials";
    msg.appendChild(p);

  } else if (fullName.value.trim() === "") {

    let p = document.createElement("p");
    p.innerText = "Please enter your Full Name";
    msg.appendChild(p);

  } else if (rollNo.value.trim() === "") {

    let p = document.createElement("p");
    p.innerText = "Please enter your Roll Number";
    msg.appendChild(p);
    
  } else {

    let p = document.createElement("p");
    p.innerText = "Valid submission";
    msg.appendChild(p);
    
  }
});
