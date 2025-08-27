# 📚 Learnings from Pomodoro Timer Mini-Project

- **Timer Setup**:

  - The timer is based on **seconds** (`totalSeconds = 25 * 60` for 25 minutes).
  - `updateTimer()` calculates minutes and seconds, then formats them with `padStart` for `MM:SS`.

- **Starting the Timer**:

  - `startTimer()` uses `setInterval` to call `updateTimer()` every second.
  - Checks if the timer is already running (`timerInterval`) to avoid multiple intervals.

- **Pausing the Timer**:

  - `pauseBtn` clears the interval with `clearInterval(timerInterval)` and sets `timerInterval` to `null`.

- **Resuming the Timer**:

  - `resumeBtn` simply calls `startTimer()` to continue countdown from where it left off.

- **Resetting the Timer**:

  - `resetBtn` clears the interval, resets `totalSeconds` back to 25 minutes, updates the display, and stops the timer.

- **Countdown Completion**:

  - When `totalSeconds` reaches 0, the interval is cleared and an alert notifies the user: `"Time's up!"`.

- **JavaScript Concepts Practiced**:
  - `setInterval` and `clearInterval` for timing.
  - DOM manipulation (`textContent`) to update the display.
  - Event listeners for buttons.
  - Conditional logic to pause/resume/reset the timer safely.
