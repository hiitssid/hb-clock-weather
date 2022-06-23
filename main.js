function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();

  minute = checkTime(minute);
  // second = checkTime(second);
  let time = document.querySelector(".time");
  secondDisplay = document.querySelector(".second");
  time.innerText = `${hour} : ${minute}`;
  // secondDisplay.innerText = `${second}`;
  setTimeout(startTime, 1000);
  // console.log(second);
}
function dateLoader() {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  let monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthYearDisplay = document.getElementById("date-month-year");
  monthYearDisplay.innerText = `${daysNames[day]}, ${monthsNames[month]} ${date}, ${year}`;
  setTimeout(dateLoader, 1000000);
  console.log(date, month, year);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
//------------NOSLEEP-----------------------
var noSleep = new NoSleep();
noSleep.enable(); // keep the screen on!

var wakeLockEnabled = true;
console.log(wakeLockEnabled);
function wake() {
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
    console.log("WAKE LOCK TRUE");
  } else {
    noSleep.enable();
    console.log("WAKE LOCK TRUE AGAIN");
  }
}
setInterval(wake, 30000);

// --------------------------------------
window.onload(dateLoader());
