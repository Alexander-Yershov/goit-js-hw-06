const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const newItem = ingredients.forEach(element => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = element;
  console.log( ingredientsEl.appendChild(newEl));
});
console.log(ingredientsEl);
