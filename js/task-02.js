const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const itemIngredients = ingredients.map((gradient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = gradient;
  return item;
});
ingredientsList.append(...itemIngredients);
console.log(ingredientsList);
