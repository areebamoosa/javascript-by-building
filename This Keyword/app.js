let btnN = document.getElementById("btnNorm");
let btnA = document.getElementById("btnArr");
let btnC = document.getElementById("btnCl");

function normal() {
  alert(this);
}

const arrow = () => {
  alert(this);
};

class ThisKeyword {
  showThis() {
    alert(this);
  }
}

const obj = new ThisKeyword();

btnN.addEventListener("click", normal);
btnA.addEventListener("click", arrow);
btnC.addEventListener("click", () => obj.showThis());
