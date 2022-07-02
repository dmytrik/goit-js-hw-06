function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  color.textContent = backgroundColor;
};

const color = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColor);
