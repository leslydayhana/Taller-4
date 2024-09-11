/*5.	Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función. */

let num1 = Number (prompt("Ingrese el Numero 1: "));
let num2 = Number (prompt("Ingrese el Numero 2: "));

function suma1 (num1, num2) {

    let suma = num1 + num2;
    return suma;
    
}
function resta1 (num1, num2) {

    let resta = num1 - num2;
    return resta;
    
}
function multi1 (num1, num2) {

    let multi = num1 * num2;
    return multi;
    
}
function división1 (num1, num2) {

    let división = num1 / num2;
    return división;
    
}

document.write ("La suma es igual: " + suma1(num1,num2) + "<br>" +
                "la resta es igual: " + resta1(num1,num2) + "<br>" +
                "la multi es igual: " + multi1(num1,num2) + "<br>" +
                "la division es igual: " + división1(num1,num2).toFixed(2)
);

