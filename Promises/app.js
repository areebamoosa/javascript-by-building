let btn = document.getElementById("btn");
let order = document.getElementById("order-process");

function step(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let p = document.createElement("p");
      p.innerText = message;
      order.appendChild(p);
      resolve();
    }, time);
  });
}

btn.addEventListener("click", () => {
  step("Order received", 1000)
    .then(() => step("Cooking started", 2000))
    .then(() => step("Order ready", 1500))
    .then(() => step("Order served", 1000));
});
