const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const changeName = (event) => {
  if (event.currentTarget.value === "") {
    userName.textContent = "Anonymous";
    return;
  }
  userName.textContent = event.currentTarget.value;
};
input.addEventListener("input", changeName);
