import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as l}from"./assets/vendor-651d7991.js";const e=document.querySelector(".form");e.elements.delay.value;e.elements.state.value;function n(o,t){return new Promise((s,i)=>{setTimeout(()=>{o==="fulfilled"?s(t):i(t)},t)})}function r(o){o.preventDefault();let t=e.elements.state.value,s=e.elements.delay.value;n(t,s).then(i=>{l.success({position:"topRight",title:"OK",message:`✅ Fulfilled promise in ${i}ms`})}).catch(i=>{l.error({position:"topRight",title:"Error",message:`❌ Rejected promise in ${i}ms`})}).finally(()=>{}),e.reset(),s=""}e.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map
