/* 
7. calcule el indice de masa muscular de una persona con la siguiente formula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. Imprima en pantalla lo siguiente
a.- Si el IMC es por debajo de 18.5: babo peso debe ir al nutricionista
b.- Si el IMC es 18.5 - 24.9 : normal
c.- Si el IMC es 25.0 - 29.9 : sobrepeso
d.- Si el IMC es 30.0 o mas : obeso debe ir al nutricionista 
*/

let peso = Number(prompt("Ingrese su peso: "));
let altura = Number (prompt("Ingrese su altura: "));

function calcularIMC (peso,altura){

    let imc = peso /(altura * altura)
    return imc.toFixed(2);

}

if (calcularIMC(peso,altura) < 18.5) {
    
    document.write("El IMC es igual a: "+ calcularIMC(peso,altura) + " El paciente debe ir al nutricionista" );

} else if (calcularIMC(peso,altura) >= 18.5 && calcularIMC(peso,altura) <= 24.9) {

    document.write("El IMC es igual a: "+ calcularIMC(peso,altura) +  "El paciente tiene un peso normal ");

}else if (calcularIMC(peso,altura) >= 25.0 && calcularIMC(peso,altura) <= 29.9 ) {

    document.write("El IMC es igual a: "+ calcularIMC(peso,altura) +   " El paciente tiene sobrepeso ");
    
}else {
    document.write("El IMC es igual a: "+ calcularIMC(peso,altura) +   " El paciente esta obeso debe ir al nutricionista ");
        
}