window.addEventListener("DOMContentLoaded", () => {
  //Timer

  const deadline = "2023-02-24";

  function GetTimeRemainig(endTime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());

    if (t <= 0) {
      (days = 0), (hours = 0), (minutes = 0), (seconds = 0);
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / (1000 / 60)) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function GetZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function SetClock(selector, endTime) {
    const timer = document.querySelector(".timer");
    days = timer.querySelector("#days");
    hours = timer.querySelector("#hours");
    minutes = timer.querySelector("#minutes");
    seconds = timer.querySelector("#seconds");
    timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = GetTimeRemainig(endTime);

      days.innerHTML = GetZero(t.days);
      hours.innerHTML = GetZero(t.hours);
      minutes.innerHTML = GetZero(t.minutes);
      seconds.innerHTML = GetZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  SetClock(".timer", deadline);
});
