
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
