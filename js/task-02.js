// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.getElementById('ingredients');

const makeListIt = ingredients.map(ingredient => {
  const listItems = document.createElement('li');
  listItems.textContent = ingredient;
  return listItems;
});

ingredientsRef.append(...makeListIt);