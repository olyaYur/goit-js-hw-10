import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as m,i as T}from"./assets/vendor-651d7991.js";const h=document.querySelector("#datetime-picker"),d=document.querySelector("button[data-start]");let f=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date().getTime();console.log(t);const n=e[0].getTime();console.log(n);const o=n-t;console.log(o),e[0].getTime()<=new Date().getTime()?(T.error({message:"Please choose a date in the future"}),d.setAttribute("disabled",!0)):d.removeAttribute("disabled")}},S=m(h,D);function s(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:i,seconds:u}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));function b(){let e=setInterval(()=>{const t=new Date().getTime();let o=S.selectedDates[0].getTime()-t;const{days:l,hours:a,minutes:c,seconds:i}=s(o);f.textContent=r(l),g.textContent=r(a),y.textContent=r(c),p.textContent=r(i),o<=1e3&&clearInterval(e)},1e3)}function r(e){return String(e).padStart(2,"0")}d.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map