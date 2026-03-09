export const arraysLessonCode = `const miColeccion = ["string", 123, true, null, undefined, [1, 2, 3], [
    { numero: 1, texto: "lista con objeto(1)", boolean: true },
    { numero: 2, texto: "lista con objeto(2)", boolean: true }
],
    [
        {
            categoria: "JavaScript",
            tema: [
                { clase: 1, tema: "Introduccion" },
                { clase: 2, tema: "Estructura de datos" },
                { clase: 3, tema: "Arrays" }
            ]
        },
        {
            categoria: "react",
            tema: [
                { clase: 1, tema: "react 1" },
                { clase: 2, tema: "react 2" },
                { clase: 3, tema: "react 3" }
            ]
        }
    ],
    { nombre: "object" },
    {
        css: [
            { clase: 1, tema: "CSS basico" },
            { clase: 2, tema: "CSS intermedio" }
        ],
        html: [
            { clase: 1, tema: "html basico" },
            { clase: 2, tema: "html intermedio" }
        ]
    }
];
const saludar = function () { return "hola" };

miColeccion.push({ id: 99, status: "nuevo" });
miColeccion.pop();
miColeccion.push(function miformula(valor) {
    return valor;
});

console.log(miColeccion[10]("Magia"));
console.log(miColeccion.length);

miColeccion.unshift("Hello World");
console.log(miColeccion);

const copiaMiColeccion = miColeccion.map(function (n) {
    return n;
});

console.log(copiaMiColeccion);

const copiaStrings = miColeccion.filter(function (n) {
    return typeof n === "string";
});
console.log("Filtrado por string: ", copiaStrings);

const buscarBoolean = miColeccion.find(function (n) {
    return typeof n === "boolean"
});
console.log("Boolean encontrado: ", buscarBoolean);

const primeraLista = miColeccion.find(function (n) {
    return Array.isArray(n);
});
console.log("Primer lista: ", primeraLista);

const encontrarJS = miColeccion.find(function (n) {
    return Array.isArray(n) && n[0] && n[0].categoria === "JavaScript";
});
console.log("Encontrar otro array: ", encontrarJS);

console.log("Acceder un al objeto: ", miColeccion[8][1].tema[2]);
console.log("Acceder a la categoria: ", miColeccion[8][1].tema[2].tema);
console.log("Acceder al diccionario: ", miColeccion[10].html[1].tema);

const categoriaEncontrada = miColeccion.find(function (i) {
    return Array.isArray(i) && i[1]?.categoria === "react";
});

const claseEspecifica = categoriaEncontrada[1].tema.find(function (e) {
    return e.clase === 2;
})
console.log("Busqueda anidadas: ", claseEspecifica.clase);


const busquedaGlobal = miColeccion.find(function (item) {
    if (Array.isArray(item)) {
        return item.find(function(subItem) {
            return subItem.categoria === "react";
        });
    }
    return false;
});
console.log("Busqueda Global: ", busquedaGlobal[1].tema[1].clase);`;

// === ARRAYS (Colecciones - Temario Teórico) ===

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
