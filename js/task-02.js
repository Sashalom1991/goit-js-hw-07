const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let htmlList = document.getElementById("ingredients");

const listIngredients = ingredients.forEach(ingredient => {
    let addLi = document.createElement('li');
    addLi.innerHTML = ingredient;
  htmlList.appendChild(addLi);
  // console.log(addLi);
})

// console.log(htmlList);