const controler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${controler.value}px`;

const changeFontSize = (event) => {
  const size = event.currentTarget.value;
  text.style.fontSize = `${size}px`;
};

controler.addEventListener("input", changeFontSize);
