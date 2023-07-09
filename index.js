setInterval(() => {
  let time = new Date();

  let hr = time.getHours();
  let mn = time.getMinutes();
  let sc = time.getSeconds();

  let hr_rotate = 30 * hr + mn / 2;
  let mn_rotate = 6 * mn;
  let sc_rotate = 6 * sc;
  //   let hours = document.getElementById("hours");
  document.getElementById("hours").style.transform = `rotate(${hr_rotate}deg)`;
  document.getElementById("min").style.transform = `rotate(${mn_rotate}deg)`;
  document.getElementById("sec").style.transform = `rotate(${sc_rotate}deg)`;
}, 1000);
