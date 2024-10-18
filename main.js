
function clock() {
  const hour = document.getElementById("hours");
  const minute = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const secunds = String(now.getSeconds()).padStart(2, "0");

  hour.textContent = hours;
  minute.textContent = minutes;
  seconds.textContent = secunds;
}
setInterval(clock, 1000);
clock();
