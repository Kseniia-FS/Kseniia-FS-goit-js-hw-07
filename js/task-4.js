let counterValue = 0;

const refs = {
  buttonUp: document.querySelector(`[data-action="increment"]`),
  buttonDown: document.querySelector(`[data-action="decrement"]`),
  counter: document.querySelector(`#value`),
};

refs.buttonUp.addEventListener('click', increment);
refs.buttonDown.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
