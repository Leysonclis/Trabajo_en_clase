/* Desarrollar un código en javascript que permita jugar al ahorcado. 
El usuario debe adivinar una palabra de 5 letras.
El usuario tiene 6 oportunidades para adivinar la palabra.
Si el usuario adivina la palabra, se muestra un mensaje de felicitaciones.
Si el usuario se queda sin oportunidades, se muestra un mensaje de derrota.
El usuario puede jugar de nuevo.
*/

let listaPalabras = ["perro", "gato", "raton", "luzon", "tigre", "leona", "avion", "drone", "nubes", "cielo"];
let palabraSecreta;
let intentosRestantes;
let letrasUsadas;

// Función para mostrar la palabra con guiones bajos y letras acertadas
function obtenerPalabra() {
    let palabra = "";
    for (let letra of palabraSecreta) {
        if (letrasUsadas.includes(letra)) {
            palabra += letra + " ";
        } else {
            palabra += "_ ";
        }
    }
    return palabra.trim();
}

// Función para iniciar el juego
function jugar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

    document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentosRestantes}`;
    document.getElementById("letrasUsadas").textContent = "Letras usadas: Ninguna";
    document.getElementById("palabra").textContent = obtenerPalabra();
    document.getElementById("letra").value = "";

    document.getElementById("jugar").disabled = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("reiniciar").disabled = false;
}

// Función para reiniciar el juego y volver a su estado inicial
function reiniciar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = "";

    document.getElementById("intentosRestantes").textContent = "";
    document.getElementById("letrasUsadas").textContent = "";
    document.getElementById("palabra").textContent = "";
    document.getElementById("letra").value = "";

    document.getElementById("jugar").disabled = false;
    document.getElementById("validar").disabled = true;
    document.getElementById("reiniciar").disabled = true;
}

// Función para validar la letra ingresada por el usuario
function validarLetra() {
    let letra = document.getElementById("letra").value;
    // Eliminar espacios en blanco y pasar a minúscula
    letra = letra.trim().toLowerCase();

    // Validar que se ingrese una sola letra válida (no espacios en blanco)
    if (letra === "" || letra.length !== 1 || !/^[a-zñ]$/.test(letra)) {
        alert("Por favor, ingresa una sola letra válida (sin espacios en blanco).");
        document.getElementById("letra").value = "";
        return;
    }

    if (letrasUsadas.includes(letra)) {
        alert("La letra ya ha sido usada");
        document.getElementById("letra").value = "";
    } else {
        letrasUsadas.push(letra);
        document.getElementById("letrasUsadas").textContent = letrasUsadas.join(", ");
        document.getElementById("letra").value = "";
        if (palabraSecreta.includes(letra)) {
            document.getElementById("palabra").textContent = obtenerPalabra();
            if (obtenerPalabra().replace(/ /g, "") === palabraSecreta) {
                alert("Felicitaciones, adivinaste la palabra");
                document.getElementById("jugar").disabled = false;
                document.getElementById("reiniciar").disabled = true;
            }
        } else {
            // Solo restar intentos si quedan más de 0
            if (intentosRestantes > 0) {
                intentosRestantes--;
            }
            document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentosRestantes}`;
            if (intentosRestantes === 0) {
                alert("Te has quedado sin oportunidades");
                document.getElementById("jugar").disabled = false;
                document.getElementById("reiniciar").disabled = true;
            }
        }
    }
}

// Agregar eventos a los botones
document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("validar").addEventListener("click", validarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
