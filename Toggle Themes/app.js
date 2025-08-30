let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // Toggle the 'dark' class on the <body>
  document.body.classList.toggle("dark");

  // Check if dark mode is active
  if (document.body.classList.contains("dark")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
});
