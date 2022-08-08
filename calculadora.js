
var contenido = " ";
var Numero1 = 0;
var Numero2 = 0;
var resultadoFinal = 0;
var signo = "";
var resultado = document.getElementById("modulo");

const borrartodo = () =>{
    var borrar = document.getElementById("borrar");
    borrar.addEventListener("click", function() {
        resultado.value = "0"; })

    var eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", function() {
        resultado.value = "0"; })
    Numero1 = 0;
    Numero2 = 0;
    signo = "";
}
const quitar = () =>{
    resultado.value = "";
}

const operacion = () =>{
switch(signo){
    case "+":
        resultadoFinal = parseFloat(Numero1) + parseFloat(Numero2);
        break;
    case "-":
        resultadoFinal = parseFloat(Numero1) - parseFloat(Numero2);
        break;
    case "*":
        resultadoFinal = parseFloat(Numero1) * parseFloat(Numero2);
        break;
    case "/":
        resultadoFinal = parseFloat(Numero1) / parseFloat(Numero2);
        break;
    case "√":
        resultadoFinal = Math.sqrt(Numero1);
        break;
    case "%":
        resultadoFinal = parseFloat(Numero1) / 100;
        break;
    case "²":
        resultadoFinal = Math.pow(Numero1, 2);
        break;

    case "1/":
        resultadoFinal = 1 / parseFloat(Numero1);
        break;

    case "+-":
        resultadoFinal = -Numero1;
        break;
        
}
borrartodo();
resultado.value = resultadoFinal;
}

const botones = () =>{

    var boton0 = document.getElementById("cero");
    boton0.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "0";
        } else {
            resultado.value +=  this.value;
        }
       });

    var boton1 = document.getElementById("uno");
    boton1.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "1";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton2 = document.getElementById("dos");
    boton2.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "2";
        } else {
            resultado.value +=  this.value;
        }});

    var boton3 = document.getElementById("tres");
    boton3.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "3";
        } else {
            resultado.value +=  this.value;
        }});

    var boton4 = document.getElementById("cuatro");
    boton4.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "4";
        } else {
            resultado.value +=  this.value;
        }});

    var boton5 = document.getElementById("cinco");
    boton5.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "5";
        } else {
            resultado.value +=  this.value;
        }});

    var boton6 = document.getElementById("seis");
    boton6.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "6";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton7 = document.getElementById("siete");
    boton7.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "7";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton8 = document.getElementById("ocho");
    boton8.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "8";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton9 = document.getElementById("nueve");
    boton9.addEventListener("click", function() {
        if (resultado.value=="0"){
            resultado.value =  "9";
        } else {
            resultado.value +=  this.value;
        }});

    var botonSumar = document.getElementById("suma");
    botonSumar.addEventListener("click", function() {
        resultado.value +=  this.value;
        Numero1 = resultado.value;
        signo = "+";
        quitar();});

    var botonRestar = document.getElementById("resta");
    botonRestar.addEventListener("click", function() {
        resultado.value +=  this.value;
        Numero1 = resultado.value;
        signo = "-";
        quitar();});

    var botonMultiplicas = document.getElementById("multiplicacion");
    botonMultiplicas.addEventListener("click", function() {
        resultado.value +=  this.value;
        Numero1 = resultado.value;
        signo = "*";
        quitar();});

    var botonDividir = document.getElementById("division");
    botonDividir.addEventListener("click", function() {
        resultado.value +=  this.value;
        Numero1 = resultado.value;
        signo = "/";
        quitar();});

    var botonRaiz = document.getElementById("raiz");
    botonRaiz.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "√";
        operacion();});

    var botonExponente = document.getElementById("exponente");
    botonExponente.addEventListener("click", function() {
            Numero1 = resultado.value;
            signo = "²";
            operacion();});

    var botonPorcentaje = document.getElementById("porcentaje");
    botonPorcentaje.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "%";
        operacion();});

    var botonComa = document.getElementById("coma");
    botonComa.addEventListener("click", function() {
        if ((resultado.value.indexOf("."))>=1) {
            resultado.value;
        }else{
            resultado.value +=  this.value;
        }
        });

    var botonNegacion = document.getElementById("negar");
    botonNegacion.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "+-";
        operacion();
    });

    var botonUno = document.getElementById("unoDivision");
    botonUno.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "1/";
        operacion();
    });

    var botonIgual = document.getElementById("igual");
    botonIgual.addEventListener("click", function() {
        Numero2 = resultado.value;
        operacion();});

    var botonQuitar = document.getElementById("quitar");
    botonQuitar.addEventListener("click", function() {
        resultado.value = resultado.value.substr(0, resultado.value.length - 1);});
}

botones();
borrartodo();