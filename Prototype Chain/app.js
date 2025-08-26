// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a shared method to Person's prototype
Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Another shared method
Person.prototype.haveBirthday = function () {
  this.age++;
  return `${this.name} just turned ${this.age}!`;
};

// When the button is clicked, create objects and use prototype methods
document.getElementById("createBtn").addEventListener("click", function () {
  // Creating two Person objects
  let person1 = new Person("Areeba", 20);
  let person2 = new Person("Ali", 22);

  // both using the shared methods
  let outputText = `
        ${person1.sayHello()} <br>
        ${person2.sayHello()} <br><br>
        ${person1.haveBirthday()} <br>
        ${person2.haveBirthday()}
      `;

  document.getElementById("output").innerHTML = outputText;

  console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
});
