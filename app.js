
function encriptarTexto() {
    let valorTextarea = document.getElementById("campo-texto1").value;
    validarString(valorTextarea);
    
    let mensajeEncriptado = encriptado(valorTextarea);
    document.getElementById("campo-texto1").value = "";

    modTextBotonCopiar("Copiar");
    document.getElementById("campo-texto2").value = mensajeEncriptado;

    document.getElementById("campo-texto2").style.backgroundImage = 'none';
}

function desencriptarTexto() {
    let valorTextarea = document.getElementById("campo-texto1").value;
    let mensajeDesencriptado = desencriptado(valorTextarea);
    
    modTextBotonCopiar("Copiar");
    
    document.getElementById("campo-texto2").value = mensajeDesencriptado;
    
    document.getElementById("campo-texto2").style.backgroundImage = 'none';
}

function encriptado(msjString) {
    let mensajeEncriptado = msjString.replaceAll("e","enter");
    mensajeEncriptado = mensajeEncriptado.replaceAll("i","imes");
    mensajeEncriptado = mensajeEncriptado.replaceAll("a","ai");
    mensajeEncriptado = mensajeEncriptado.replaceAll("o", "ober");
    mensajeEncriptado = mensajeEncriptado.replaceAll("u", "ufat");

    return mensajeEncriptado;
}

function desencriptado(msjString) {
    let mensajeDesencriptado = msjString.replaceAll("ufat", "u");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober", "o");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai", "a");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes", "i");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter", "e");
        
    return mensajeDesencriptado;
}

function copiarTexto() {
    let textoACopiar = document.getElementById("campo-texto2").value;

    let inputTemp = document.createElement("input");
    inputTemp.setAttribute("value", textoACopiar);

    inputTemp.select();
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            modTextBotonCopiar("Texto Copiado");
        })
}

function modTextBotonCopiar(mensaje) {
    document.getElementById("boton-copiar").innerText = mensaje;
}

function validarString(inputString) {
    const regex = /^[a-z\s]+$/;

    if (!regex.test(inputString)) {
        alert("Solo puedes ingresar letras minúsculas, sin acentos ni caracteres especiales");
    }
}
