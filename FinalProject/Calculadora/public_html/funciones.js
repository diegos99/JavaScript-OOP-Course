//variables globales
var a = null;
var b = null;

function solicitarOperandos() {
    //Capturamos los datos para la operacion a ejecutar
    //Pedimos el valor para operando a
    a = parseInt(prompt("Ingrese el valor de a: ", ""));
    //Pedimos el valor para operando b
    b = parseInt(prompt("Ingrese el valor de b: ", ""));
}

function sumar() {
    solicitarOperandos();
    var c = a + b;
    alert("La suma de a+b es: " + c);
}

function restar() {
    solicitarOperandos();
    var c = a - b;
    alert("La resta de a-b es: " + c);
}

function multiplicar() {
    solicitarOperandos();
    var c = a * b;
    alert("La multiplicación de a*b es: " + c);
}

function dividir() {
    solicitarOperandos();
    var c = a / b;
    alert("La división de a-b es: " + c);
}