let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

// store the names and messages for each person in objects
let person1 = { name: "Alexa" };
let person2 = { name: "Barbie" };
let person3 = { name: "Siri" };

//Reuseable Function
function message(msg, element) {
  element.textContent = `${this.name} says: ${msg}`;
}

// Using call
message.call(person1, "Hello from call!", p1);

// Using apply
message.apply(person2, ["Hello from apply!", p2]);

// Using bind
let boundMessage = message.bind(person3, "Hello from bind!", p3);
boundMessage();
