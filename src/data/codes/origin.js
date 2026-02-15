/* =========================
   VARIABLES
========================= */

export const ejemploLet = `let edad;
let nombre = "Esneider";
let contador = 0;`;

export const ejemploConst = `const PI = 3.14;`;

export const ejemploVar = `var legado = "antiguo";`;

/* =========================
   TIPOS PRIMITIVOS
========================= */

export const ejemploNumber = `let edad = 25;
let temperatura = -10;
let precio = 99.99;`;

export const ejemploString = `let nombre = "Juan";
let mensaje = 'Hola mundo';
let vacio = "";`;

export const ejemploBoolean = `let activo = true;
let completado = false;`;

/* =========================
   AUSENCIA DE VALOR
========================= */

export const ejemploUndefined = `let usuario;

console.log(usuario); 
// undefined`;

export const ejemploNull = `let respuesta = null;

console.log(respuesta); 
// null`;

export const ejemploDiferencias = `let a;
let b = null;

console.log(a);       
// undefined

console.log(b);       
// null

console.log(a === b); 
// false`;

/* =========================
   OPERADORES
========================= */

export const ejemploComparacion = `console.log(5 == "5");  
// true (convierte el string a número)

console.log(5 === "5"); 
// false (valor igual, tipo diferente)

console.log(10 != "10");  
// false

console.log(10 !== "10"); 
// true`;

export const ejemploIgualdad = `let numero = 0;

console.log(numero == false);  
// true

console.log(numero === false); 
// false

console.log(typeof numero);    
// "number"`;


export const ejemploLogicos = `let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia); 
// true

console.log(edad < 18 || tieneLicencia);  
// true

console.log(!tieneLicencia);              
// false`;
