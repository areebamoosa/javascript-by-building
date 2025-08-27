# 📚 Learnings from Events App

- Practiced **Mouse Events**: `click`, `dblclick`, `mousemove`, `mouseover`, `mouseout`.

- Learned **Keyboard Events**: `keydown`, `keypress`, `keyup` to detect user input in real time.

- Used **Form Events**: `change`, `focus`, `blur`, `submit` to handle input changes and submissions.

- Practiced **Window Events**: `load`, `resize`, `scroll` to react to page and window changes.

- Learned to **update the DOM dynamically** based on different event triggers.

- Used **`event` object** to get information about the action (like `event.key`).

- Improved understanding of **how user interactions can drive UI updates** in real time.

## Notes

### Keyboard Events Concepts

keyboard event lets you detect which key the user is pressing or releasing.

For example:

```
event.key → "a", "A", "Enter", "Space", "Shift", etc.

event.code → "KeyA", "Enter", "Space", etc. (based on the physical key location, not the letter case).
```

With them, you can:

- Show the key name in real time (like we just did)

- Trigger actions when certain keys are pressed (e.g., Enter to submit a form)
