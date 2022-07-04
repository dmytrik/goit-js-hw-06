const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImage = ({ url, alt }) => {
  // const item = document.createElement("li");
  // const img = document.createElement("img");
  // img.src = url;
  // img.alt = alt;
  // item.append(img);
  // return item;
  return `<li><img src = ${url} alt = ${alt}></li>`;
};

const galleryItem = images.map(createImage).join("");
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", galleryItem);
