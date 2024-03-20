
//ENCRIPTAR

const matrizCodificar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ];


let areaTexto = document.getElementById("areaTexto");
let cuadroEncriptado = document.getElementById("cuadroEncriptado");


function botonEncriptar(){
    let textoEncriptado = encriptar(areaTexto.value);
    cuadroEncriptado.value = textoEncriptado
    cuadroEncriptado.style.backgroundImage = "none";
}


function encriptar(mensajeEncriptado){
    for(i = 0; i < matrizCodificar.length; i++){
        if(mensajeEncriptado.includes(matrizCodificar[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(
                matrizCodificar[i][0],
                matrizCodificar[i][1]
            );
        }
    }
    return mensajeEncriptado;
}



//DESENCRIPTAR

function botonDesencriptar(){
    let textoDesencriptado = Desencriptar(areaTexto.value);
    cuadroEncriptado.value = textoDesencriptado;
    cuadroEncriptado.style.backgroundImage = "none"; 
}

function Desencriptar(mensajeDesencriptado){
    for(i = 0; i < matrizCodificar.length; i++){
        if(mensajeDesencriptado.includes(matrizCodificar[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(
                matrizCodificar[i][1],
                matrizCodificar[i][0]
            );
        }
    }
    return mensajeDesencriptado;
}



//RESET

function reset(){
    areaTexto.value = "";
    cuadroEncriptado.value = ""; 
    cuadroEncriptado.style.backgroundImage = "url(Busqueda.jpg)";
}



//DETECTAR MAYUSCULAS


function mayuscula (letras) {
const letrasSinEspacios = letras.split(' ').join(''); //split convierte la cadena en un array y JOIN la une por los espacios
    for (var i = 0; i < letrasSinEspacios.length; i++) {
        if(letrasSinEspacios[i] == letrasSinEspacios[i].toUpperCase()){
            cuadroEncriptado.value = "";
            swal("¡Oops!", "¡El mensaje tiene mayusculas! corrige el mensaje, por favor", "warning");
        }
    }
}


function leerMayuscula(){
    let areaTexto = document.getElementById("areaTexto").value;
    mayuscula(areaTexto);
}
