# 📚 Learnings from Async / Await App

- Practiced using **`async`** and **`await`** to handle tasks step-by-step.

- Created a function that **returns a Promise** to run code after a delay.

- Used **`setTimeout()`** inside a Promise to simulate real-life delays.

- Understood how `await` **waits for one task to finish** before starting the next.

- Learned to update the DOM dynamically after each step of the process.

- Built a smooth, readable flow without **callback hell**.

## Concepts from this mini project :

When you write:

```js
return new Promise((resolve) => {
  // You’re telling JavaScript:

  // “Hey JS, here’s some code that will finish later. When it’s done, I’ll call resolve() to let you know it’s complete.”

  // So in your case:

  function cook(msg, time) {
    return new Promise((resolve) => {
      //  resolve is given by JS
      setTimeout(() => {
        let p = document.createElement("p");
        p.innerText = msg;
        order.appendChild(p);

        resolve(); // tells async/await "we're done here"
      }, time);
    });
  }
});
```

`resolve()` is like the waiter telling you your food is ready.

Without calling `resolve()`, your await will wait forever and never move to the next step.
