var cartCount = 0;
var isPressing = false;
var pressTimer;

// update cartCount in html 
const updateCartCount = () => {
    const cartCountElement = document.querySelector(".cart-count");
    cartCountElement.textContent = cartCount.toString();
}

const increaseCartCount = () => {
    cartCount++;
    updateCartCount();
}

const decreaseCartCount = () => {
    if (cartCount > 0) {
        cartCount--;
        updateCartCount();
    }
}

increaseCartCount();
decreaseCartCount();

var theCart = document.querySelector(".cart-count");

theCart.addEventListener('click', () => {
    increaseCartCount();
});


theCart.addEventListener('mousedown', () => {
    isPressing = true;
    pressTimer = setTimeout(() => {
        if (isPressing) {
            decreaseCartCount();
        }
    }, 100); // Adjust the duration as needed
});

theCart.addEventListener('mouseup', () => {
    isPressing = false;
    clearTimeout(pressTimer);
});





window.addEventListener('load', () => {

});