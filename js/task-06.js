const inputText = document.querySelector('#validation-input');
const lengthText = inputText.getAttribute('data-length');

inputText.addEventListener('blur', onBlurInput);

function onBlurInput() {
    if (inputText.value.length >= lengthText) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
        // console.log('+');
    } if(inputText.value.length < lengthText) {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
        // console.log('-');
    }
}