document.addEventListener('DOMContentLoaded', function() {
    const ratingElements = document.querySelectorAll('input[name="rating"]');
    const ratingText = document.querySelector('.rating');

    ratingElements.forEach(radio => {
        radio.addEventListener('change', function() {
            ratingText.textContent = `Rating And Review: ${this.value}`;
        });
    });
});


//price................
let quantity = document.getElementById('quantity');
let price = document.getElementById('price');

function increase() {
    let currentQuantity = parseInt(quantity.value);
    let currentPrice = parseInt(price.innerText);
    
    quantity.value = currentQuantity + 1;
    price.innerText = (currentPrice / currentQuantity) * (currentQuantity +1);
}

function decrease() {
    let currentQuantity = parseInt(quantity.value);
    
    if(currentQuantity > 1) {
        let currentPrice = parseInt(price.innerText);

        quantity.value = currentQuantity -1 ;
        price.innerText =(currentPrice / currentQuantity) * (currentQuantity -1 );
    }
}

////slider..........

const buttonSlider1 = document.getElementById('buttonslider1');
const buttonSlider2 = document.getElementById('buttonslider2');
const mainImage = document.getElementById('main-image');
const sliderImages = document.querySelectorAll('.Sliderimg');


let currentImageIndex = 0;


buttonSlider2.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= sliderImages.length) {
        currentImageIndex = 0;
    }
    updateMainImage();
});


buttonSlider1.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = sliderImages.length - 1;
    }
    updateMainImage();
});


function updateMainImage() {
    mainImage.src = sliderImages[currentImageIndex].src;
}




