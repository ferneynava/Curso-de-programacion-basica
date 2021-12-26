var express = require("express"); // Variable donde este express (libreria)
// requiere opcion que no existe por defento en los navegadores en el javascript que corres en el frontend
// pero que si existe en el javascript que tu corres en el backend usando nodejs, es una funcion expecial
// que busca los framework o librerias instaladas en el computador o instaladas en el proyecto usando npm install
// y se las trae y las guarda en una variable. variable express se vuelve una función

var aplicacion = express(); // Significa que vamos a crear una aplicación y vamos a crear una instancia de la libreria express
                            // express() invoca la función 

aplicacion.get("/", inicio);   // aplicacion.get colocamos la url el pedaso de dirección que se va a abrir, "/" home, que se disparte la función inicio
aplicacion.get("/cursos", cursos);                             

function inicio(peticion, resultado) {// req = peticion lo que el navegador le esta pidiendo al servidor el servidor es el codigo 
                             // res = es el resultado lo que el servidor le quiere mandar al navegado  
resultado.send("Este es el <strong>home</strong> genial"); // le envio lo que le quiero mostrar en pantalla
                    
}

function cursos(peticion, resultado) {// req = peticion lo que el navegador le esta pidiendo al servidor el servidor es el codigo 
    // res = es el resultado lo que el servidor le quiere mandar al navegado  
resultado.send("Estos son los cursos"); // le envio lo que le quiero mostrar en pantalla

}

aplicacion.listen(8989); //poner a correr el servidor llamado listen. listen corre en un puerto expecifico  