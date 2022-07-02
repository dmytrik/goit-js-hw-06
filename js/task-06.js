const input = document.querySelector("#validation-input");
const LENGTH = Number(input.getAttribute("data-length"));

const valid = () => {
  input.classList.remove("invalid");
  input.classList.add("valid");
};
const invalid = () => {
  input.classList.remove("valid");
  input.classList.add("invalid");
};
const checkValid = (event) => {
  if (event.currentTarget.value.length === 0) {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
      return;
    }
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
      return;
    }
  }
  if (LENGTH === event.currentTarget.value.length) {
    valid();
    return;
  }
  invalid();
};
input.addEventListener("blur", checkValid);
