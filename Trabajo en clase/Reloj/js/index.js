// Función para mostrar y actualizar el reloj
function reloj() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Asegura que los valores tengan dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("reloj").innerText = hora + ":" + minutos + ":" + segundos;
}

// Llamar a reloj inmediatamente y luego actualizar cada segundo
reloj();
setInterval(reloj, 1000);
