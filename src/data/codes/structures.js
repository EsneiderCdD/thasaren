
// === OBJETOS (Structures) ===

export const declaracionObjeto = `const usuario = {
    nombre: "Ana",
    edad: 30,
    activo: true,
    roles: ["admin", "editor"]
};

console.log(typeof usuario); // "object"`;

export const accesoPropiedades = `const usuario = { id: 101, "tipo usuario": "premium" };

// Notación de punto (Directa, Preferida)
console.log(usuario.id); // 101

// Notación de corchetes (Dinámica o claves especiales)
const key = "id";
console.log(usuario[key]); // 101
console.log(usuario["tipo usuario"]); // "premium"`;

export const referenciaObjeto = `const original = { valor: 10 };
const copia = original; // Copia la REFERENCIA, no el valor

copia.valor = 99; // Modifica el mismo objeto en memoria

console.log(original.valor); // 99 (¡Afectado!)`;

export const destructuringObjeto = `const settings = { theme: "dark", fontSize: 16 };

// Extraer propiedades a variables del mismo nombre
const { theme, fontSize } = settings;

console.log(theme); // "dark"`;

export const spreadObjeto = `const base = { a: 1 };
const extra = { b: 2 };

// Copia superficial y unión (Merge)
const combinado = { ...base, ...extra, c: 3 };

console.log(combinado); // { a: 1, b: 2, c: 3 }`;


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
