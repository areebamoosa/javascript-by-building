# 📚 Learnings from Prototype Chain Mini-Project

- **Problem**: Avoid duplicating methods for every object instance — we want shared behavior.

- **Solution**: Use **Prototypes**:

  - Every JavaScript object has a hidden link to a **prototype** object.
  - Methods added to the prototype are shared across all instances.

- **How It Works**:

  1. `Person` is a constructor function that sets `name` and `age`.
  2. Shared methods are added to `Person.prototype`:

     ```js
     Person.prototype.sayHello = function () {
       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
     };

     Person.prototype.haveBirthday = function () {
       this.age++;
       return `${this.name} just turned ${this.age}!`;
     };
     ```

  3. When a `Person` instance is created:
     ```js
     let person1 = new Person("Areeba", 20);
     ```
     - `person1` can access `sayHello()` and `haveBirthday()` via the prototype chain.
  4. Prototype chain check:
     ```js
     Object.getPrototypeOf(person1) === Person.prototype; // true
     ```

- **Outcome**:

  - Shared methods are memory-efficient.
  - Each instance can use common behavior without duplicating functions.

  - Demonstrates the **prototype chain** concept clearly.

### Notes

This little project teaches you the core idea of JavaScript prototypes and how object methods can be shared instead of copied for every object.

```js
Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

This is a `constructor function` — a special function used to create multiple similar objects.

When you call it with new, it creates a new object and sets this to refer to that object.

#### Prototypes

```js
Person.prototype.sayHello = function () { ... }
```

Prototype is like a shared space for all objects created from a constructor.

If a method is in the prototype, every object can use it, but it’s not copied into each object → saves memory.

**Example:** both person1 and person2 share the same sayHello function.

##### Adding Shared Methods

```js
Person.prototype.sayHello = function () { ... }

Person.prototype.haveBirthday = function () { ... }
```

These methods are stored once in the prototype, but all objects can access them.

It’s like giving all “Person” objects the same abilities.

##### Creating Objects

```js
let person1 = new Person("Areeba", 20);
let person2 = new Person("Ali", 22);
```

`new Person(...)` → creates a new object, links it to `Person.prototype`, sets the properties, and returns it.

##### Prototype Chain

```js
Object.getPrototypeOf(person1) === Person.prototype; // true
```

This checks that person1’s prototype is indeed Person.prototype.

In JavaScript, if a property isn’t found on the object itself, JS looks “up the chain” to its prototype.

**Constructor function** = a normal function that is used to make objects.

**prototype** = a shared place where all objects made by that constructor can store/use methods, instead of copying them into each object.

**new keyword** = creates a new object, links it to the prototype, and calls the constructor function.

## In JavaScript:

Constructor function + prototype = Old/traditional way to do object-oriented programming.

class syntax = Newer, cleaner, and easier-to-read way that does exactly the same thing under the hood.
