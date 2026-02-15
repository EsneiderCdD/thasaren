/* =========================
   LA ENTIDAD (OBJETOS)
========================= */

export const ejemploObjeto = `const usuario = {
    nombre: "Alice",
    id: 101, // Identificador único
    activo: true, // Estado booleano
    roles: ["admin", "editor"] // Colección anidada
};`;

export const ejemploAcceso = `const propiedad = "nombre";

// Notación de punto (Directa)
console.log(usuario.id); // 101

// Notación de corchetes (Dinámica)
console.log(usuario[propiedad]); // "Alice"`;

export const ejemploReferencia = `const original = { valor: 10 };
const copia = original; // Referencia en memoria

copia.valor = 20;

console.log(original.valor); 
// 20 (Afecta al objeto compartido)`;

export const ejemploDesestructuracion = `const usuario = { id: 1, nombre: "Admin" };

// Extracción directa a variables
const { nombre, id } = usuario;

console.log(nombre); // "Admin"`;

export const ejemploManipulacionObjeto = `const configuracion = {
    tema: "oscuro",
    notificaciones: true
};

// Agregar propiedad
configuracion.version = "1.0";

// Modificar propiedad existente
configuracion.tema = "claro";

// Eliminar propiedad
delete configuracion.notificaciones;

console.log(configuracion);
// { tema: "claro", version: "1.0" }`;
