//import Producto from "./Producto";

export default class UIProducto {
    constructor(product) {
        this.product = product;
    }

    printProduct() {
        return `<div class="card">
            <img src="${this.product.image}" width="120"/>
            <h4>${this.product.title}</h4>
            <p><span class="price">Price:</span> ${this.product.price}</p>
            <div class="btnContPlus">
                <button class="btnPlus" name="agregar">
                    <img src="../Images/svg/plus.svg" width=\"18\"/>
                    ADD CARD
                </button>
            </div>
            </div>`
    }
} 