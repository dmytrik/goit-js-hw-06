const parentElement = document.querySelector("#counter");
const refs = {
  decrementBtn: parentElement.querySelector('[data-action="decrement"]'),
  incrementBtn: parentElement.querySelector('[data-action="increment"]'),
  value: parentElement.querySelector("#value"),
};
let value = 0;
const step = 1;
const decrement = () => (value -= step);
const increment = () => (value += step);
const updateUI = () => {
  refs.value.textContent = value;
};

refs.decrementBtn.addEventListener("click", () => {
  decrement();
  updateUI();
});
refs.incrementBtn.addEventListener("click", () => {
  increment();
  updateUI();
});
