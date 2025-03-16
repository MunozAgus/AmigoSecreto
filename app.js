const ListaAmigos = [];
const NombreAmigo = document.getElementById("amigo");
const ListaAmigosPantalla = document.getElementById("listaAmigos");
const ResultadoPantalla = document.getElementById("resultado");
let numeroSorteo = 0; // Contador de sorteos

// Función para validar el nombre ingresado
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/; // Permite solo letras y espacios
    return regex.test(nombre) && nombre.trim().length > 0;
}

// Función para verificar si un nombre ya está en la lista 
function nombreRepetido(nombre) {
    const nombreLower = nombre.toLowerCase(); // Convertir a minúsculas
    return ListaAmigos.some(amigo => amigo.toLowerCase() === nombreLower);
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = NombreAmigo.value.trim();

    // Validaciones con mensajes de error
    if (!nombre) {
        alert("⚠️ Error: Debes ingresar un nombre.");
        NombreAmigo.focus();
        return;
    }
    if (!validarNombre(nombre)) {
        alert("⚠️ Error: El nombre solo puede contener letras y espacios.");
        NombreAmigo.value = "";
        NombreAmigo.focus();
        return;
    }
    if (nombreRepetido(nombre)) {
        alert(`⚠️ Error: El nombre "${nombre}" ya ha sido agregado.`);
        NombreAmigo.value = "";
        NombreAmigo.focus();
        return;
    }

    // Agregar el nombre a la lista
    ListaAmigos.push(nombre);

    // Crear un nuevo elemento <li> y agregarlo a la lista en pantalla
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    ListaAmigosPantalla.appendChild(nuevoElemento);

    // Limpiar el campo de entrada y volver a enfocar
    NombreAmigo.value = "";
    NombreAmigo.focus();
}

// Funcion para sortear amigo secreto
function sortearAmigo() {
    if (ListaAmigos.length === 0) {
        alert("⚠️ Error: No hay nombres en la lista para sortear.");
        return;
    }

    numeroSorteo++;
 
    ResultadoPantalla.innerHTML = "";

    const i = Math.floor(Math.random() * ListaAmigos.length);
    const AmigoSecreto = ListaAmigos[i];

    // Crear y mostrar el nuevo resultado en la pantalla
    let resultadoElemento = document.createElement("li");
    resultadoElemento.innerHTML = `<strong>🎉 Sorteo #${numeroSorteo}</strong><br>El amigo secreto es: <b>${AmigoSecreto}</b>`;
    ResultadoPantalla.appendChild(resultadoElemento);
}