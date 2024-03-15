function encriptar() {
    var texto = document.querySelector("#texto-input").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".input-cifrado").value = textoCifrado;
    document.querySelector("#texto-input").value = "";
}

var botonEncriptar = document.querySelector("#encriptar-boton"); 
botonEncriptar.onclick = encriptar;

function desencriptar() {
    var textoCifrado = document.querySelector(".input-cifrado").value;
    var texto = textoCifrado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".input-cifrado").value = texto;
    document.querySelector("#texto-input").value = textoCifrado;
}

var botonDesencriptar = document.querySelector("#desencriptar-boton"); 
botonDesencriptar.onclick = desencriptar;
