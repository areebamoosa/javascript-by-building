// Live Clock

let clock = document.getElementById("clock");

function newTime() {
  let now = new Date();

  let hours = now.getHours(); // getHours() → gets the current hour (0–23).
  let minutes = now.getMinutes(); // getMinutes() → gets the current minutes (0–59).
  let seconds = now.getSeconds(); // getSeconds() → gets the current seconds (0–59).

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(newTime, 1000);

// Countdown

let countDown = document.getElementById("count-down");

let targetTime = new Date("2025-08-31 15:00:00");

function count() {
  setInterval(() => {
    let currentTime = new Date();

    let diff = targetTime - currentTime;
    // time difference in milliseconds between target time and current time.

    let diffHours = Math.floor(diff / (1000 * 60 * 60));
    let diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);

    hours = String(diffHours).padStart(2, "0");
    minutes = String(diffMinutes).padStart(2, "0");
    seconds = String(diffSeconds).padStart(2, "0");

    countDown.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

count();
