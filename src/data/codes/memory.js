/* =========================
   MEMORIA (LOCAL STORAGE)
========================= */

export const ejemploLocalStorage = `// Guardar un dato simple
localStorage.setItem("usuario", "Esneider");

// Leer el dato
const nombre = localStorage.getItem("usuario");
console.log(nombre); // "Esneider"`;

export const ejemploComplejo = `const configuracion = {
    tema: "oscuro",
    idioma: "es"
};

// Convertir Objeto -> String (Serialización)
const jsonString = JSON.stringify(configuracion);
localStorage.setItem("config", jsonString);

// Leer String -> Objeto (Deserialización)
const guardado = localStorage.getItem("config");
const objetoConfig = JSON.parse(guardado);

console.log(objetoConfig.tema); // "oscuro"`;

export const ejemploBorrado = `// Eliminar un item específico
localStorage.removeItem("usuario");

// Limpiar todo el almacenamiento local
localStorage.clear();`;

export const ejemploSessionStorage = `// Funciona igual que localStorage
// PERO los datos se borran al cerrar la pestaña
sessionStorage.setItem("token_temporal", "12345");`;
