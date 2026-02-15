/* =========================
   DOM (DOCUMENT OBJECT MODEL)
========================= */

export const ejemploSeleccion = `// Seleccionar por ID
const titulo = document.getElementById("main-title");

// Seleccionar por Selector CSS (Más versátil)
const boton = document.querySelector(".btn-primary");
const items = document.querySelectorAll("li"); // Nodelist`;

export const ejemploManipulacion = `const elemento = document.querySelector("h1");

// Modificar contenido texto
elemento.textContent = "Nuevo Título";

// Modificar estilos en línea
elemento.style.color = "tomato";
elemento.style.fontSize = "2rem";

// Modificar clases (Recomendado)
elemento.classList.add("activo");
elemento.classList.remove("oculto");`;

export const ejemploEventos = `const boton = document.querySelector("#miBoton");

// Escuchar evento 'click'
boton.addEventListener("click", () => {
    console.log("¡Click detectado!");
    alert("Interacción exitosa");
});

// Tipos comunes: 'submit', 'keydown', 'mouseover'`;

export const ejemploCreacion = `const lista = document.querySelector("ul");
const nuevoItem = document.createElement("li");

nuevoItem.textContent = "Elemento Dinámico";
nuevoItem.classList.add("item-lista");

// Insertar en el DOM
lista.appendChild(nuevoItem);`;
