let btn = document.getElementById("btn");
let user = document.getElementById("details");

// User Details Object
const details = {
  Id: 6245,
  Name: "Ayra Khan",
  CGPA: 4.0,
  Year: "Second",
  Scholarship: "Fully Funded",
  Internship: "Google",
  Role: "Frontend Developer",
};

btn.addEventListener("click", () => {
  for (let det in details) {
    let p = document.createElement("p");
    p.innerHTML = det + " : " + details[det];
    user.appendChild(p);
  }
});
