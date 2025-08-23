let timeDisplay = document.getElementById("time-interval");

// On page load, check if start time is stored; if not, store current time
if (!sessionStorage.getItem("startTime")) {
  sessionStorage.setItem("startTime", Date.now());
}

function updateSessionDuration() {
  let startTime = Number(sessionStorage.getItem("startTime"));
  let now = Date.now();

  let diff = now - startTime;

  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateSessionDuration, 1000);

updateSessionDuration();
