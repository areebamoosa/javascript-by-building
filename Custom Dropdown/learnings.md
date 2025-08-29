# 📚 Learnings from Custom DropDown App

- Practiced **`classList.toggle()`** to show and hide the dropdown list.

- Learned to **detect outside clicks** using `document.addEventListener("click")`.

- Used **`contains()`** to check if the clicked element is part of the dropdown or button.

- Understood how to **close the dropdown** when clicking anywhere outside.

- Improved understanding of **event bubbling** and target checking.

## Notes

```js
document.addEventListener("click", ...)

// This listens for any click anywhere on the page.

// Not just the button, not just the dropdown — literally the whole document.

(e) => { ... }

// e is the event object that stores details about the click.

// e.target is the exact element you clicked on.

if (!btn.contains(e.target) && !drop.contains(e.target))

// btn.contains(e.target) → Checks if the clicked element is inside the button (or the button itself).

// drop.contains(e.target) → Checks if the clicked element is inside the dropdown list.

// ! means “not”.

// So this condition means:

// If the click is NOT on the button AND NOT inside the dropdown…

drop.classList.remove("show")

// If the above is true, it removes the show class, which hides the dropdown.
```
