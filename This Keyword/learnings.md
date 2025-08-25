# 📚 Learnings from This Keyword Project

- Practiced **understanding `this`** in different contexts: normal functions, arrow functions, and classes.

- **Normal Function**:

  - `this` refers to the element or object that called the function (depends on how it is invoked).

- **Arrow Function**:

  - `this` does **not** have its own context; it uses `this` from the surrounding lexical scope.

- **Classes**:

  - Inside class methods, `this` refers to the instance of the class (the object created with `new`).

- Observed **behavior differences** between function types in real usage, helping understand scope and object references.

## Notes :

### 1. Normal function (function normal() {})

this in a normal function depends on how it’s called.

When you click the button, this will be the button itself (because the function is called as an event listener in normal mode).

**Lesson:** Normal functions get their this value from the caller (runtime binding).

### 2. Arrow function (const arrow = () => {})

Arrow functions do not have their own this.

Instead, they inherit this from the place where they were created (lexical scope).

In this code, this is whatever it was outside the arrow function — in browsers, that’s usually window.

**Lesson:** Arrow functions keep the this from their surroundings, so it won’t point to the button.

### 3. Class method (obj.showThis())

Inside a class method, this refers to the object that called it (obj in this case).

In the third button, we used an arrow function wrapper in the addEventListener so that this inside showThis() still refers to obj.

**Lesson:** In class methods, this usually points to the object instance — but if you’re not careful with event listeners, this can get lost.

## Overall takeaway:

**Normal function** → this is decided at call time.

**Arrow function** → this is decided at creation time.

**Class method** → this is usually the object, but you must keep it bound correctly when passing it around.
