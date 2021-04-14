
const categoriesList = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesList.length} категории`);

const infoList = (categoriesList) => {
    return categoriesList.forEach(item => {
        console.log(`Категория: ${item.firstElementChild.innerText}`);
        console.log(`Количество элементов: ${item.querySelectorAll('li').length}`)
    });
};

infoList(categoriesList);



