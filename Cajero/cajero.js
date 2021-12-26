var imagenesbill = [];
imagenesbill["50"]= "Cincuenta.jpg";
imagenesbill["20"]= "Veinte.jpg";
imagenesbill["10"]= "Diez.jpg";

class Billete 
{
   constructor(v, c)
   {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenesbill[this.valor];
   
   }
  
}


function entregarDinero(){

   var t = document.getElementById("dinero");
   dinero = parseInt(t.value);//parseInt convierte un string a número (convertir a entero)
    for (var bi of caja){  // agarra todo los elemento que tengo en la caja y irme uno por uno  en cada uno de los ciclos y colocarlo en el bi
     
        if(dinero > 0){

            div = Math.floor(dinero / bi.valor); // función para redonderar asia abajo, cualquier número con números decimales. saber el número de billetes 
      
               if(div > bi.cantidad){
                  papeles = bi.cantidad;}

               else{
                   papeles = div;} 

      entregado.push(new Billete (bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
      bi.cantidad = bi.cantidad - papeles; 
   
    }
   }
     if(dinero > 0)
     {
        resultado.innerHTML =  "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";

     } else {
   
    for(var e of entregado){
            // resultado.innerHTML +=  e.cantidad + " billetes de" + "<br/>"; // element.innerHTML es un atributo o propiedad, variable.- establece o devuelve el contenido HTML (HTMLinterno) de un elemento
                                                                                 // El operador += indica que la variable es igual a su valor mas lo uqe haya despues del objeto. 
             //resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $" + e.valor + "<br />"     
           if(e.cantidad > 0) {
           for(var i = 0; i < e.cantidad; i++){
           resultado.appendChild(e.imagen.cloneNode(true));} // cloneNode metodo que permite que se creen varias imagenes iguales. } 
           resultado.innerHTML +=  "<br/>"; }}  
   }        
 

}

function Cuenta(){
 
   total = 0 ;
  for (var to of caja){
     total += to.valor * to.cantidad;
   }
   Totaldedinero.innerHTML += "Saldo disponible " + total + "<br />"; 
} 


var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;
var total;
var descuentacaja = 0;
var resultado = document.getElementById("resultado");
var Totaldedinero = document.getElementById("Totaldedinero");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var c = document.getElementById("saldo");
c.addEventListener("click", Cuenta);