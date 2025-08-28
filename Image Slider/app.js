// Image Slideshow

// Select all images in the .images container
let images = document.querySelectorAll(".images img");
let currentIndex = 0; // Start with the first image

function showNextImg() {
  // Hide all images
  images.forEach((img) => (img.style.display = "none"));

  // Show the current image
  images[currentIndex].style.display = "block";

  // Move to the next index (loop back to 0 if at the end)
  currentIndex = (currentIndex + 1) % images.length;
}

// Show the first image initially
images.forEach((img) => (img.style.display = "none"));
images[currentIndex].style.display = "block";

// Call showNextImg every 2 seconds
setInterval(showNextImg, 2000);

//Images on click of Buttons

let nextBtn = document.getElementById("for");
let backBtn = document.getElementById("back");

let images2 = document.querySelectorAll(".images2 img");
let curIndex = 0;

images2.forEach((img) => (img.style.display = "none"));
images2[curIndex].style.display = "block";

nextBtn.addEventListener("click", () => {
  images2.forEach((img) => (img.style.display = "none"));

  curIndex++;
  if (curIndex >= images2.length) {
    curIndex = 0;
  }

  images2[curIndex].style.display = "block";
});

backBtn.addEventListener("click", () => {
  images2.forEach((img) => (img.style.display = "none"));

  curIndex--;
  if (curIndex < 0) {
    curIndex = images2.length - 1;
  }

  images2[curIndex].style.display = "block";
});
