let nombre = prompt("Ingrese su nombre");
let edad = prompt("ingrese su edad");
let edadNumero = parseInt(edad);

if (nombre == "Ludmila" && (edadNumero > 20 || edadNumero > 35)) {
    alert("Hola Ludmila, tu edad es mayor a 20 y menor a 35");
} else {
    alert("Tu no eres Ludmila");

}
