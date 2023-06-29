import { mostrarProductos } from "./JS/main.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/stock.json')
    const stock = await response.json()
    
    mostrarProductos(stock);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
    function filtrar(arr, filtro, param) {
        return arr.filter((el) => {
          if (param === "id") {
            return el.id == filtro;
          } else if (param === "precio") {
            return el.precio <= filtro;
          } else {
            return el[param].includes(filtro);
          }
        });
    };
    filtrar (arr, buscarProducto);
});
