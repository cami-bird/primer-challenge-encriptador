function copiarTextoCifrado() {
    var textoCifrado = document.querySelector(".input-cifrado");

    // Seleccionar el texto cifrado
    textoCifrado.select();

    try {
        // Copiar al portapapeles
        document.execCommand("copy");
        alert("Texto cifrado copiado en el portapapeles");
    } catch (err) {
        console.error('No se pudo copiar el texto cifrado', err);
    }

    window.getSelection().removeAllRanges();
}

var botonCopiar = document.querySelector("#copiar-boton");
botonCopiar.onclick = copiarTextoCifrado;
