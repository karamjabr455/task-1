//menudash
const menu=document.getElementById("menudash");
const menuactions=document.getElementById("actions");
menu.addEventListener("click",()=>{
    handleMenu();
})
function handleMenu(){
    menu.classList.toggle("is-active");
    menuactions.classList.toggle("is-active");


}


//slider..........
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slider.children.length / 2) {
        currentIndex = 0;
    }
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slider.children.length / 2 - 1;
    }
    updateSlider();
});

function updateSlider() {
    const slideWidth = slider.children[0].offsetWidth;
    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}
// end slider...........

//rating
document.addEventListener('DOMContentLoaded', function() {
    const ratingElements = document.querySelectorAll('input[name="rating"]');
    const ratingText = document.querySelector('.rating');

    ratingElements.forEach(radio => {
        radio.addEventListener('change', function() {
            ratingText.textContent = `Rating And Review: ${this.value}`;
        });
    });
});

//Button Details

const myButton = document.querySelector('.Details');


myButton.addEventListener('click', function() {

    window.location.href = './Details.html';
});

//Button Details2

const myButton2 = document.querySelector('.Details2');


myButton2.addEventListener('click', function() {

    window.location.href = './Details.html';
});
//Button Details3

const myButton3 = document.querySelector('.Details3');


myButton3.addEventListener('click', function() {

    window.location.href = './Details.html';
});

//Button Details4

const myButton4 = document.querySelector('.Details4');


myButton4.addEventListener('click', function() {

    window.location.href = './Details.html';
});
