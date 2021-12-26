var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "Pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//Cauchin, pokacho y tocinauro con objetos de la clase Pakiman.

//var cauchin = new Pakiman("Cauchin", 100, 30); //Se crea una instancia de la clase Pakiman del objeto Cauchin (La instancia de la clase se llaman objetos)
//var pokacho = new Pakiman("Pokacho", 80, 50);  //Se crea una instancia de la clase Pakiman del objeto Pokacho (La instancia de la clase se llama objetos)
//var tocinauro = new Pakiman("Tocinauro", 120, 40); //Se crea una instancia de la clase Pakiman del objeto Pokacho (La instancia de la clase se llama objetos)

var colección = [];
colección.push(new Pakiman("Cauchin", 100, 30)); 
colección.push(new Pakiman("Pokacho", 80, 50));
colección.push(new Pakiman("Tocinauro", 120, 40));
// push me va creando un indice en el array

for(var pakin of colección){ // este ciclo solo va a operar por la cantidad de ciclos que estan dentro del array (coleccion) y ese objeto lo va a colocar en la variable pakin, para cada pakin dentro de coleccion coloquelo dentro de pakin  
//la variable  in me va a traer el indice del array osea la cantidad de arreys y la variable of me muestra directamente la instancia o la clase (atributos y metodos de la clase) en ves del indice 
// el in y el of me sirven para recorrer un objeto por dentro y en ocasiones para recorrer arrays que no conocemos   
// in intera en el indice 
// of itera sobre el objeto
pakin.mostrar();
console.log(pakin);
}

for(var x in colección){
  console.log(x);
}