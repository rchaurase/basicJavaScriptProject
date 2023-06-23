const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minsEl = document.getElementById('mins') ;
const secondsEl = document.getElementById('seconds');


const newYears = '2024-01-01'

function countDown(){
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  
  const totalSeconds = (newYearDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds /  3600) %24;
  const mins = Math.floor(totalSeconds /  60) %60;
  const seconds = Math.floor(totalSeconds) % 60;

   daysEl.innerHTML = formateTime(days);
   hoursEl.innerHTML = formateTime(hours);
   minsEl.innerHTML= formateTime(mins);
   secondsEl.innerHTML= formateTime(seconds);
}
function formateTime(time){
  return time < 10 ? `0${time}` : time;
}

// initial call
countDown();
setInterval(countDown, 1000)
