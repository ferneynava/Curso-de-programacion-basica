class Pakiman //creacion de la clase pakiman
{
  constructor(n, v, a){ // el constructor se usa para agrgar los atributos
    this.imagen = new Image();
    this.nombre = n; // this es un indicador y/o referencia de  de la instancia Cauchin y/o donde estoy. utilizar nombre en la instancia creada. (this es como definir una variable dentro de un constructor o clase)
    this.vida = v; 
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
    //this se refiere a la variables dentro de la clase. 
  
  } //El metodo constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

  //Todo bloque de codigo dentro de una clase es una funcion
  hablar (){  // no se coloca function por que eso ya esta implicito dentro de la clase; 
   alert(this.nombre);
  }

  mostrar(){
    document.body.appendChild(this.imagen); //* craer un hijo a html que el hijo es img muestra la imagen document.appendChild() permite mostrar la imagen. A la estiqueta body se estan agregando cosas como el img
  
    document.write("<br><strong>" + this.nombre +"</strong></br>"); // etiqueta strong para que salga en negrita, etiqueta salto de linea sencillo
    document.write("vida: " + this.vida + "<br />");
    document.write( "Ataque: " + this.ataque + "<hr />"); // etiqueta hr traza una linea al final 

     
  }
}