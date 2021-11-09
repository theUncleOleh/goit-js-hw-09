import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    input : document.querySelector('input#datetime-picker'),
    startBtn : document.querySelector('button[data-start]'),
    dataDays : document.querySelector('span[data-days]'),
    dataHours : document.querySelector('span[data-hours]'),
    dataMinutes : document.querySelector('span[data-minutes]'),
    dataSeconds : document.querySelector('span[data-seconds]'),
};
let timerId = null;
let todayTime = null;
let selectTime = null;

refs.startBtn.addEventListener('click', handleStartBtnClick);
refs.startBtn.setAttribute("disabled", "disabled");

function handleStartBtnClick(evt) {
    
timerId =  setInterval(() => {
    todayTime = Date.now();
    const   currentTime = selectTime - todayTime;
            const time = convertMs(currentTime);
                  console.log(time);
                  updateTime (time);
                  if(currentTime < 1000) {
                    clearInterval( timerId );
                    }
          }, 1000);
         
   
}

function convertMs(time) {
    
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(time / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((time % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((time % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((time % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }



const dataFlatpickr =
    flatpickr('input#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
selectTime = selectedDates[0];

        if(selectTime > Date.now()){
            refs.startBtn.removeAttribute("disabled");
            
        } else
        {
            Notiflix.Notify.failure('Please choose a date in the future');
           refs.startBtn.setAttribute('disabled', 'disabled');
        }
        
}
});

function updateTime ({ days, hours, minutes, seconds }) {
    refs.dataDays.textContent = days;
refs.dataHours.textContent = hours;
refs.dataMinutes.textContent = minutes;
refs.dataSeconds.textContent = seconds;
};


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}




