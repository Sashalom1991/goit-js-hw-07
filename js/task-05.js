const inputName = document.querySelector('#name-input');
const nameInTitle = document.querySelector('#name-output');
// console.log(inputName.value);

inputName.addEventListener('input', OutputName)

function OutputName(event) {
    // console.log(event.currentTarget.value);
    if (inputName.value.length === 0) {
        nameInTitle.innerText = 'незнакомец';
        return
    }
    nameInTitle.innerText = event.currentTarget.value;
};
