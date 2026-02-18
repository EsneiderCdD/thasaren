
// === OBJETOS (Structures) ===

export const declaracionObjeto = `const usuario = {
    nombre: "Ana",
    edad: 30,
    activo: true,
    roles: ["admin", "editor"]
};

console.log(typeof usuario); // "object"`;

export const accesoPunto = `// Notación de punto (Directa, Preferida)
const usuario = { id: 101, plan: "premium" };

console.log(usuario.id); // 101`;

export const anadirPropiedad = `const player = {};

player.name = "Ecd";
player.life = 99;

console.log(player); // { name: "Ecd", life: 99 }`;

export const anadirPropiedadCorchetes = `const player = {};
const stat = "life";

player["name"] = "Ecd"; // Clave string directa
player[stat] = 99;      // Clave dinámica (variable)

console.log(player); // { name: "Ecd", life: 99 }`;

// === EJEMPLOS PARA NOTACIÓN DE CORCHETES (Desglosados) ===

export const corchetesSituacion = `const usuario = {
    nombre: "Ana",
    edad: 30,
    email: "ana@email.com"
};

const propiedadBuscada = "email"; `;

export const corchetesError = `console.log(usuario.propiedadBuscada); // undefined`;

export const corchetesSolucion = `console.log(usuario[propiedadBuscada]); // "ana@email.com"`;

export const corchetesEspacios = `const libro = {
    "titulo del libro": "JavaScript Moderno",
    "año-publicacion": 2024
};

console.log(libro.titulo del libro); // Error

console.log(libro["titulo del libro"]);
console.log(libro["año-publicacion"]);`;

// -----------------------------------------------------------

export const metodoObjeto = `const user = {
    name: "Thasaren",
    talk: function() { 
        // 'this' hace referencia al propio objeto
        return "Hola, soy " + this.name; 
    }
};
  
console.log(user.name);    // Acceso a propiedad: "Thasaren"
console.log(user.talk());  // Ejecución de método: "Hola, soy Thasaren"`;

export const referenciaObjeto = `// Variables primitivas (Copia por valor)
let a = 10;
let b = a; 
b = 20; 
// a sigue siendo 10. Son independientes.

// Objetos (Copia por REFERENCIA)
const original = { valor: 10 };
const copia = original; // ⚠️ Copia la dirección, NO el objeto

copia.valor = 99; // ¡Modifica el original!

console.log(original.valor); // 99 (Afectado)`;

export const destructuringObjeto = `const settings = { theme: "dark", fontSize: 16 };

// Forma tradicional (verbosa)
const t = settings.theme;
const f = settings.fontSize;

// Forma moderna (Destructuring)
// Extrae propiedades a variables del mismo nombre
const { theme, fontSize } = settings;

console.log(theme); // "dark"`;

export const spreadObjeto = `const base = { a: 1 };
const extra = { b: 2 };

// Problema: Object.assign() o mutaciones
// Solución: Spread (...) crea una COPIA SUPERFICIAL nueva

const copiaSegura = { ...base }; 
copiaSegura.a = 99; // No afecta a 'base'

// También sirve para unir (Merge)
const combinado = { ...base, ...extra, c: 3 };

console.log(combinado); // { a: 1, b: 2, c: 3 }`;

export const herenciaToString = `const player = { name: "Ecd" };

// 1. Usando el método heredado por defecto
// JS busca .toString() en player -> No está -> Sube a Object.prototype
console.log("Ganador: " + player); 
// Resultado: "Ganador: [object Object]"


// 2. Sobreescribiendo el método (Shadowing)
player.toString = function() {
    return this.name;
};

// JS encuentra TU .toString() primero y lo usa
console.log("Ganador: " + player); 
// Resultado: "Ganador: Ecd"`;


// === ARRAYS (Colecciones) ===

export const declaracionArray = `const frutas = ["Manzana", "Banana"];
const mixto = [1, "Hola", true, { id: 1 }];

console.log(frutas.length); // 2
console.log(frutas[0]); // "Manzana"`;

export const metodosMutables = `const pila = ["A", "B"];

// Agregar/Quitar al final (Rápido)
pila.push("C"); // ["A", "B", "C"]
pila.pop();     // ["A", "B"]

// Agregar/Quitar al inicio (Lento, reindexa todo)
pila.unshift("Z"); // ["Z", "A", "B"]
pila.shift();      // ["A", "B"]`;

export const metodosInmutables = `const nums = [1, 2, 3, 4];

// map: Transforma cada elemento (Retorna nuevo array)
const dobles = nums.map(n => n * 2); 
console.log(dobles); // [2, 4, 6, 8]

// filter: Filtra según condición (Retorna nuevo array)
const pares = nums.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// find: Busca el primero que cumpla (Retorna elemento o undefined)
const tres = nums.find(n => n === 3);
console.log(tres); // 3`;

export const destructuringArray = `const coordenadas = [10, 20];

// Asignación posicional
const [x, y] = coordenadas;

console.log(x); // 10
console.log(y); // 20`;

export const spreadArray = `const listaA = [1, 2];
const listaB = [3, 4];

// Concatenar y expandir
const total = [...listaA, ...listaB, 5];

console.log(total); // [1, 2, 3, 4, 5]`;
