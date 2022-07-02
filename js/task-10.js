const create = document.querySelector("[data-create]");
const clear = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  destroyBoxes();
  boxes.append(...createElements(amount));
};

const createElements = (value) => {
  let size = 30;
  const elements = [];
  for (let i = 0; i < value; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(el);
  }
  return elements;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

create.addEventListener("click", () => {
  createBoxes(document.querySelector("#controls").firstElementChild.value);
});
clear.addEventListener("click", destroyBoxes);
