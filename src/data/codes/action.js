/* =========================
   FUNCIONES (ACCIONES)
========================= */

export const ejemploDeclaracion = `function saludar(nombre) {
    return "Hola " + nombre;
}

console.log(saludar("Mundo"));`;

export const ejemploExpresion = `const sumar = (a, b) => {
    return a + b;
};

// Return implícito (una sola línea)
const duplicar = x => x * 2;

console.log(duplicar(5)); // 10`;

export const ejemploParametros = `function configurar(color = "azul", ancho = 100) {
    // Valores por defecto
    console.log(color, ancho);
}

configurar();         // "azul", 100
configurar("rojo");   // "rojo", 100`;

export const ejemploComparativa = `// Declaración Clásica
function sumar(a, b) {
    return a + b;
}

// Arrow Function (Expresión)
const sumarFlecha = (a, b) => a + b;

// Arrow Function (Bloque)
const sumarBloque = (a, b) => {
    const resultado = a + b;
    return resultado;
};`;

export const ejemploScope = `let global = "Visible siempre";

function prueba() {
    let local = "Visible solo aquí";
    console.log(global); // Ok
}

console.log(local); // Error: local is not defined`;

export const ejemploModulos = `// archivo: utils.js
export const sumar = (a, b) => a + b;
export default function principal() { ... }

// archivo: main.js
import principal, { sumar } from './utils.js';`;
