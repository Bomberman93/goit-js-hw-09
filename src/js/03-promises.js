import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const inputEldelay = document.querySelector('input[name="delay"]');
const inputElstep = document.querySelector('input[name="step"]');
const inputElamount = document.querySelector('input[name="amount"]');
// const buttonEl = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputElZero = +inputEldelay.value;
  const inputElFirst = +inputElstep.value;
  const inputElsecond = +inputElamount.value;
  let delay = inputElZero;
  for (let position = 1;  position <= inputElsecond; position++) {
    createPromise(position, delay)
      .then(({position, delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += inputElFirst;
  }
});

function createPromise(position, delay) {
  console.log(delay);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}


