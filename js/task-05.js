const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
const changeName = (event) => {
  name.textContent = event.currentTarget.value;
};
input.addEventListener("input", changeName);
