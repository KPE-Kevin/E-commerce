import Header from './scripts/Header.js'
import Request from './scripts/Request.js'
import Producto from './scripts/Producto.js';
import UIProducto from './scripts/UIProducto.js';


Header()

async function MainIndex() {
    const req = new Request();
    const result = await req.GET('https://fakestoreapi.com/products');
    const main = document.getElementById('Main');

    result.map((value, i) => {
        const producto = new Producto(value.id, value.title, value.price, value.description, value.image, value.category, value.stock);
        const uiProduct = new UIProducto(producto)
        main.innerHTML += uiProduct.printProduct();
    })
}

MainIndex()

const btnComprar = document.getElementById('comprar')
const btnProduct = document.getElementsByName('agregar')

btnComprar.addEventListener('click', function () {
    alert('Gracias por tu compra!')
})

btnProduct.addEventListener('sumit', function () {
    console.log('hola')
})