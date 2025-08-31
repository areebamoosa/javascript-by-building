let cartButtons = document.querySelectorAll(".cart");
let cartPage = document.getElementById("cart-page");
let cartTotal = document.getElementById("cart-total");
let cart = [];

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get product container
    let product = button.closest(".product");

    // Get price text and parse number only
    let priceText = product.querySelector(".price").innerText; // e.g. "Price : 12,000 PKR"
    let price = parseInt(priceText.replace(/[^0-9]/g, ""));

    // Get image src
    let imgSrc = product.querySelector("img").src;

    // Create product object with unique id
    let productObj = {
      price: price,
      imgSrc: imgSrc,
      id: Date.now() + Math.random(),
    };

    // Add product to cart
    cart.push(productObj);

    renderCart();
  });
});

function renderCart() {
  cartPage.innerHTML = ""; // Clear previous items

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartPage.innerHTML += `
      <div class="cart-item" data-index="${index}">
        <img src="${item.imgSrc}" alt="Product Image" width="50" />
        <p>Price: ${item.price} PKR</p>
        <button class="remove-btn">Remove</button>
      </div>
    `;
  });

  cartTotal.innerText = `Total Price: ${total} PKR`;

  let removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let index = e.target.parentElement.getAttribute("data-index");
      cart.splice(index, 1);
      renderCart(); // Re-render after removing
    });
  });
}
