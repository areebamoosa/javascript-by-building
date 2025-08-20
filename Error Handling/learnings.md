# 📚 Learnings from Error Handling Calculator App

- Practiced **`try...catch...finally`** to handle errors safely.

- Learned to **show friendly error messages** instead of letting the app crash.

- Used **digit and operator buttons** to build expressions dynamically in the input field.

- Checked for **invalid input** like empty expressions or invalid calculations.

- Displayed **calculation results safely** using `Function()` to evaluate expressions.

- Used **`finally`** to run code no matter if an error occurred or not.

- Improved understanding of **safe coding practices** for interactive apps.

## Notes :

### finally block in a try...catch...

`finally` statement is a piece of code that always runs, no matter what happens in the try or catch blocks.

Here’s what each part does:

**try:** Runs the main code that might throw an error.

**catch:** Runs if an error occurs in the try block, so you can handle the error.

**finally:** Runs after either the try or the catch block finishes — always, whether an error happened or not.

```js
display.value += button.textContent;

// display is the input field where the user types the calculation.

// button.textContent is the text shown on the button (like "+", "-", "*", or "/").

// += means "add this text to the end of whatever is currently inside display.value".

// So if display.value was "12", and you click the "+" button, now it becomes "12+".
```
