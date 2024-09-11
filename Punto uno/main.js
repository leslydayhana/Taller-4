/*
1. Crea y llama una función que recibe el ancho y el alto de un rectángulo 
y calcula su superficie.  Fórmula: superficie = ancho * alto.
*/


let ancho = Number (prompt ("Digite el ancho de su rectangulo: "));
let alto = Number (prompt ("Digite el alto de su rectangulo: "));

function operacion(ancho, alto) {
   
    let superficie;
    superficie = ancho * alto;

    return superficie;
    
}

document.write("La superficie de su rectángulo es de: " + operacion(ancho, alto));
