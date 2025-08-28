let tabsList = document.querySelectorAll(".tabs ul li");
let content = document.querySelectorAll(".tab-content");

tabsList.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabsList.forEach((t) => {
      t.classList.remove("active");
    });

    // Remove active class from all content
    content.forEach((c) => {
      c.classList.remove("active");
    });

    // Add active class to the clicked tab
    tab.classList.add("active");

    // Get the data-tab number of the clicked tab
    let tabNumber = tab.getAttribute("data-tab");

    // Show the content that matches the tab
    content.forEach((c) => {
      if (c.getAttribute("data-tab") === tabNumber) {
        c.classList.add("active");
      }
    });
  });
});
