/* =========================
   LISTAS (ARRAYS)
========================= */

export const ejemploArray = `const frutas = ["Manzana", "Banana", "Cereza"];
const mixto = [10, "Hola", true, { id: 1 }];

console.log(frutas.length); // 3`;

export const ejemploAccesoArray = `const colores = ["Rojo", "Verde", "Azul"];

console.log(colores[0]); // "Rojo" (Primer elemento)
console.log(colores[2]); // "Azul"
console.log(colores[10]); // undefined (Fuera de rango)`;

export const ejemploMutacionPila = `const tareas = ["Comer", "Dormir"];

// push: Agrega al final
tareas.push("Codificar"); 
// ["Comer", "Dormir", "Codificar"]

// pop: Elimina del final
const ultimo = tareas.pop();
// ultimo = "Codificar"
// tareas = ["Comer", "Dormir"]`;

export const ejemploMutacionCola = `const fila = ["Pedro", "Maria"];

// unshift: Agrega al inicio
fila.unshift("Juan");
// ["Juan", "Pedro", "Maria"]

// shift: Elimina del inicio
const primero = fila.shift();
// primero = "Juan"
// fila = ["Pedro", "Maria"]`;
