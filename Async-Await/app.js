let btn = document.getElementById("btn");
let order = document.getElementById("order-process");

function cook(msg, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let p = document.createElement("p");
      p.innerText = msg;
      order.appendChild(p);

      resolve(); // tells async/await that this step is done
    }, time);
  });
}

async function getOrder(msg, time) {
  await cook("Order Recieved", 1000);
  await cook("Cooking Started", 1000);
  await cook("Cooking Finished", 2000);
  await cook("Order Packed", 2000);
  await cook("Order on way", 1000);
  await cook("Order Delivered", 2000);
}

btn.addEventListener("click", getOrder);
