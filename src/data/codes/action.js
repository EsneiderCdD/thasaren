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

export const ejemploHoistingOk = `// ✅ SUCEDE (Elevación)
console.log(despedir("Esneider")); 

function despedir(nombre) {
    return "Adiós, " + nombre;
}`;

export const ejemploHoistingError = `// ❌ FALLA (Referencia)
console.log(gritar("Hola")); 

const gritar = (texto) => {
    return texto.toUpperCase() + "!!!";
};`;

export const ejemploRest = `function sumarTodo(...numeros) {
    // numeros es un array con todos los argumentos
    return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(sumarTodo(1, 2, 3, 4)); // 10`;

export const ejemploSpread = `const notas = [5, 8, 10];
const notaMaxima = Math.max(...notas); 

console.log(notaMaxima); // 10`;

export const ejemploCallback = `function procesar(nombre, callback) {
    const saludo = "Hola " + nombre;
    callback(saludo);
}

procesar("Esneider", (res) => {
    console.log(res.toUpperCase());
});`;
