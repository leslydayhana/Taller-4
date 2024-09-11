/* 
9. cree una funcion que pida el precio de N productos y por medio de otra funcion aumente el iva del 19% y 
diga al usuario que el precio total a Pagar, los productos que Compro, y el precio de cada uno.
*/

function pedirPrecios() {
    let precios = [];
    let cantidadProductos = parseInt(prompt("¿Cuántos productos vas a comprar?"));

    for (let i = 0; i < cantidadProductos; i++) {
        let precio = parseFloat(prompt(`Introduce el precio del producto ${i + 1}:`));
        precios.push(precio);
    }

    return precios;
}

// Total con IVA

function calcularTotalConIVA(precios) {
    const IVA = 0.19;
    let total = 0;

    console.log("Productos comprados:");
    precios.forEach((precio, index) => {
        let precioConIVA = precio + precio * IVA;
        console.log(`Producto ${index + 1}: $${precio.toFixed(2)} (con IVA: $${precioConIVA.toFixed(2)})`);
        total += precioConIVA;
    });

    let preciosProductos = pedirPrecios();
    console.log(`Precio total a pagar: $${total.toFixed(2)}`);
}

// Llamamos a la función principal
const preciosIngresados = pedirPrecios();
calcularTotalConIVA(preciosIngresados);


