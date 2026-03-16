import { arraysLessonCode } from "./arrays_lesson";

export const structureExercises = [
    {
        id: 1,
        title: "Masterizando Arrays y Objetos",
        description: "Repaso de métodos de búsqueda (find), filtrado (filter) y transformación (map) en estructuras profundas.",
        code: arraysLessonCode,
        runway: "En esta clase aprendimos a navegar por arrays anidados y objetos complejos usando métodos modernos."
    },
    {
        id: 2,
        title: "Desestructuración y Spread Operator",
        description: "Extracción de datos por posición y nombre, alias, y clonación/extensión de objetos y arrays.",
        code: `import { miColeccion } from "./data.js";

// Desestructuración Posicional
const [miTexto, miNumero, miBoolean] = miColeccion;
const [, , , miNull, miUndefined ] = miColeccion;

// Desestructuración por nombre y anidada
const { nombre } = miColeccion[8];
const [, , , , , , , categorias] = miColeccion;
const [objetoJS] = categorias;
const { tema: [, , tercerTema] } = objetoJS;

// Spread Operator
const copiaMiColeccion = ["Primero", ...miColeccion, "Ultimo"];
const listaAlumnos = [{ id: 1, nombre: "Juan" }, { id: 2, nombre: "Maria" }];
const objetoActualizado = { ...miColeccion[8], listaAlumnos };`,
        runway: "Aprendimos que el Spread Operator nos permite crear copias inmutables y extender nuestros objetos."
    },
    {
        id: 3,
        title: "El Almacén de Datos (Objetos)",
        description: "Tienes un objeto 'producto'. Accede al nombre usando dot notation y al precio usando bracket notation. Imprime ambos en un solo string.",
        code: `const producto = {
  id: 1,
  item: "laptop",
  precio: 1500
}
const nombre = producto.item;
const precio = producto["precio"];
console.log(\`Producto: \${ nombre } a un precio de: \${ precio } \`)
// Producto: laptop a un precio de: 1500 
`,
        runway: "usa Don Notation para el nombre y Bracket Notation para el precio. Imprime en un solo string El producto es [nombre] y su precio es [precio]",

    }
];
