"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";





let daysTimer = document.querySelector('span[data-days]');
let hoursTimer = document.querySelector('span[data-hours]');
let minsTimer = document.querySelector('span[data-minutes]');
let  secsTimer =document.querySelector('span[data-seconds]');


 
elemH1Link.innerHTML = markupTimer;
const buttonStart = document.querySelector('.button');


const datePicker = flatpickr("#datetime-picker", {
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
        
        buttonStart.setAttribute("disabled", true); 
      } else {
        buttonStart.removeAttribute("disabled"); 
      }
    },
  }
  );
  
  function convertMs(difference) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(difference / day);
    // Remaining hours
    const hours = Math.floor((difference % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((difference % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((difference % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds};
    
  }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} 

  
  
  function handlerTimeClick(){

    let timer = setInterval(() => {
      const currentDateTime = new Date().getTime();
      const selectedDateTime = datePicker.selectedDates[0].getTime();
     let difference = selectedDateTime - currentDateTime;
     
  
     const result = convertMs(difference);

        console.log(`${result.days}`,
        `${result.hours}`,
        `${result.minutes}`,
        `${result.seconds}`);
     
    if (difference < 0) {
      clearInterval(timer);
    }
    }, 1000);
  }

    buttonStart.addEventListener("click", handlerTimeClick);
  


  