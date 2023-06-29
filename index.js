import { mostrarProductos } from "./JS/main.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/stock.json')
    const stock = await response.json()
    /* const filtrado = stock.filter(comic => comic.cat === buscarProducto.include) */
    mostrarProductos(stock);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };

});
