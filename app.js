let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log(now);
  console.log(then);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(seconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = "Countdown " + display;
  console.log(seconds);

}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  // const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  const display = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
  // document.title = display;
  endTime.textContent = display;
}
