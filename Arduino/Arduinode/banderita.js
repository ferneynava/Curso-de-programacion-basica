var cinco = require ("johnny-five"); // variable donde queda guardada la libreria Johnny-five
var circuito = new cinco.Board({port: "COM3"}); //Board funcion que me trae toda la conexion ente js y Arduino. 
//cinco es la variable donde esta johnny-five
var bombillo, motorcito, celda;
var turno = 0;

circuito.on("ready", prender); //cuando el circuito este listo dispare la funcion prender 

function prender (){
    var configuracion = {pin:"A0", freq: 50} // configuración de los pines A0 y de los senores 
    celda = new cinco.Sensor(configuracion);  

    bombillo = new cinco.Led(13);
    bombillo.on();

    motorcito = new cinco.Servo(9);//configurar el puerto donde esta conectado el componente (servo) al arduino (pin 9)
    motorcito.to(90); // to función para mover el servo pocisión 90º del servo 
    ondear();
}

function ondear(){

    console.log("Luz: " + celda.value); // celda.value muestra en consola el valor de la celda
    var luz = calda.value;

    if(luz > 800)
    {
        if(turno == 1){
             turno = 0;
             motorcito.to(70);
        }
        else{
            turno = 1;
            motorcito.to(110);
        }
        
    }else
    {
     
        motorcito.to(150);
    }

    setTimeout(ondear, 1000);// CANTIDAD DE TIEMPO EN QUE SE QUIERE QUE SE EJECUTE LA FUNCIÓN(toda la vida se va a ejecuat la función cada segundo  )
}