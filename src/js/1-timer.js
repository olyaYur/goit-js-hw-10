
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputTimeField  = document.querySelector('#datetime-picker');
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
  





  