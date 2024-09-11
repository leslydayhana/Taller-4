/* 4.	Crea una función donde pases como parámetro un nombre y muéstralo en el navegador; 
Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese 
un nombre válido. (lo puedes hacer con la función isNaN(), investiga cómo funciona)
*/

const name = prompt ("Ingrese un nombre: ");

function nombre (name) {
    return name;

}

if (isNaN (name)) {
    document.write("el nombre que ingresaste es: " + nombre(name))
    
} else{

    alert("Ingrese un nombre valido")
    document.write("el nombre que ingresaste es incorrecto, vuelve a intentarlo" )
}

