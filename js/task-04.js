"use strict";

const counter = {
  value: 0,
    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement => this', this);
        this.value -= 1;
    },
};


const counterRef = {
    incBtn: document.querySelector("[data-action='increment']"),
    decBtn: document.querySelector("[data-action='decrement']"),
    valeuPanel: document.querySelector("#value"),
}

counterRef.incBtn.addEventListener('click', function () {
    counter.increment();
    counterRef.valeuPanel.textContent = counter.value;
});

counterRef.decBtn.addEventListener('click',function () {
    counter.decrement();
    counterRef.valeuPanel.textContent = counter.value;
});
