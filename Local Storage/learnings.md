# 📚 Learnings from Local Storage Mini-Project

- **Remember Me App**:

  - Saved user input (`name`) in `localStorage` with `setItem`.
  - Retrieved stored name on page load using `getItem` to show a welcome back message.

  - Cleared storage with `removeItem` using a "Forget Me" button.

- **DOM & Events**:

  - `addEventListener` for click events and `window.load` event.

  - Used `innerHTML` to show personalized messages.

- **Concepts Practiced**:

  - Persistent data in browser (localStorage persists even after reload).

  - Basic input validation (checking empty input).
  - Interactivity: Save → Reload → Display → Forget.

## Concepts :

window is a built-in global object in the browser that represents the browser window itself. You don’t have to define it — it’s always there when your JS runs in a browser.

load is an event that the window object emits when the entire page, including all dependent resources like images and stylesheets, has fully loaded.

window.addEventListener("load", callback) is a way to say:
“Hey browser, when the page has finished loading, please run this callback function.”

So both window and the "load" event are provided by the browser environment — you don’t define them yourself, just use them!
