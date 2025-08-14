let input = document.getElementById("inputVal");
let btn = document.getElementById("btn");
let dType = document.querySelector(".data-type");
let tExp = document.querySelector(".type-exp");
let clear = document.getElementById("clear");

btn.addEventListener("click", () => {
  try {
    let type = typeof eval(input.value);
    dType.classList.toggle("hidden");
    tExp.classList.toggle("hidden");
    clear.classList.toggle("hidden");

    switch (type) {
      case "string": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = "Any text written in quotes.";
        tExp.appendChild(p2);
        break;
      }
      case "number": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = "Any number — whole or with decimals.";
        tExp.appendChild(p2);
        break;
      }
      case "boolean": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = "Only true or false.";
        tExp.appendChild(p2);
        break;
      }
      case "null": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = "Empty value on purpose.";
        tExp.appendChild(p2);
        break;
      }
      case "undefined": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText =
          "undefined means something exists, but you haven't given it a value yet.";
        tExp.appendChild(p2);
        break;
      }
      case "symbol": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = "A special unique value that never matches any other.";
        tExp.appendChild(p2);
        break;
      }
      case "bigint": {
        let p = document.createElement("p");
        p.innerHTML = type;
        dType.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText =
          "Super long numbers that regular number type can't handle.";
        tExp.appendChild(p2);
        break;
      }
    }
  } catch (error) {
    alert("Invalid input! Try something like: 123, true, 'hello', null, etc.");
  }
});

clear.addEventListener("click", () => {
  input.value = " ";
  dType.innerHTML = " ";
  tExp.innerHTML = " ";
});
