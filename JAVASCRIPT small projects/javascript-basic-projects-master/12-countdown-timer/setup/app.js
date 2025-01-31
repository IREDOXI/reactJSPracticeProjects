const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const EndsGiveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");


let futureDate = new Date(2022, 3, 10, 17, 30, 0);
console.log(futureDate)

const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
const date = futureDate.getDate();

let month = futureDate.getMonth()
month = months[month];

weekday = weekdays[futureDate.getDay()]


EndsGiveaway.textContent = `Giveaway ends on ${weekday}, ${19} ${month} ${year} ${hours}:${minutes}am` 


// fututre time in ms

const futureTime = futureDate.getTime();

function getRemainigTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

// 1s = 1000ms
// 1min = 60s
// 1h = 60min
// 1d = 24h

// values in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute =  60 * 1000;
const oneSecond = 1000;

let days = t / oneDay
days = Math.floor(days)
let hours = Math.floor((t % oneDay)/oneHour);
let minutes = Math.floor((t % oneHour)/oneMinute);
let seconds = Math.floor((t % oneMinute)/1000);

const values = [days, hours, minutes, seconds];

function format(item){
  if(item<10){
    return (item = `0${item}`);
  }
    return item;
}

items.forEach(function (item, index) {
  item.innerHTML = format(values[index]);
})
if(t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 classe="expired">sorry, this giveaway has expired</h4>`
}


  }

let countdown = setInterval(getRemainigTime, 1000)

getRemainigTime()
