"use strict";
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const elemH1Link = document.querySelector(".title");
let daysTimer = document.querySelector("span[data-days]");
let hoursTimer = document.querySelector("span[data-hours]");
let minsTimer = document.querySelector("span[data-minutes]");
let  secsTimer =document.querySelector("span[data-seconds]");


const markupTimer = `
<input type="text" id="datetime-picker" />
<button type="button" class="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>`
 
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
      /*console.log(selectedDateTime);*/
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
  
    
  
   
  
   
   /* console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
    console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
    console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} 
  
   
    
  
  
    



  /*
    const datePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates,) {
      console.log(selectedDates[0].getTime());
      console.log(new Date().getTime());
      if(selectedDates[0].getTime()<= new Date().getTime()){
        iziToast.error({
          message: "Please choose a date in the future",
        });
        
        buttonStart.setAttribute("disabled", true); 
      } else {
        buttonStart.removeAttribute("disabled"); 
      }
    },
  });
  
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


function handlerTimeClick(){

  

  let timer = setInterval(() => {
    const currentDateTime = new Date().getTime();
    const selectedDateTime = datePicker.selectedDates[0].getTime();
    /*console.log(selectedDateTime);*/
   /* let difference = selectedDateTime - currentDateTime;
    /*console.log(difference);*/

   /* const result = convertMs(difference);
    daysTimer.textContent = `${result.days}`;
    hoursTimer.textContent =`${result.hours}`;
    minsTimer.textContent =`${result.minutes}`;
    secsTimer.textContent = `${result.seconds}`;
   
 

 
 /* console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} 

 
  if (difference < 0) {
    clearInterval(timer);

  }

  }, 1000);
}


  buttonStart.addEventListener("click", handlerTimeClick);

  */