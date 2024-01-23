
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



startBtn.disabled = true;
inputTimeField.disabled =false;
startBtn.addEventListener("click", handlerTimeClick);


const options =  {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates,) {
      let userSelectedDate = selectedDates[0].getTime();
      console.log(userSelectedDate);
      let currentDateTime = new Date().getTime();
      console.log(currentDateTime);
      let deltaTime = userSelectedDate - currentDateTime;
      console.log(deltaTime);


      if(userSelectedDate <= currentDateTime){
        iziToast.error({
          message: "Please choose a date in the future",
        });
        startBtn.disabled = true;
        return
      } else {
        iziToast.success({
          message: "You are the best",
        });
        startBtn.addEventListener("click", handlerTimeClick);
        startBtn.disabled = false;
      } 
        
      }
    }
  
const datePicker = flatpickr(inputTimeField, options);
console.log(datePicker);



 function handlerTimeClick(event){

 let timer = setInterval(() => {
    const userSelectedDate = datePicker.selectedDates[0].getTime();
    console.log(userSelectedDate);
    const currentDateTime = new Date().getTime();
    /*console.log(currentDateTime);*/
    const deltaTime = userSelectedDate - currentDateTime;
     /* console.log(deltaTime)*/

      if (deltaTime < 0) {
      clearInterval(timer);
      
      startBtn.disabled = false;
      inputTimeField.disabled = false;
      return;
    }

     const { days, hours, minutes, seconds} = convertMs(deltaTime);
     daysTimer.textContent = addLeadingZero(days);
     hoursTimer.textContent = addLeadingZero(hours);
     minsTimer.textContent = addLeadingZero(minutes);
     secTimer.textContent = addLeadingZero(seconds);   
    }, 1000);
  }

function addLeadingZero(value) {
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
  
    return { days, hours, minutes, seconds};
    
  }

 
  
 

  




  





  