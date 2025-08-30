let btn = document.getElementById("btn");
let load = document.getElementById("load");
let fact = document.getElementById("quote");

const URL = "https://catfact.ninja/fact";

btn.addEventListener("click", () => {
  load.innerText = "Loading...";
  setTimeout(() => {
    load.innerHTML = "";
    getFacts();
  }, 2000);
});

const getFacts = async () => {
  try {
    let response = await fetch(URL);
    let data = await response.json();

    fact.innerHTML = data.fact;
  } catch (error) {
    fact.innerHTML = "Sorry, Failed to load a cat fact.";
  }
};
