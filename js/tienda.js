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
// agregar al carrito
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){

     fetch("../storage/productos.json")
     .then((res) => res.json())
     .then((data) => {
         let productos = data;
         let divContenidoTienda = document.querySelector("#contenidoTienda");
         let html = [];
         
         productos.productos.map((producto) => {
             let productoHtml = `
             <div class="caja-producto">
                 <img src=${producto.imagen} 
                 alt=""
                 class="producto-img"
                 />
                 <h2 class="producto-titulo">${producto.nombre}</h2>
                 <span class="precio">${producto.precio}</span>
                 <i class='bx bx-shopping-bag agregar-carrito'></i>
             </div>
             `
             html.push(productoHtml);
             
             return productoHtml;
         });
 
         divContenidoTienda.innerHTML = html.join('');
          //eliminar productos del carrito
        let eliminarCartButtons = document.getElementsByClassName('carrito-eliminado')
        for (let i = 0; i < eliminarCartButtons.length; i++){
            let button = eliminarCartButtons[i];
            button.addEventListener('click', eliminarArticulo)
        }
        let cantidadInputs = document.getElementsByClassName('cantidad-carrito');
        for (let i = 0; i < cantidadInputs.length; i++){
            let input = cantidadInputs[i];
            input.addEventListener('change', cambiarCantidad)
        }
        //agregar al carrito
        let agregarCarrito = document.getElementsByClassName('agregar-carrito');
        for (let i = 0; i < agregarCarrito.length; i++){
            let button = agregarCarrito[i];
            button.addEventListener('click', agregarCarritoClicked)
        }
     });
 }
//eliminar producto
function eliminarArticulo(event){
    let botonClicked = event.target; 
    botonClicked.parentElement.remove();
    totalActualizado();
    notificacion("Eliminaste un producto del carrito", "red")
}
//cambiar cantidad
function cambiarCantidad(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    totalActualizado();
}

// funcion agregar al carrito
function agregarCarritoClicked(event){
    let button = event.target;
    let tiendaProductos =  button.parentElement;
    let titulo = tiendaProductos.getElementsByClassName("producto-titulo")[0].innerText;
    let precio = tiendaProductos.getElementsByClassName("precio")[0].innerText;
    let productosImg = tiendaProductos.getElementsByClassName("producto-img")[0].src
    agregarProductoCarrito(titulo, precio, productosImg);
    totalActualizado();
}

function agregarProductoCarrito(titulo, precio, productosImg){
    let carritoTienda = document.createElement("div");
    carritoTienda.classList.add("carrito-ahorro");
    let carritoItems = document.getElementsByClassName("carrito-contenido")[0]
    let carritoItemsNombre = carritoItems.getElementsByClassName("carrito-producto-titulo")
    for ( let i =0; i< carritoItemsNombre.length; i++){
        if (carritoItemsNombre[i].innerText == titulo){ 
            notificacion("Ya has añadido este artículo al carrito", "pink");
            return;
        }
    }
    let carritocajaContenido = ` 
    <img src="${productosImg}" alt="" class="img-prod">
    <div class="detail-box">
        <div class="carrito-producto-titulo">${titulo}</div>
            <div class="carrito-precio">${precio}</div>
            <input 
            type="number" 
            name="" 
            id="" 
            value="1" 
            class="cantidad-carrito"
            />
    </div>
    <!-- eliminar item -->
    <i class='bx bxs-trash carrito-eliminado'></i>`;
    carritoTienda.innerHTML = carritocajaContenido;
    carritoItems.append(carritoTienda);
    carritoTienda.getElementsByClassName("carrito-eliminado")[0]
    .addEventListener("click", eliminarArticulo );
    carritoTienda.getElementsByClassName("cantidad-carrito")[0]
    .addEventListener("change", cambiarCantidad );
   notificacion("Agregaste un producto al carrito", "green")
}


// total actualizado  
function totalActualizado(){
    let carritoContenido = document.getElementsByClassName("carrito-contenido")[0];
    let carritoAhorro = carritoContenido.getElementsByClassName("carrito-ahorro");
    let total = 0;
    for (let i = 0; i < carritoAhorro.length; i++){
        let carritoAhorroItem = carritoAhorro[i]; 
        let precioElement = carritoAhorroItem.getElementsByClassName("carrito-precio")[0];
        let cantidadElement = carritoAhorroItem.getElementsByClassName("cantidad-carrito")[0];
        let precio = parseFloat(precioElement.innerText.replace("$", ""));
        let cantidad = cantidadElement.value;
        total += precio * cantidad;
    }

    document.getElementsByClassName("total-precio")[0].innerText = "$" + total;
}

// notificacion 
function notificacion(texto, color){
    Toastify({
        text: texto,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: color,
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}
