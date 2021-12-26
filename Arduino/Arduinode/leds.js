var jf = require("johnny-five");// js es adonde vamos a traer la libreria johnny-five
var circuito = new jf.Board({port: "COM3"});// Board es la función que me trae toda la colección entre js y nuestro arduino 
//creamos una nueva clase de tipo Board que esta por dentro de johnny-five
circuito.on("ready", prender);// cuando el circuito este listo dispare una función prender

function prender(){
var bombillito = new jf.Led(9);//configurar el puertto donde esta conectado el componente (led) al arduino (pin 13)
// es una nueva instancia del objeto led por parametro se le asigna el pin 
var rojito = new jf.Led(13);
bombillito.blink(500);// blink funcion que me permite parpadiar y 500 es el tiempo en que va a parpadiar 
// es la instancia del objeto led  
rojito.blink(700);
console.log("Hola mamá se hacer hardware");

}