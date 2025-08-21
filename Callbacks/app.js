let btn = document.getElementById("btn");
let order = document.getElementById("order-process");

btn.addEventListener("click", () => {
  call();
});

function call() {
  setTimeout(() => {
    let p = document.createElement("p");
    p.innerText = "Order received";
    order.appendChild(p);

    setTimeout(() => {
      let p = document.createElement("p");
      p.innerText = "Cooking started";
      order.appendChild(p);

      setTimeout(() => {
        let p = document.createElement("p");
        p.innerText = "Cooking finished!";
        order.appendChild(p);

        setTimeout(() => {
          let p = document.createElement("p");
          p.innerText = "Order Packed.";
          order.appendChild(p);

          setTimeout(() => {
            let p = document.createElement("p");
            p.innerText = "Out for Delivery.";
            order.appendChild(p);

            setTimeout(() => {
              let p = document.createElement("p");
              p.innerText = "Order Delivered!";
              order.appendChild(p);
            }, 3000);
          }, 1000);
        }, 2000);
      }, 3000);
    }, 2000);
  }, 1000);
}
