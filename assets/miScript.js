// oculta el elemento con la clase ".asideMasterResult"
document.querySelector(".asideMasterResult").style.display = "none";

// Para escribir solo texto en minusculas sin tildes y sin numeros
document.getElementById("texTareaIngresarID").addEventListener("input", function (event) {
    // expresión regular que permite solo letras y espacios en blanco
    const VarAceptadas = /^[a-zA-Z0-9 !¿?@.,;+-_]*$/;

    // valida el contenido del textarea
    if (!VarAceptadas.test(event.target.value)) {
        // elimina el contenido inválido todo que no sea letras 
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9 !¿?@.,;+-_]/g, "");
    }
    // convierte el contenido del textarea a minúsculas
    event.target.value = event.target.value.toLowerCase();
});

// Para capturar el texto del TEXTAREA y ENCRIPTARLO
document.getElementById("btnEncriptarID").addEventListener("click", function () {
    const ValorTextarea = document.getElementById("texTareaIngresarID").value;

    if (ValorTextarea != "") {
        var textoCifrado = ValorTextarea.replace(/e/gm, "enter");
        var textoCifrado = textoCifrado.replace(/i/gm, "imes");
        var textoCifrado = textoCifrado.replace(/a/gm, "ai");
        var textoCifrado = textoCifrado.replace(/o/gm, "ober");
        var textoCifrado = textoCifrado.replace(/u/gm, "ufat");
        

        // mostar y ocultar el ASIDE
        document.querySelector(".asideMaster").style.display = "none";
        document.querySelector(".asideMasterResult").style.display = "block";

        document.getElementById("textoEncriptadoID").value = textoCifrado;
        document.getElementById("texTareaIngresarID").value = "";
    }

});

// Para capturar el texto del TEXTAREA y DESENCRIPTARLO
document.getElementById("btnDesencriptarID").addEventListener("click", function () {
    const ValorTextarea = document.getElementById("texTareaIngresarID").value;

    if (ValorTextarea != "") {
        var textoCifrado = ValorTextarea.replace(/enter/gm, "e");
        var textoCifrado = textoCifrado.replace(/imes/gm, "i");
        var textoCifrado = textoCifrado.replace(/ai/gm, "a");
        var textoCifrado = textoCifrado.replace(/ober/gm, "o");
        var textoCifrado = textoCifrado.replace(/ufat/gm, "u");


        // mostar y ocultar el ASIDE
        document.querySelector(".asideMaster").style.display = "none";
        document.querySelector(".asideMasterResult").style.display = "block";

        document.getElementById("textoEncriptadoID").value = textoCifrado;
        document.getElementById("texTareaIngresarID").value = "";
    }
});

// Copiar texto Encriptado
document.getElementById("btnCopiarID").addEventListener("click", function () {
    const textoEncriptado = document.getElementById("textoEncriptadoID").select();
    document.execCommand("copy");

});


