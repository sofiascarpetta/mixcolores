// carrito abierto y cerrad
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carrito");
let cerrarCarrito = document.querySelector("#cerrar-carrito");

// abrir carrito
cartIcon.onclick = () => {
    cart.classList.add("activo");
};
// cerrar carrito
cerrarCarrito.onclick = () => {
    cart.classList.remove("activo");
};