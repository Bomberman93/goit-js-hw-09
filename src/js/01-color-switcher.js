const firstButton = document.querySelector('[data-start]');
const secondButton = document.querySelector('[data-stop]');
const bodyTeg = document.querySelector('body');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

firstButton.addEventListener('click', () => {
  timerId = setInterval(() => {
    firstButton.setAttribute("disabled", "disabled");
    bodyTeg.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

secondButton.addEventListener('click', () => {
  firstButton.removeAttribute("disabled");
  clearInterval(timerId);
});
