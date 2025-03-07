/* Codigo javascript gestionar una lista de tareas 
1. El usuario debe poder ingresar tareas.
2. El usuario debe poder marcar tareas como completadas al hacer click en ellas.
3. El usuario debe poder marcar tareas como no completadas al hacer click en ellas cuando estan completadas 
(por defecto las tareas agregadas están no completadas).
4. El usuario debe poder ver la lista de tareas.
*/

let listaTareas = [];

// Función para agregar una tarea a la lista
function agregarTarea() {
    let tareaTexto = document.getElementById("inputTarea").value.trim();

    // Verificar que la tarea no esté vacía
    if (tareaTexto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    // Crear un objeto para manejar estado de completado
    let tarea = { texto: tareaTexto, completada: false };
    listaTareas.push(tarea);
    
    // Limpiar el campo de entrada después de agregar la tarea
    document.getElementById("inputTarea").value = "";
    mostrarTareas();
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; // Limpiar lista antes de volver a mostrar

    listaTareas.forEach((tarea, index) => {
        let item = document.createElement("li");
        item.innerText = tarea.texto;

        // Aplicar estilos si la tarea está completada
        if (tarea.completada) {
            item.style.textDecoration = "line-through";
            item.style.color = "green"; // Color verde para tareas completadas
        } else {
            item.style.textDecoration = "none";
            item.style.color = "black"; // Color negro para tareas pendientes
        }

        item.style.cursor = "pointer";

        // Evento para marcar/desmarcar tarea
        item.addEventListener("click", () => {
            listaTareas[index].completada = !listaTareas[index].completada;
            mostrarTareas();
        });

        lista.appendChild(item);
    });
}

// Agregar el evento click al botón
document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);
