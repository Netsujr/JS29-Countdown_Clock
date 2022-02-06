let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  // console.log(now);
  // console.log(then);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      document.body.classList.add('time-finished');
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = "Countdown " + display;
  // console.log(seconds);

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

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  document.body.classList.remove('time-finished');
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset;
});
