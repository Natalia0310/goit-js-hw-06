
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById("ingredients");
let ingredientsEl=document.createElement("li");


  ingredients.map(ingredient => {
  ingredientsEl.classList="item";
  ingredientsEl.textContent = ingredient;
  console.log(ingredientsEl);
  });
  ingredientsRef.append(ingredientsEl);

