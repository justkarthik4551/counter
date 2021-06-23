let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
const postiveClass = "postiveCounter";
const negativeClass = "negativeCounter"


decrease.addEventListener("click",function(){
    let counterValue = document.querySelector('#counterValue');
    let newValue = counterValue.innerText - 1;
    counterValue.innerText = newValue;
    if (newValue === -1) {
        let classList = counterValue.classList;
        classList.toggle(postiveClass);
        classList.toggle(negativeClass);
    }
});

reset.addEventListener("click",function(){
    let counterValue = document.querySelector('#counterValue');
    counterValue.innerText = 0;
    let classList = counterValue.classList;
    if (classList.contains(negativeClass)) {
        classList.toggle(postiveClass);
        classList.toggle(negativeClass);
    }
});

increase.addEventListener("click",function(){
    let counterValue = document.getElementById('counterValue');
    let newValue = parseInt(counterValue.innerText,10) + 1;
    counterValue.innerText = newValue;
    if (newValue === 0) {
        let classList = counterValue.classList;
        classList.toggle(postiveClass);
        classList.toggle(negativeClass);
    }
});