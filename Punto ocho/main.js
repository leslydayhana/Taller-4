/* 
8. cree una funcion que pida el nombre del usuario, y por medio de otra funcion imprima el nombre y un mensaje que diga bienvenido + nombre 
*/


function pedirNombre() {
    let nombre = prompt("Por favor, introduce tu nombre:");
    return nombre;
}

let nombreUsuario = pedirNombre();
imprimirBienvenida(nombreUsuario);

function imprimirBienvenida(nombre) {
    console.log("¡Bienvenido, " + nombre );
}
 



