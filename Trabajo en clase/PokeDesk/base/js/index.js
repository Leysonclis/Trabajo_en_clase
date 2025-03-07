// URL BASE PARA PETICIONES HTTP
let base_url = "https://pokeapi.co/api/v2/pokemon";

// Función para cargar información de un Pokémon en el DOM de nuestra página.
function cargarPokemon(pokemon) {
    document.getElementById("pokemon_name").innerText = pokemon.name; 
    document.getElementById("pokemon_id").innerText =  pokemon.id; 
    document.getElementById("pokemon_height").innerText = ` ${pokemon.height / 10} m`; 
    document.getElementById("pokemon_weight").innerText = ` ${pokemon.weight / 10} kg`; 

    // Mostrar la imagen del Pokémon
    document.getElementById("pokemon_image").src = pokemon.sprites.front_default;
    document.getElementById("pokemon_image").alt = `Imagen de ${pokemon.name}`;
}

// Función para enviar peticiones a la API por el parámetro dado. 
function obtenerDatosPokemon(parameter) {
    let url = `${base_url}/${parameter}`; // Corrección en la URL

    fetch(url)  
        .then((response) => {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return response.json();
        })
        .then((data) => {
            cargarPokemon(data);
        })
        .catch((error) => {
            alert("Pokémon no encontrado"); // Muestra un mensaje si no encuentra el Pokémon
            console.error("Error: ", error);
        });
}

// Función para obtener el dato ingresado por el usuario.
function buscarPokemon() {
    let parametro = document.getElementById("pokemon_text").value.toLowerCase().trim(); // Normaliza el input
    obtenerDatosPokemon(parametro);
}

// Añadir listeners al botón
document.getElementById("buscar").addEventListener("click", buscarPokemon);

// Generar ID de Pokémon aleatorio y obtener datos
const randomPokemon = Math.floor(Math.random() * 1025) + 1;
obtenerDatosPokemon(randomPokemon);
