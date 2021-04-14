const inputName = document.querySelector('#name-input');
const nameInTitle = document.querySelector('#name-output');

inputName.addEventListener('input', OutputName)

function OutputName(event) {
    // console.log(event.currentTarget.value);
    if (inputName === '') {
        nameInTitle.innerText = 'незнакомец';
    } 
        nameInTitle.innerText = event.currentTarget.value;    
}
