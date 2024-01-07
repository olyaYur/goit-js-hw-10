"use strict";
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const elemH1Link = document.querySelector(".title");
const buttonStart = document.querySelector("button");

const markupTimer = `
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

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


console.log("Hello, Olya");

// Otherwise, selectors are also supported
let userSelectedDate = "";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0]<new Date()){
        console.log("Please choose a date in the future");
        buttonStart.setAttribute("disabled", true);
      } else {
        buttonStart.removeAttribute("disabled");
        userSelectedDate = selectedDates[0];
      }
    },
  };
 
flatpickr("#datetime-picker", {options});

 