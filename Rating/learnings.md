# 📚 Learnings from Rating Stars Mini-Project ⭐

- **Goal**: Create an interactive star rating system where clicking a star highlights it and all stars before it.

- **JavaScript Logic**:

  1. **Selecting all stars**:
     ```js
     const stars = document.querySelectorAll(".stars ul li i");
     ```
  2. **Adding click event to each star**:

     ```js
     stars.forEach((star, index) => {
       star.addEventListener("click", () => {
         // Remove active class from all stars
         stars.forEach((s) => s.classList.remove("active"));

         // Add active class to clicked star and all before it
         for (let i = 0; i <= index; i++) {
           stars[i].classList.add("active");
         }
       });
     });
     ```

  3. **Explanation**:
     - `index` keeps track of which star was clicked.
     - First, we clear any previous highlights (`active` class).
     - Then, we loop from the first star up to the clicked one and add the `active` class.
     - This visually “fills” all stars up to the clicked star.

- **CSS (conceptually)**:
  - `.active` class changes star color (e.g., gold) to indicate selection.

**Notes**

Concepts from this Project

```js
stars.forEach((star, index));
```

stars is a list (NodeList) of all the star elements you selected.

`.forEach` is a method that loops over each element in the list.

Inside `.forEach`, the callback function takes two parameters:

**star**: the current star element in the loop.

**index**: the position (zero-based) of the current star in the list.

So index is automatically provided by the `.forEach` method and represents the number of the current star in the array — 0 for the first star, 1 for the second, and so on.

You don’t need to define index yourself; it’s given by the forEach loop. You use it so when a star is clicked, you know which star it is in the list, so you can highlight all stars up to that one.
