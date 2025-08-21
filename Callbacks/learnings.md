# 📚 Learnings from Callbacks & Callback Hell App

- Practiced using **callback functions** to run code after a delay.

- Used **`setTimeout()`** multiple times to create a step-by-step process.

- Learned how **nested callbacks** can make code harder to read (callback hell).

- Updated the DOM after each step to show the progress of the order.

- Understood why modern methods like **Promises** and **Async/Await** are better for readability.

## Notes

A callback is just:

A function that you give to another function so that it will be called later when some work is done.

When we put callbacks inside callbacks, it starts to look like a staircase going to the right →
This makes code harder to read and harder to maintain.

In real projects, this problem is solved using Promises or async/await.

In your project:

```js
setTimeout(() => {
  let p = document.createElement("p");

  p.innerText = "Order received";

  order.appendChild(p);
}, 1000);
```

The arrow function () => { ... } is a callback function passed to setTimeout.

You’re doing this many times, and sometimes inside each other:

This nesting of callbacks inside callbacks is what people call `Callback Hell`.

It’s not about whether you pass it to your own function or setTimeout — it’s about functions calling other functions later in a deeply nested structure.

`setTimeout` needs a function as its first argument — that’s the callback function.

Here’s the syntax:

```js
setTimeout(callbackFunction, delayInMilliseconds);
```

The callback function is the code you want to run later (after the delay).

You don’t run it immediately, you just give it to setTimeout so that JavaScript can run it after the delay.

**Example:**

```js
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

Here:

`() => { console.log("Hello...") }` → is the callback function.

We are passing it to setTimeout as the first parameter.

So yes — in this project, every setTimeout(() => {...}, time) is you passing a callback to setTimeout.

The “hell” part comes when you keep nesting them inside each other.

### What I learned from this project

**Callbacks** → Functions given to another function to be run later.

**Callback hell** → Happens when you nest callbacks inside callbacks, making the code harder to read.

**Why it’s bad** → Becomes messy, hard to maintain, and difficult to change timing or order.

**How to avoid it** → Use Promises or async/await to make the code look cleaner and more linear.
