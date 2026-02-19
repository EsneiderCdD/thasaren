
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

export const corchetesError = `console.log(usuario.propiedadBuscada);`;

export const corchetesSolucion = `console.log(usuario[propiedadBuscada]);`;

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
  
console.log(user.name);    // "Thasaren"
console.log(user.talk());  // "Hola, soy Thasaren"`;

export const referenciaObjeto = `// Variables primitivas
let a = 10;
let b = a; 
b = 20; 
// a sigue siendo 10.

// Objetos
const original = { valor: 10 };
const copia = original;

copia.valor = 99;

console.log(original.valor); // 99`;

export const destructuringObjeto = `const settings = { theme: "dark", fontSize: 16 };

// Forma tradicional (verbosa)
const t = settings.theme;
const f = settings.fontSize;

// Forma moderna (Destructuring)
const { theme, fontSize } = settings;

console.log(theme); // "dark"`;

export const spreadObjeto = `const base = { a: 1 };
const extra = { b: 2 };

const copiaSegura = { ...base }; 
copiaSegura.a = 99; // No afecta a 'base'

const combinado = { ...base, ...extra, c: 3 };

console.log(combinado); // { a: 1, b: 2, c: 3 }`;

export const herenciaToString = `const player = { name: "Ecd" };

// 1. Usando el método heredado por defecto
console.log("Ganador: " + player);
// Resultado: "Ganador: [object Object]"


// 2. Sobreescribiendo el método (Shadowing)
player.toString = function() {
    return this.name;
};

console.log("Ganador: " + player); 
// Resultado: "Ganador: Ecd"`;


// === ARRAYS (Colecciones) ===

export const declaracionArray = `const frutas = ["Manzana", "Banana", "Cereza"];

console.log(frutas.length); // 3
console.log(frutas[0]);     // "Manzana" (Índice 0)`;

export const accesoArray = `const frutas = ["Manzana", "Banana"];

console.log(frutas[1]); // "Banana"
console.log(frutas[99]); // undefined`;

export const modificarArray = `const lista = ["A", "B"];

lista[0] = "Z"; // Modificar 
lista[2] = "C"; // Agregar 

console.log(lista); // ["Z", "B", "C"]`;

// --- MÉTODOS MUTABLES (Modifican el original) ---

export const metodoPush = `const stack = ["A", "B"];

// Agrega al FINAL (Rápido)
stack.push("C", "D"); 

console.log(stack); // ["A", "B", "C", "D"]`;

export const metodoPop = `const stack = ["A", "B", "C"];

// Quita del FINAL (Rápido)
const ultimo = stack.pop(); 

console.log(ultimo); // "C"
console.log(stack);  // ["A", "B"]`;

export const metodoUnshift = `const cola = ["A", "B"];

// Agrega al INICIO
cola.unshift("Z"); 

console.log(cola); // ["Z", "A", "B"]`;

export const metodoShift = `const cola = ["Z", "A", "B"];

// Quita del INICIO
const primero = cola.shift(); 

console.log(primero); // "Z"
console.log(cola);    // ["A", "B"]`;

// --- MÉTODOS INMUTABLES (Crean nuevos) ---

export const metodoMap = `const nums = [1, 2, 3];

// map: Transforma cada elemento 1 a 1
// Retorna un NUEVO array del mismo tamaño
const dobles = nums.map(n => n * 2); 

console.log(dobles); // [2, 4, 6]
console.log(nums);   // [1, 2, 3] (Original intacto)`;

export const metodoFilter = `const nums = [1, 2, 3, 4, 5];

// filter: Filtra según condición (true/false)
// Retorna un NUEVO array (puede ser más corto)
const mayores = nums.filter(n => n > 3);

console.log(mayores); // [4, 5]`;

export const metodoFind = `const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Bob" }
];

// find: Busca el PRIMERO que cumpla
// Retorna el ELEMENTO o undefined
const bob = users.find(u => u.name === "Bob");

console.log(bob); // { id: 2, name: "Bob" }`;

export const destructuringArray = `const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// 1. Extracción simple (en orden)
const [primero, segundo] = colores; 

console.log(primero); // "Rojo"
console.log(segundo); // "Verde"

// 2. Saltar elementos (usando espacios vacíos)
const [,, tercero] = colores; 

console.log(tercero); // "Azul"`;

export const spreadArray = `const iniciales = [1, 2];
const finales = [4, 5];

// 1. Combinar (Merge)
const todo = [...iniciales, 3, ...finales]; 
console.log(todo); // [1, 2, 3, 4, 5]

// 2. Copia superficial (para no afectar original)
const copia = [...iniciales];
copia.push(99); 

console.log(iniciales); // [1, 2] (Intacto)`;
