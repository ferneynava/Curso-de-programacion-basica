var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", Teclado);

var fondo = {
    url: "tile.png",/* Variable url donde va conectener el nombre de la imagen junto con el formato*/
    cargaOK: false
};

var vaca = {    
    url: "vaca.png",
    cargaOK: false   
};

var pollo = {
     url: "Pollo.png",
     cargaOK: false
};

var cerdo = {
      url: "cerdo.png",
      cargaOK: false,
      movimiento: 10
};



var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

var xcerdo = aleatorio (0, 7);
var ycerdo = aleatorio (0, 7);
var xcerdo = xcerdo * 60;
var ycerdo = ycerdo * 60;

var xvaca = [];
var yvaca = [];
var xpollo = [];
var ypollo =[];


var cantidadvaca = aleatorio (0, 7); 
var cantidadpollo = aleatorio (0, 7);


fondo.imagen = new Image(); /*clase Image new= nueva definicion del objeto Image y se guarda en la variable imagen*/
fondo.imagen.src = fondo.url; /* src es una variable dentro de la clase Image()*/
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujar();
}

function Teclado (evento){
    
    
    switch(evento.keyCode)
    {
        case teclas.UP:
             ycerdo = ycerdo - cerdo.movimiento;
             dibujar();
         break; 

        case teclas.DOWN:
            ycerdo= ycerdo + cerdo.movimiento;
             dibujar();
            break;

        case teclas.RIGHT:
            xcerdo = xcerdo - cerdo.movimiento;
             dibujar();
            break;

        case teclas.LEFT:
            xcerdo= xcerdo + cerdo.movimiento;
            dibujar();
            break;

        default:
            console.log("Otra tecla");
            break;
    }
}

function dibujar() {

    if(fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    } 

    if(vaca.cargaOK){

        for(var v= 0; v < cantidadvaca; v++)
        {
        var x = aleatorio (0, 7);
        var y = aleatorio (0, 7);
        var x = x * 60; 
        var y = y * 60;
       xvaca.push(x);
        yvaca.push(y);
        papel.drawImage(vaca.imagen, xvaca[v], yvaca[v]);
        }
    }

    if(pollo.cargaOK){
        for(var p= 0; p < cantidadpollo; p++){
        var x = aleatorio (0, 7);
        var y = aleatorio (0, 7);
        var x = x * 60;
        var y = y * 60;
        xpollo.push(x);
        ypollo.push(y);
        papel.drawImage(pollo.imagen, xpollo[p], ypollo[p]);}
    }

    if(cerdo.cargaOK){
       
        papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
}

}

function cerdodib(){
    
}


function aleatorio (min, max)
{
var resultado; 
resultado = Math.floor(Math.random() * (max - min +1)) + min;
return resultado; 
}