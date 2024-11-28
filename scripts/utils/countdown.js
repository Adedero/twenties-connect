export default function countdown (targetDate) {
  const countdownElement = document.getElementById("countdown");

  // Get the individual element containers
  const daysElement = document.querySelector("#countdown-days .chillax");
  const daysText = document.querySelector("#countdown-days .font-semibold:last-child");
  const hoursElement = document.querySelector("#countdown-hours .chillax");
  const hoursText = document.querySelector("#countdown-hours .font-semibold:last-child");
  const minutesElement = document.querySelector("#countdown-minutes .chillax");
  const minutesText = document.querySelector("#countdown-minutes .font-semibold:last-child");
  const secondsElement = document.querySelector("#countdown-seconds .chillax");
  const secondsText = document.querySelector("#countdown-seconds .font-semibold:last-child");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = `<div class="bg-secondary-500 text-primary-500 font-semibold cursor-context-menu uppercase p-4 grid place-content-center">Event Started</div>`;
      return;
    }

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM elements
    daysElement.textContent = days;
    daysText.textContent = days === 1 ? "day" : "days";

    hoursElement.textContent = hours.toString().padStart(2, "0");
    hoursText.textContent = hours === 1 ? "hour" : "hours";

    minutesElement.textContent = minutes.toString().padStart(2, "0");
    minutesText.textContent = minutes === 1 ? "minute" : "minutes";

    secondsElement.textContent = seconds.toString().padStart(2, "0");
    secondsText.textContent = seconds === 1 ? "second" : "seconds";
  }

  // Update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to set the countdown
  updateCountdown();
}