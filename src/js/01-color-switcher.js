// const firstButton = document.querySelector('[data-start]');
// const secondButton = document.querySelector('[data-stop]');
// const bodyTeg = document.querySelector('body');


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// firstButton.addEventListener("click",() => {
//     timerId = setInterval(() => {
//       bodyTeg.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//   });
  
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector("[data-start]");
  const stopBtn = document.querySelector("[data-stop]");
  const bodyEl = document.querySelector("body");
  
  startBtn.addEventListener("click", () => {
      timerId = setInterval(() => {
  
      startBtn.setAttribute("disabled", "disabled")
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });