# 📚 Learnings from Promises Mini-Project

- **Problem**: Avoid “Callback Hell” — deeply nested callbacks that are hard to read and maintain.

- **Solution**: Use **Promises** for sequential tasks. Each step returns a Promise that resolves after a delay (`setTimeout`).

- **How It Works**:

  1. `step(message, time)` creates a new Promise.
     - After `time` milliseconds, it appends a `<p>` with the message to the DOM.
     - Calls `resolve()` to indicate completion.
  2. Event listener on the button starts the chain:
     ```js
     step("Order received", 1000)
       .then(() => step("Cooking started", 2000))
       .then(() => step("Order ready", 1500))
       .then(() => step("Order served", 1000));
     ```
  3. Each `.then()` waits for the previous step to finish before running.

- **JavaScript Concepts Practiced**:

  - Creating and returning Promises.
  - Chaining Promises with `.then()` to ensure sequential execution.
  - Avoiding nested callbacks, making asynchronous code cleaner.
  - Using `setTimeout` to simulate asynchronous tasks (like cooking).

- **Outcome**: The order process is shown step-by-step in order, without messy nesting.

## Notes :

```js
function step(message, time)
```

Defines a reusable function named step that represents one step of your order process.

It takes

`message` → The text you want to show (e.g., "Cooking started")

`time` → How many milliseconds to wait before showing the message

```js
return new Promise((resolve) ) =>
```

Returns a Promise, which is a special JS object that represents a task that will finish in the future.

resolve is a function that you call when the task is done.

`resolve();`

Tells the Promise: “This step is finished, you can move to the next one.”

```js
.then(() => step("Cooking started", 2000))
```

`.then()` waits for the previous step to finish, then runs the next step.
After 2 seconds, shows `"Cooking started"`.

What You Learned from This

- How to make async steps look neat (compared to callback hell).

- Promises let you connect tasks in order without deeply nested code.

- Reusability → step() can be called for any message/time, not just fixed steps.

- Clean flow → .then() reads top-to-bottom like a story.
