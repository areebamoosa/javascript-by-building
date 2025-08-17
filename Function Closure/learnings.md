# 📚 Learnings from Closures Counter App

- Practiced **function closures**: a function inside another function that remembers its variables.

- Created a **private variable** `counter` that can’t be changed directly from outside.

- Built a **click-based counter** that increases every time the button is clicked.

- Understood how **closures preserve state** between function calls.

- Learned to **link closures with DOM events** to update the input value dynamically.

## 📝 Notes :

### 1. Closures

You learn how a function can "remember" and use variables from the function where it was created — even after that outer function is finished running.

It’s like giving someone a box that contains a number and a button.
They can press the button to increase the number,
but they can’t open the box to cheat and change the number manually.

### 2. Data Privacy

Normally, variables in JavaScript can be accessed and changed from anywhere.

But in this project, you see how to protect the counter variable using a closure.

Only the function returned by createCounter() can change it.

This is a real-world skill — you learn how to protect important data from being changed accidentally.
