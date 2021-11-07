

const refs = {
  form : document.querySelector('.form'),
submitBtn : document.querySelector('button'),
};
// console.log(refs.submitBtn);


refs.submitBtn.addEventListener('submit', handleSubmitClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};

function handleSubmitClick(evt) {
  evt.preventDefault()
}



createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

