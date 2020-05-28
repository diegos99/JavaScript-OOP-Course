/**
 * @author EXPERT01
 */
//variables globales
var a = null;
var b = null;

function IngDat() {
    //Capturamos los datos para la operacion a ejecutar
    //Pedimos el valor para operando a
    a = parseInt(prompt("Ingrese Valor De a: ", ""));

    //Pedimos el valor para operando b
    b = parseInt(prompt("Ingrese Valor De b: ", ""));
}

function sumar() {
    IngDat();
    var c = a + b;
    alert("La Suma De a+b Es: " + c);
}

