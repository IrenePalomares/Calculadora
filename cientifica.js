
var contenido = " ";
var Numero1 = 0;
var Numero2 = 0;
var resultadoFinal = 0;
var signo = "";
var total = 1;
var resultado = document.getElementById("modulo");

const borrartodo = () =>{
    var eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", function() {
        resultado.value = "0"; })
    Numero1 = 0;
    Numero2 = 0;
    total = 1;
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
    case "³√":
        resultadoFinal = Math.cbrt(Numero1);
        break;
    case "ʸ√":
        resultadoFinal = Math.pow(Numero1, 1/Numero2);
        break;   
    case "%":
        resultadoFinal = parseFloat(Numero1) / 100;
        break;
    case "²":
        resultadoFinal = Math.pow(Numero1, 2);
        break;
    case "³":
            resultadoFinal = Math.pow(Numero1, 3);
            break; 
    case "10ᵡ":
                resultadoFinal = Math.pow(10, Numero1);
                break; 
    case "2ᵡ":
        resultadoFinal = Math.pow(2, Numero1);
        break;  
    case "xʸ":
        resultadoFinal = Math.pow(Numero1, Numero2);
        break;                   
    case "1/":
        resultadoFinal = 1 / parseFloat(Numero1);
        break;
    case "+-":
        resultadoFinal = -Numero1;
        break;     
    case "π":
        resultadoFinal = Numero1;
        break;
    case "e":
        resultadoFinal = Numero1;
        break;
    case "mod":
        resultadoFinal = parseFloat(Numero1) % parseFloat(Numero2);
        break;
    case "exp":
        for (let i = 0; i < Numero2; i++) {
            Numero1 = Numero1 + "" + 0;
        }
        resultadoFinal = Numero1;
        break;
    case "ln":
        resultadoFinal = Math.log(Numero1);
        break;
    case "log":
            resultadoFinal = Math.log10(Numero1);
            break;
    case "n!":
        for (i=1; i<=Numero1; i++) {
            total = total * i; 
        }
        resultadoFinal = total;
        break;
    case "sen":
        resultadoFinal = Math.sin(Numero1);
        break;
    case "cos":
        resultadoFinal = Math.cos(Numero1);
        break;  
    case "tan":
        resultadoFinal = Math.tan(Numero1);
        break; 
    case "asen":
        resultadoFinal = Math.asen(Numero1);
        break; 
    case "acos":
        resultadoFinal = Math.acos(Numero1);
        break;    
    case "atan":
        resultadoFinal = Math.atan(Numero1);
        break; 
    case "|x|":
        resultadoFinal = Math.abs(Numero1);
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
        if (resultado.value =="0"){
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
        if (resultado.value =="0"){
            resultado.value =  "3";
        } else {
            resultado.value +=  this.value;
        }});

    var boton4 = document.getElementById("cuatro");
    boton4.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "4";
        } else {
            resultado.value +=  this.value;
        }});

    var boton5 = document.getElementById("cinco");
    boton5.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "5";
        } else {
            resultado.value +=  this.value;
        }});

    var boton6 = document.getElementById("seis");
    boton6.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "6";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton7 = document.getElementById("siete");
    boton7.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "7";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton8 = document.getElementById("ocho");
    boton8.addEventListener("click", function() {
        if (resultado.value =="0"){
            resultado.value =  "8";
        } else {
            resultado.value +=  this.value;
        }
    });

    var boton9 = document.getElementById("nueve");
    boton9.addEventListener("click", function() {
        if (resultado.value =="0"){
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

    var botonMod = document.getElementById("mod");
    botonMod.addEventListener("click", function() {
            resultado.value +=  this.value;
            Numero1 = resultado.value;
            signo = "mod";
            quitar();});
    
    var botonExp = document.getElementById("exp");
    botonExp.addEventListener("click", function() {
            resultado.value +=  this.value;
            Numero1 = resultado.value;
            signo = "exp";
            quitar();});

    var botonRaiz = document.getElementById("raiz");
    botonRaiz.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "√";
        operacion();});

    var botonRaizcubica = document.getElementById("raizcubica");
    botonRaizcubica.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "³√";
        operacion();});

    var botonRaizʸ = document.getElementById("raizʸ");
    botonRaizʸ.addEventListener("click", function() {
            resultado.value +=  this.value;
            Numero1 = resultado.value;
            signo = "ʸ√";
            quitar();});

    var botonExponente = document.getElementById("exponente");
    botonExponente.addEventListener("click", function() {
            Numero1 = resultado.value;
            signo = "²";
            operacion();});

    var botonExponente3 = document.getElementById("exponente3");
        botonExponente3.addEventListener("click", function() {
                Numero1 = resultado.value;
                signo = "³";
                operacion();});   

    var botonBaseExponente = document.getElementById("baseexponente");
    botonBaseExponente.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "xʸ";
        quitar();});  

    var botonDiezelevado = document.getElementById("diezelevado");
    botonDiezelevado.addEventListener("click", function() {
            Numero1 = resultado.value;
            signo = "10ᵡ";
            operacion();}); 

    var botonDoselevado = document.getElementById("doselevado");
    botonDoselevado.addEventListener("click", function() {
            Numero1 = resultado.value;
            signo = "2ᵡ";
            operacion();}); 

    var botonAbsoluto = document.getElementById("absoluto");
    botonAbsoluto.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "|x|";
        operacion();});

    var botonSeno = document.getElementById("sen");
    botonSeno.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "sen";
        operacion();});

 var botonCoseno= document.getElementById("cos");
 botonCoseno.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "cos";
        operacion();});
        
var botonTangente= document.getElementById("tan");
 botonTangente.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "tan";
        operacion();});

var botonArcSeno= document.getElementById("asen");
 botonArcSeno.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "asen";
        operacion();});        

 var botonArcCoseno= document.getElementById("acos");
 botonArcCoseno.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "acos";
        operacion();});
        
var botonArcTangente= document.getElementById("tan");
 botonArcTangente.addEventListener("click", function() {
        Numero1 = resultado.value;
        signo = "tan";
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

    var botonNeperiano = document.getElementById("neperiano");
    botonNeperiano.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "ln";
        operacion();
    });

    var botonLogaritmo = document.getElementById("logaritmo");
    botonLogaritmo.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "log";
        operacion();
    });

    var botonFactorial = document.getElementById("factorial");
    botonFactorial.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "n!";
        operacion();
    });

    var botonUno = document.getElementById("unoDivision");
    botonUno.addEventListener("click", function() { 
        Numero1 = resultado.value;
        signo = "1/";
        operacion();
    });

    var botonPi = document.getElementById("π");
    botonPi.addEventListener("click", function() {
        Numero1 = Math.PI;
        signo = "π";
        operacion();});

    var botonE = document.getElementById("e");
    botonE.addEventListener("click", function() {
        Numero1 = Math.E;
        signo = "e";
        operacion();});

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