# 📚 Learnings from Event Bubbling App

- Practiced **event listeners** on parent and child elements.

- Learned how **events bubble** from child to parent by default.

- Used **`e.stopPropagation()`** to stop the event from reaching the parent.

- Dynamically **added messages** to the DOM when boxes were clicked.

- Understood the difference between **parent and child event handling**.

- Improved understanding of **event flow and propagation control** in JavaScript.

## Notes :

### How Event Bubbling Works:

Event bubbling means when you click on a child element, the event also "bubbles up" and triggers the parent’s event listener too (unless you stop it).

You saw this happen when clicking on #box-2, both parent and child messages appeared — unless you used e.stopPropagation().

Using `e.stopPropagation()`
This method stops the event from going up to the parent.

`e` refers to the event object (the click event).

`.stopPropagation()` prevents the event from bubbling up to the parent, so parent won't log anything when child is clicked.

If you remove e.stopPropagation(), both messages will be printed when clicking on the child.
