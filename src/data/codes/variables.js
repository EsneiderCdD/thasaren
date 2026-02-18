// === DECLARACIÓN DE VARIABLES ===

export const ejemploLet = `let edad;
edad = 25;
let nombre = "Esneider";
// Se puede reasignar, alcance de bloque`;

export const ejemploConst = `const PI = 3.1416;
// PI = 3.15; // Error: Assignment to constant variable.
// No se puede reasignar, usar siempre que sea posible`;

export const ejemploVar = `var legado = "antiguo";
// Alcance de función, susceptible a hoisting. Evitar.`;

// === TIPOS DE DATOS PRIMITIVOS ===

export const ejemploNumber = `let edad = 25;
let temperatura = -10.5;
console.log(typeof edad); // "number"`;

export const ejemploString = `let nombre = "Juan";
let mensaje = 'Hola mundo'; // Comillas simples o dobles
console.log(typeof nombre); // "string"`;

export const ejemploBoolean = `let activo = true;
let completado = false;
console.log(typeof activo); // "boolean"`;

// === AUSENCIA DE VALOR ===

export const ejemploUndefined = `let usuario;
console.log(usuario); // undefined (No inicializada)`;

export const ejemploNull = `let respuesta = null;
console.log(respuesta); // null (Valor vacío intencional)`;

