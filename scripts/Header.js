export default function Header() {
    const header = document.getElementById('Header')
    header.innerHTML = `<nav>
        <h1 class="static">E-commerce</h1>
        <ul class="static">
            <li><a href=\"#\">Inicio</a></li>
        </ul>
        <button type='sumit' class='btnCard static' id="card"><img src="../Images/svg/shopping-cart.svg" width=\"30\"/></button>
        <div class="pCard absolute">
            <h2>Carrito</h2>
            <div class="separador"></div>
            <div class='cardCont' >
                <di>
                </di>
            </div>
            <button  class='btnCBuy' id="comprar">
                Comprar
            </button>
        </div>
    </nav>`
    return true
}