let countdownInterval;
let remainingTime;
let isPaused = false;

// DOM Elements
const timeInput = document.getElementById("time-input");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const displayTime = document.getElementById("display-time");
const body = document.body;
const alarmSound = document.getElementById("alarm-sound");

// Format time in HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

// Validate Input
function validateInput(inputMinutes) {
  if (!inputMinutes || inputMinutes <= 0) {
    return "Please enter a positive number of minutes.";
  }

  const totalSeconds = inputMinutes * 60;

  // Example limit: Reject input larger than 100 hours
  const maxSeconds = 100 * 3600; // 100 hours in seconds
  if (totalSeconds > maxSeconds) {
    return "Please enter a time less than or equal to 100 hours.";
  }

  return null; // Input is valid
}

// Start Timer
function startTimer() {
  if (!isPaused) {
    const inputMinutes = parseInt(timeInput.value);
    body.style.backgroundColor = "";

    const validationError = validateInput(inputMinutes);
    if (validationError) {
      alert(validationError);
      timeInput.value = "";
      return;
    }

    remainingTime = inputMinutes * 60; // Convert minutes to seconds
  }

  startButton.disabled = true;
  timeInput.disabled = true;
  pauseButton.disabled = false;
  stopButton.disabled = false;
  resetButton.disabled = false;
  isPaused = false;

  countdownInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      displayTime.textContent = "00:00:00";
      body.style.backgroundColor = "#fb7861";

      // console.log("Attempting to play alarm sound...");
      // alarmSound.currentTime = 0;

      // alarmSound.volume = 1;
      // alarmSound.onplay().catch((error) => {
      //   console.error("Audio playback failed:", error);
      //   alert("Unable to play the alarm sound...");
      // });
      
      // alert("Time's up!");

      // alarmSound.currentTime = 0;
      // alarmSound.play();

      resetControls();
      timeInput.value = ""; // Clear input field
      return;
    }

    displayTime.textContent = formatTime(remainingTime);
    remainingTime--;
  }, 1000);
}

// Pause Timer
function pauseTimer() {
  isPaused = true;
  clearInterval(countdownInterval);
  startButton.disabled = false;
  startButton.textContent = "Resume";
}

// Stop Timer
function stopTimer() {
  clearInterval(countdownInterval);
  displayTime.textContent = "00:00:00";
  body.style.backgroundColor = ""; // Reset background color
  resetControls();
}

// Reset Timer
function resetTimer() {
  clearInterval(countdownInterval);
  displayTime.textContent = "00:00:00";
  timeInput.value = ""; // Clear input field
  body.style.backgroundColor = ""; // Reset background color
  resetControls();
}

// Reset Controls
function resetControls() {
  timeInput.disabled = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
  stopButton.disabled = true;
  resetButton.disabled = true;
  startButton.textContent = "Start";
  isPaused = false;
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);






// let countdownInterval;
// let remainingTime;
// let isPaused = false;

// // DOM Elements
// const timeInput = document.getElementById("time-input");
// const startButton = document.getElementById("start-button");
// const pauseButton = document.getElementById("pause-button");
// const stopButton = document.getElementById("stop-button");
// const resetButton = document.getElementById("reset-button");
// const displayTime = document.getElementById("display-time");
// const body = document.body;

// // Format time in HH:MM:SS
// function formatTime(seconds) {
//   const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
//   const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
//   const secs = (seconds % 60).toString().padStart(2, "0");
//   return `${hrs}:${mins}:${secs}`;
// }

// // Start Timer
// function startTimer() {
//   if (!isPaused) {
//     const inputMinutes = parseInt(timeInput.value);
//     body.style.backgroundColor = "";
//     if (!inputMinutes || inputMinutes <= 0) {
//       alert("Please enter a valid time in minutes!");
//       return;
//     }
//     remainingTime = inputMinutes * 60; // Convert minutes to seconds
//   }

//   startButton.disabled = true;
//   timeInput.disabled = true;
//   pauseButton.disabled = false;
//   stopButton.disabled = false;
//   resetButton.disabled = false;
//   isPaused = false;

//   countdownInterval = setInterval(() => {
//     if (remainingTime <= 0) {
//       clearInterval(countdownInterval);
//       displayTime.textContent = "00:00:00";
//       body.style.backgroundColor = "#fb7861";
//       // alert("Time's up!");
//       resetControls();
//       timeInput.value = ""; // Clear input field
//       return;
//     }

//     displayTime.textContent = formatTime(remainingTime);
//     remainingTime--;
//   }, 1000);
// }

// // Pause Timer
// function pauseTimer() {
//   isPaused = true;
//   clearInterval(countdownInterval);
//   startButton.disabled = false;
//   startButton.textContent = "Resume";
// }

// // Stop Timer
// function stopTimer() {
//   clearInterval(countdownInterval);
//   displayTime.textContent = "00:00:00";
//   body.style.backgroundColor = ""; // Reset background color
//   resetControls();
// }

// // Reset Timer
// function resetTimer() {
//   clearInterval(countdownInterval);
//   displayTime.textContent = "00:00:00";
//   timeInput.value = ""; // Clear input field
//   body.style.backgroundColor = ""; // Reset background color
//   resetControls();
// }

// // Reset Controls
// function resetControls() {
//   timeInput.disabled = false;
//   startButton.disabled = false;
//   pauseButton.disabled = true;
//   stopButton.disabled = true;
//   resetButton.disabled = true;
//   startButton.textContent = "Start";
//   isPaused = false;
// }

// // Event Listeners
// startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// stopButton.addEventListener("click", stopTimer);
// resetButton.addEventListener("click", resetTimer);

