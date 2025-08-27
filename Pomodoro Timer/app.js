const timeDisplay = document.getElementById("time");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const resetBtn = document.getElementById("reset");

let totalSeconds = 25 * 60; // 25 minutes in seconds
let timerInterval = null;

function updateTimer() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
    alert("Time's up!");
  }
}

// Start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

startTimer();

// Pause button event
pauseBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// Resume button event
resumeBtn.addEventListener("click", () => {
  startTimer();
});

// Reset button event
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  totalSeconds = 25 * 60;
  updateTimer();
  timerInterval = null;
});
