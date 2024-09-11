/* 
6.	Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.
*/

let celsius =  Number (prompt("Ingrese la temperatura en Celsius: "));
let fahrenheit =  Number (prompt("Ingrese la temperatura en Fahrenheit: "));

function celsiusAfahrenheit(Celsius) {

    let conversor1 = (Celsius * 9/5) + 32;

    return conversor1;
 
}

function fahrenheitAcelsius(fahrenheit) {

    let conversor2 = (fahrenheit - 32) * 5/9;

    return conversor2;
    
} 

    if (fahrenheitAcelsius(fahrenheit) <= 0 || celsiusAfahrenheit(celsius) <= 32) {
        document.write("Nos Congelamos");

    } else if ((fahrenheitAcelsius(fahrenheit) <= 5 && fahrenheitAcelsius(fahrenheit) <= 15) ||
           (celsiusAfahrenheit(celsius) <= 33 && celsiusAfahrenheit(celsius) <= 50)) {
        document.write("Está haciendo frío");

    } else if ((fahrenheitAcelsius(fahrenheit) <= 16 && fahrenheitAcelsius(fahrenheit) <= 25) ||
           (celsiusAfahrenheit(celsius) >= 51 && celsiusAfahrenheit(celsius) <= 77)) {
        document.write("Está templado el día");

    } else {
        document.write("Tiene fiebre o es el apocalipsis");
    }
