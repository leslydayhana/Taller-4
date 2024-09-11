/* 
10. cree una funcion que pida la fecha actual y por medio de otra funcion calcule cuantos dias y semanas faltan para terminar el año 
*/


function obtenerFechaActual() {
    return new Date();
}

function calcularDiasYSemanasRestantes(fechaActual) {
    const finDeAno = new Date(fechaActual.getFullYear(), 11, 31); 
    const unDia = 1000 * 60 * 60 * 24; 

 
    const diferenciaEnMilisegundos = finDeAno - fechaActual;
    const diasRestantes = Math.ceil(diferenciaEnMilisegundos / unDia);

    const semanasRestantes = Math.ceil(diasRestantes / 7);

    return {
        dias: diasRestantes,
        semanas: semanasRestantes
    };
}

const fechaActual = obtenerFechaActual();
const resultado = calcularDiasYSemanasRestantes(fechaActual);

document.write(`Faltan ${resultado.dias} días y ${resultado.semanas} semanas para terminar el año.`);


