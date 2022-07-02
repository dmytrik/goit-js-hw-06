function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.append(el);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

const create = document.querySelector("[data-create]");
const clear = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  createBoxes(document.querySelector("#controls").firstElementChild.value);
});
clear.addEventListener("click", destroyBoxes);
