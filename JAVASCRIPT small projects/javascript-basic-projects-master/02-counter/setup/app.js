// set initial count
let count = 0

// select value and buttos
let value = document.getElementById("value");
const btns = document.querySelector(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", functione(e) {
        const : styles = e.currentTarget.classList;
        if (styles.countains("decrease")) {
        count--;
        }
        value.textContent = count;
});
});



// Decrease func
function Decrease() {

}

// reset func
function reset() {

}

// increase func

function increase() {

}