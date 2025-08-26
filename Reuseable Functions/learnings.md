# 📚 Learnings from Reuseable Functions Mini-Project

- **Goal**: Create one function and use it for multiple people without rewriting it, using `call`, `apply`, and `bind`.

- **Data**:

  ```js
  let person1 = { name: "Alexa" };

  let person2 = { name: "Barbie" };

  let person3 = { name: "Siri" };
  ```

## Reusable Function:

```js
function message(msg, element) {
  element.textContent = `${this.name} says: ${msg}`;
}
```

## Using call:

```js
message.call(person1, "Hello from call!", p1);
```

call immediately invokes the function.

The first argument sets the this value.

Remaining arguments are passed normally.

## Using apply:

```js
message.apply(person2, ["Hello from apply!", p2]);
```

apply is almost like call but arguments are passed as an array.

Useful when you already have arguments in an array.

## Using bind:

```js
let boundMessage = message.bind(person3, "Hello from bind!", p3);
boundMessage(); // now we call it
```

bind does not invoke immediately.

It returns a new function with this and arguments pre-set.

You can call it later whenever needed.

### Key Takeaways:

**call** → invoke now with specified this.

**apply** → invoke now with this and args as array.

**bind** → returns a new function with this and args pre-set.

Helps make functions reusable for different objects without rewriting them.

## Notes

### Use cases of each

#### call()

What it does: Calls the function immediately, and passes arguments one by one.

When to use:

When you know the exact arguments beforehand.

Example: Borrowing methods from another object quickly

```js
greet.call(user, "Hi", "How are you?");
```

#### apply()

What it does: Calls the function immediately, but arguments are passed in an array.

When to use:

When arguments are already in an array form.

Example: Passing an array to Math.max:

```js
Math.max.apply(null, [4, 7, 1]);
```

#### bind()

What it does: Does not call immediately — returns a new function that’s permanently bound to the given this value.

When to use:

When you want to store a function with fixed this for later use.

Example: Event handlers where you want this to refer to a specific object.

```js
const boundFn = greet.bind(user, "Hi");

boundFn(); // can be called later
```
