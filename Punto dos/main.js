/* 
2. Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en 
metros y millas.*/

let km1 = Number (prompt("Digite los KM que desea convertir em Millas: "))
let km2 = Number (prompt("Digite los KM que desea convertir em Metros: "))

function convertir1(km1) {

    let millas = 0.62;
    let total1 = km1 * millas;


    return total1;

}

document.write("Los KM convertidos en Millas son: " + convertir1(km1));


function convertir2(km2) {

    let metros = 1000;
    let total2 = km2 * metros;


    return total2;

}

document.write(" <br>" + "Los KM convertidos en Metros son: " + convertir2(km2));

