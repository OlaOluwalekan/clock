const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

const hoursDiv = document.querySelector(".hours");
const minutesDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector(".seconds");

const switchDiv = document.querySelector(".switch-clock");
const switchBtn = document.querySelector(".switch");
const switchAnalog = document.querySelector(".switch-analog");
const switchDigital = document.querySelector(".switch-digital");

const analogClock = document.querySelector(".analog-clock");
const digitalClock = document.querySelector(".digital-clock");

// WHEN THE WINDOW LOADS
window.onload = () => {
  // GetCurrentTime();
  setInterval(() => {
    GetAnalogTime();
    GetDigitalTime();
  }, 1000);
};

const GetAnalogTime = () => {
  let currentDate = new Date();
  let sec = currentDate.getSeconds();
  let min = currentDate.getMinutes();
  let hr = currentDate.getHours();
  // console.log(hr - 12, min, sec);

  let secHandPos = sec * 6;
  let minHandPos = min * 6;
  let hrHandPos = (hr - 12 + min / 60) * 30;

  secondsHand.style.transform = `rotate(${secHandPos}deg)`;
  minutesHand.style.transform = `rotate(${minHandPos}deg)`;
  hoursHand.style.transform = `rotate(${hrHandPos}deg)`;
};

const GetDigitalTime = () => {
  let currentDate = new Date();
  let sec = currentDate.getSeconds();
  let min = currentDate.getMinutes();
  let hr = currentDate.getHours();
  // console.log(hr - 12, min, sec);

  if (hr < 10) {
    hoursDiv.innerHTML = "0" + hr;
  } else {
    hoursDiv.innerHTML = hr;
  }
  if (min < 10) {
    minutesDiv.innerHTML = "0" + min;
  } else {
    minutesDiv.innerHTML = min;
  }
  if (sec < 10) {
    secondsDiv.innerHTML = "0" + sec;
  } else {
    secondsDiv.innerHTML = sec;
  }
};

let clockType = "analog";
// to change from analog to digital and back
const SwitchClock = () => {
  if (clockType == "analog") {
    switchBtn.style.left = "50%";
    clockType = "digital";
    switchAnalog.style.color = "blue";
    switchDigital.style.color = "white";
    digitalClock.style.display = "flex";
    analogClock.style.display = "none";
  } else {
    switchBtn.style.left = "0";
    clockType = "analog";
    switchAnalog.style.color = "white";
    switchDigital.style.color = "blue";
    digitalClock.style.display = "none";
    analogClock.style.display = "flex";
  }
};

switchDiv.onclick = () => {
  SwitchClock();
};
