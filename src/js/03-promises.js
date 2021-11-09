import Notiflix from 'notiflix';

const refs = {
  form : document.querySelector('.form'),
submitBtn : document.querySelector('button'),
delay : document.querySelector('input[name=delay]'),
step : document.querySelector('input[name=step]'),
amount : document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', handleSubmitClick)

function createPromise(position, delay) {
  const promise = new Promise ((resolve, reject) =>{
 setTimeout (()=> {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }},delay )})
  return promise;
}

function handleSubmitClick (evt) {
  evt.preventDefault();
  const amount = Number(refs.amount.value);
  const firstDelay = Number(refs.delay.value);
  const step = Number(refs.step.value);
// console.log(delay);
// console.log(step);
// console.log(amount);
let delay = firstDelay;
for(let i = 1; i <= amount; i++ ) {
  delay += step
createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
 
}
















