// Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} added to cart!`);
    console.log(cart);
}

// Add event listeners to buttons
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;
        addToCart(productName, productPrice);
    });
});
