const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const elements = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    list.append(ingredientEl);
  });
};

elements(ingredients);
