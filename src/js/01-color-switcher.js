const refs = {
    body : document.querySelector('body'),
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
};

let timerId = null;


// console.log(refs.startBtn);
// console.log(refs.stopBtn);

refs.startBtn.addEventListener('click', handleStartBtnClick)
refs.stopBtn.addEventListener('click', handleStopBtnClick)


function handleStartBtnClick(evt) {
 timerId = setInterval(() => {
     refs.body.style.backgroundColor =  getRandomHexColor();
     
 }, 1000);
 refs.startBtn.setAttribute("disabled", "disabled");
};

function handleStopBtnClick(evt) {
    clearInterval(timerId);
refs.startBtn.removeAttribute("disabled");
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  