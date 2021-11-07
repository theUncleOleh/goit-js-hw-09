import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    input : document.querySelector('#datetime-picker'),
    startBtn : document.querySelector('button[data-start]'),
    dataDays : document.querySelector('span[data-days]'),
    dataHours : document.querySelector('span[data-hours]'),
    dataMinutes : document.querySelector('span[data-minutes]'),
    dataSeconds : document.querySelector('span[data-seconds]'),
};

const todayTime = Date.now();
let selectTime = null;
refs.startBtn.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick(evt) {
     setTimeout(() => {
        
const currentTime = selectTime - todayTime;
const time = convertMs(currentTime);
console.log(time);

refs.dataDays.textContent = addLeadingZero(time.days);
refs.dataHours.textContent = addLeadingZero(time.hours);
refs.dataMinutes.textContent = addLeadingZero(time.minutes);
refs.dataSeconds.textContent = addLeadingZero(time.seconds);
}, 1000)
    
};

function convertMs(currentTime) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(currentTime / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((currentTime % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((currentTime % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((currentTime % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }



const dataFlatpickr = flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
selectTime = selectedDates[0];
        if(selectTime < todayTime){
            Notiflix.Notify.warning('Please choose a date in the future');
            refs.startBtn.setAttribute("disabled", "disabled");
        }
        {
        refs.startBtn.removeAttribute("disabled");
        }
}
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}




