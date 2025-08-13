// Get cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let countElem = document.getElementById("cart-count");
    if (countElem) countElem.innerText = cart.length;
}

// Check login
function getUser() {
    return JSON.parse(localStorage.getItem("user") || "null");
}

function greetUser() {
    let user = getUser();
    let greetingElem = document.getElementById("greeting");
    if (user && greetingElem) {
        greetingElem.innerText = `Welcome, ${user.name}!`;
    }
}

updateCartCount();
