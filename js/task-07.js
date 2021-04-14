const sizeControlInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log(spanText.style);

sizeControlInput.addEventListener('input', changeSizeText);

function changeSizeText() {
    spanText.style.fontSize = this.value + "px";
    
 }