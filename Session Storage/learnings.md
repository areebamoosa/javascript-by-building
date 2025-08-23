# 📚 Learnings from Session Storage Mini-Project

- **Goal**: Track how long a user stays on a page using **sessionStorage**.

- **How it works**:

  1. On page load, we check if `startTime` exists in `sessionStorage`.

     ```js
     if (!sessionStorage.getItem("startTime")) {
       sessionStorage.setItem("startTime", Date.now());
     }
     ```

     - If not, we store the current timestamp.
     - `sessionStorage` only lasts until the browser/tab is closed.

  2. Update session duration every second using `setInterval`:

     ```js
     setInterval(updateSessionDuration, 1000);
     ```

  3. Calculate elapsed time:

     ```js
     let diff = Date.now() - Number(sessionStorage.getItem("startTime"));
     let hours = Math.floor(diff / (1000 * 60 * 60));
     let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((diff % (1000 * 60)) / 1000);
     ```

  4. Display in `HH:MM:SS` format:
     ```js
     timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
     ```

- **Key Takeaways**:
  - **sessionStorage** stores data **per tab/session**; it’s cleared when the tab closes.
  - You can track things like **time spent on a page** without sending data to a server.
  - Combining **sessionStorage + setInterval + DOM** gives live-updating data.

## Notes

### SessionStorage

sessionStorage is a special storage in your web browser that saves data only for the current browser tab or window.

When you close the tab or window, everything stored in sessionStorage is deleted.

It lets you store small amounts of data (like text or numbers) so your webpage can remember things during the time you have that tab open.

```js
if (!sessionStorage.getItem("startTime")) {
  sessionStorage.setItem("startTime", Date.now());
}
```

sessionStorage.getItem("startTime"): This tries to get the value saved under the name "startTime".

The ! means if there is no value saved yet (like the first time you open the page).

Then it runs the code inside the if block:

```js
sessionStorage.setItem("startTime", Date.now());
```

This saves the current time (in milliseconds) into sessionStorage under the key "startTime"

#### Date.now()

`Date.now()` is a JavaScript function that returns the current time in milliseconds since January 1, 1970 (called the Unix epoch).

It gives a super precise timestamp (like a super-detailed clock number) that you can use to measure how much time has passed.
