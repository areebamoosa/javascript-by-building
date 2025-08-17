let countVal = document.getElementById("countVal");
let count = document.getElementById("count");

function createCounter() {
  // This function will return another function (that’s what a closure is).

  let counter = 0;
  //Inside createCounter, we're making a private variable called counter and setting it to 0.
  // Only the inner function will be able to use or change this — nothing outside can touch it.

  return function () {
    // This is the returned function — a function inside another function
    counter += 1;
    return counter;
    //This is where closure happens:
    //This inner function remembers the counter variable even after createCounter() is done.
  };
}

const increment = createCounter();
// Here we are calling createCounter() once, and storing the result (the inner function) in a constant called increment.
// That increment function now has its own private counter (starting at 0) inside it.

count.addEventListener("click", () => {
  let result = increment();
  countVal.value = result;
});
