// Accessing variables and testing the scope and seeing which is accessible where.

function parent() {
  let age1 = 50;

  const parentBox = document.getElementById("parent");
  parentBox.innerHTML += `<p class="result">I can access: age1 = ${age1}</p>`;

  function child() {
    let age2 = 30;

    const childBox = document.getElementById("child");
    childBox.innerHTML += `<p class="result">I can access: age1 = ${age1}, age2 = ${age2}</p>`;

    function grandChild() {
      let age3 = 5;

      const grandchildBox = document.getElementById("grandchild");
      grandchildBox.innerHTML += `<p class="result">I can access: age1 = ${age1}, age2 = ${age2}, age3 = ${age3}</p>`;
    }
    grandChild();
  }
  child();
}
parent();
