
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/*const inputTimeField  = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

let daysTimer = document.querySelector('span[data-days]');
let hoursTimer = document.querySelector('span[data-hours]');
let minsTimer = document.querySelector('span[data-minutes]');
let secTimer = document.querySelector('span[data-seconds]');



const options =  {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates,) {
      const currentDateTime = new Date().getTime();
      console.log(currentDateTime);
      const selectedDateTime = selectedDates[0].getTime();
      console.log(selectedDateTime);
      
      const difference = selectedDateTime - currentDateTime;
      console.log(difference);

      if(selectedDates[0].getTime()<= new Date().getTime()){
        iziToast.error({
          message: "Please choose a date in the future",
        });
        startBtn.setAttribute("disabled", true); 
      } else {
        startBtn.removeAttribute("disabled"); 
      }
    },
  };
  
  
const datePicker = flatpickr(inputTimeField, options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds};
    
  }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} 

  
  
  function handlerTimeClick(){

  let timer = setInterval(() => {
      const currentDateTime = new Date().getTime();
      const selectedDateTime = datePicker.selectedDates[0].getTime();
      let deltaTime = selectedDateTime - currentDateTime;
     
  
     const { days, hours, minutes, seconds} = convertMs(deltaTime);
     daysTimer.textContent = addLeadingZero(days);
     hoursTimer.textContent = addLeadingZero(hours);
     minsTimer.textContent = addLeadingZero(minutes);
     secTimer.textContent = addLeadingZero(seconds);
      
     
    if (deltaTime <= 1000) {
      clearInterval(timer);
    }
    }, 1000);
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  startBtn.addEventListener("click", handlerTimeClick);
  */ 



const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let timerDays = document.querySelector('[data-days]');
let timerHours = document.querySelector('[data-hours]');
let timerMinutes = document.querySelector('[data-minutes]');
let timerSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    startBtn.disabled = false;
    startBtn.addEventListener('click', startCounter);
    if (selectedDates[0] < Date.now()) {
      iziToast.warning({
        position: 'topCenter',
        title: 'Warning',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
      return;
    } else if (event.target.nodeName !== 'button') {
      return;
    } else {
      startCounter();
    }
  },
};

export const fp = flatpickr(inputDate, options);

function startCounter(event) {
  iziToast.success({
    position: 'topCenter',
    title: 'OK',
    message: 'A Good Choice!',
  });

  startBtn.disabled = true;
  inputDate.disabled = true;
  let intervalId = null;

  let userSelectedDate = fp.selectedDates[0];

  intervalId = setInterval(() => {
    let currentTime = Date.now();

    let deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      inputDate.disabled = false;
      startBtn.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    timerDays.textContent = pad(days);
    timerHours.textContent = pad(hours);
    timerMinutes.textContent = pad(minutes);
    timerSeconds.textContent = pad(seconds);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



  