class bancoclientes
{
    constructor(Banco, Cuenta, saldo, veri)
    {
        this.Banco = Banco;
        this.Cuenta = Cuenta;
        this.saldo = saldo;
        this.verificado = veri;
    }
    
}

class destino
{
    constructor(Bancodestinos, Cuentadestino,verid)
    {
        this.Bancodestinos= Bancodestinos;
        this.Cuentadestino= Cuentadestino;
        this.verificado = verid;
    }
}

var Saldotransferir= document.getElementById("saldo");
var dinero = parseInt(Saldotransferir.value);

var Nucuentacliente = document.getElementById("Cuentacliente");

var CuentaDestino = document.getElementById("Cuentadestino");


var t = document.getElementById("transferenciabutton");
t.addEventListener("click", transfer);
var resultadotransacion = document.getElementById("transfirio");

var Montotransferir = 1000000
var Mascostos= 100000;
var transfirio; 

var dinerocliente;

var cliente = new bancoclientes("Banco caja social",Nucuentacliente,dinerocliente,true);
var BancoDestino = new destino("Banco caja social",CuentaDestino,true);



function transfer(){
    var Saldotransferir= document.getElementById("saldo");
    var dinero = parseInt(Saldotransferir.value);
    dinerocliente = dinero;

    var Hora = document.getElementById("Horatransferencia");
    var Horat = parseInt(Hora.value);


if(cliente.verificado && BancoDestino.verificado ){
     if(Horat < 12 && Horat > 9 || Horat < 20 && Horat > 15){
    if(cliente.Banco == BancoDestino.Bancodestinos){
        
    resultadotransacion.innerHTML =  "Se transfirio " + dinero;
} else{
    transfirio = dinero + 100;
    resultadotransacion.innerHTML =  "Se transfirio " + transfirio;
}

          if(dinero > Montotransferir){
             
           transfirio = dinero + Mascostos;
             resultadotransacion.innerHTML =  "Se transfirio " + transfirio;
           }
        }else {
          alert("No se puede hacer la transacion en este horario")
        }
   }else if (!cliente.verificado  && Bancodestino.verificado || cliente.verificado  && !Bancodestino.verificado || !cliente.verificado && !Bancodestino.verificado){
    
    alert("No esta verificado");
   
}
}

