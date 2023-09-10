function Dclock() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let timeFormat = "AM";

  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  timeFormat = hours > 12 ? "AM" : "PM";
  //   if (hours === 0) {
  //     hours = 12;
  //   }
  //   if (hours > 12) {
  //     hours = hours - 12;
  //     timeFormat = "PM";
  //   }

  //   if (hours < 10) {
  //     hours = "0" + hours;
  //   }
  //   if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  //   if (seconds < 10) {
  //     minutes = "0" + minutes;
  //   }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  let mainTime = `${hours}:${minutes}:${seconds}`;
  document.querySelector("#time").innerText = mainTime;
  document.querySelector("small").innerHTML = timeFormat;
  setInterval(Dclock, 1000);
}

Dclock();
