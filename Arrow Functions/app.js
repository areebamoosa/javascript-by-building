let tempVal = document.getElementById("tempVal");

let cel = document.getElementById("celsius");
let faren = document.getElementById("faren");

cel.addEventListener("click", () => {
  const Celsius = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  let result = Celsius(Number(tempVal.value));
  tempVal.value = result;
});

faren.addEventListener("click", () => {
  const farenheit = (farenheit) => {
    return ((farenheit - 32) * 5) / 9;
  };

  let result = farenheit(Number(tempVal.value));
  tempVal.value = result;
});
