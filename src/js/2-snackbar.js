
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

let inputValue = form.elements.delay.value;
let inputState = form.elements.state.value;





function createPromise (inputState, inputValue ){
    return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if(inputState === "fulfilled"){
        resolve(inputValue);
      } else {
        reject(inputValue);
      }   
    }, inputValue);
});
};

function handleCreateNotification(event){
    event.preventDefault();
    let inputState= form.elements.state.value;
    let inputValue = form.elements.delay.value;

    createPromise(inputState, inputValue) 
    .then(inputValue =>{
        iziToast.success({
            position: 'topRight',
            title: 'OK',
            message: `✅ Fulfilled promise in ${inputValue}ms`,
          });   
    })
    .catch(error =>{
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: `❌ Rejected promise in ${error}ms`,
          });  
    })
    .finally(() => {
        form.reset();
      });
   
      inputValue = "";  
};

form.addEventListener("submit", handleCreateNotification);

