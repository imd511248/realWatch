const clock = document.getElementById("clock");
let counter = 0;
let interval;

function convertTime(second) {
  let hr = Math.floor(second / 3600);
  let min = Math.floor(second / 60);
  let sec = Math.floor(second % 60);
  1000; //((counter)=0) % 60)//
  let modifySecond = sec <= 9 ? "0" + sec : sec;
  let modifyMin = min <= 9 ? "0" + min : min;
  let modifyHour = hr <= 9 ? "0" + hr : hr;
  return modifyHour + ":" + modifyMin + ":" + modifySecond;
}
function startBtnClicked() {
  interval = setInterval(() => {
    counter++;
    clock.innerText = convertTime(counter);
  }, 1000);
  document.getElementById("start").disabled = true;
  document.getElementById("resume").disabled = true;
}

function stopBtnClicked() {
  clearInterval(interval);
  let md1 = document.getElementsByClassName("md1");
  document.getElementById("start").disabled = false;
  document.getElementById("resume").disabled = false;
  // if (md1 == found) {
  // }
}

function resetBtnClicked() {
  clearInterval(interval);
  counter = 0;

  clock.innerText = convertTime(counter);
  document.getElementById("start").disabled = false;
}
function resumeBtnClicked() {
  startBtnClicked();
  document.getElementById("resume").disabled = true;
}
