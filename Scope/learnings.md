# 📚 Learnings from Scope Mini-Project

- **Goal**: Understand which variables are accessible in different levels of nested functions.

## Parent Function :

```js
function parent() {
  let age1 = 50;
  parentBox.innerHTML += `I can access: age1 = ${age1}`;
}
//   Only age1 is defined here.
```

## Child Function (inside parent):

```js
function child() {
  let age2 = 30;
  childBox.innerHTML += `I can access: age1 = ${age1}, age2 = ${age2}`;
}
```

Can access own variable age2 + parent’s age1.

Cannot access variables of grandChild yet.

## GrandChild Function (inside child):

```js
function grandChild() {
  let age3 = 5;
  grandchildBox.innerHTML += `I can access: age1 = ${age1}, age2 = ${age2}, age3 = ${age3}`;
}
```

Can access own variable age3, child’s age2, and parent’s age1.

Shows lexical scope: inner functions can access outer variables.

## Key Takeaways:

- **Function scope**: variables exist only inside the function they are defined.

- **Lexical scope**: inner functions can see outer function variables, outer functions cannot see inner variables.

- Helps understand visibility of variables in nested functions.

## 📝 Notes

### 1. Function Scope

A variable declared inside a function is only available inside that function (and its nested functions).

**Example:** age2 is only visible inside child() and grandChild() — not in parent().

### 2. Lexical Scope

Inner functions can access variables from outer functions because they are lexically inside them.

That’s why:

child() can access age1

grandChild() can access age1 and age2

### 3. No Access in Reverse

Outer functions can’t access inner function variables.

parent() can’t access age2 or age3

child() can’t access age3

## Visual Summary from the Project :

| Box Type       | Can See Ages     | Checkmarks |
| -------------- | ---------------- | ---------- |
| Parent Box     | age1             | ✅         |
| Child Box      | age1, age2       | ✅✅       |
| Grandchild Box | age1, age2, age3 | ✅✅✅     |

## Conclusion :

In JavaScript, inner functions can reach outward to use variables from where they were created, but outer functions cannot reach inside.

This is the core idea of Lexical Scope.
