/* 3.	por medio de una función calcula la circunferencia de un círculo utilizando la siguiente fórmula: 
circunferencia= 2*Math.PI*radio, también Crea y llama una función que recibe un número y calcula su cubo. Ejemplo:
function circunferencia (radio){
     Return formula;
}
*/

let radio = parseFloat(prompt("Ingrese el valor de radio"))

function circunferencia (radio){

    let circulo = 2 * (Math.PI) * radio;
    return circulo;

}

document.write("El valor de la circunferencia segun el radio es de: " + circunferencia(radio)) + "<br>";


alert("--------------------------------------------------") 


let num1 = Number(prompt("Ingrese el numero a calcular"));

function  calculo_cubo (num1){ 

    let cubo = Math.pow(num1,3);
    return cubo


}


document.write("<br>" + " El numero: " + num1 + " elevado al cubo es: " + calculo_cubo(num1));