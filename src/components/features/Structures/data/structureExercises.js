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

    },
    {
        id: 4,
        title: "Gestión de Fila (Arrays)",
        description: "Tienes una lista de espera: ['Ana', 'Juan']. Llega 'Pedro' al final y 'Maria' se cansa y se va (estaba de primera). Imprime la lista resultante.",
        code: `const fila = ["Ana", "Juan"];
fila.push("Pedro");
fila.shift("");
console.log(fila); // ["Juan", "Pedro"]`,
        runway: "push y shift."
    },
    {
        id: 5,
        title: "Actualización de Perfil",
        description: "Un usuario quiere cambiar su email. El objeto es 'usuario'. Cambia el email a 'nuevo@mail.com' y añade la propiedad 'activo' como true.",
        code: `const usuario = {
    username: "coder123",
    email: "viejo@mail.com"
};

// Actualiza email y añade 'activo'`,
        runway: `usuario.email = "nuevo@mail.com";
usuario.activo = true;

console.log(usuario);`
    },
    {
        id: 6,
        title: "Transformador de Precios (Map)",
        description: "Tienes un array de precios [100, 200, 300]. Crea un nuevo array donde cada precio tenga un incremento del 15% por impuestos.",
        code: `const precios = [100, 200, 300];

// Crea 'preciosConImpuesto' usando .map()`,
        runway: `const preciosConImpuesto = precios.map(p => p * 1.15);
console.log(preciosConImpuesto); // [115, 230, 345]`
    },
    {
        id: 7,
        title: "Filtro de Inventario (Filter)",
        description: "Tienes una lista de stock. Filtra y quédate solo con los productos que tengan una cantidad mayor a 0.",
        code: `const inventario = [
    { nombre: "Teclado", stock: 5 },
    { nombre: "Mouse", stock: 0 },
    { nombre: "Monitor", stock: 2 }
];

// Crea 'disponibles' usando .filter()`,
        runway: `const disponibles = inventario.filter(item => item.stock > 0);
console.log(disponibles); // [{nombre: "Teclado"...}, {nombre: "Monitor"...}]`
    },
    {
        id: 8,
        title: "Extracción Rápida (Destructuring)",
        description: "Extrae el nombre y la ciudad de este objeto en variables limpias. Haz lo mismo para obtener el primer elemento de la lista de habilidades.",
        code: `const dev = {
    nombre: "Esneider",
    detalles: { ciudad: "Medellín" },
    habilidades: ["JS", "React", "Node"]
};

// Usa destructuring para sacar: nombre, ciudad y la primera habilidad`,
        runway: `const { nombre, detalles: { ciudad } } = dev;
const [primeraHabilidad] = dev.habilidades;

console.log(nombre, ciudad, primeraHabilidad); // "Esneider" "Medellín" "JS"`
    },
    {
        id: 9,
        title: "Clonación Segura (Spread)",
        description: "Crea una copia de este 'post' pero cambia el título a 'Update' sin modificar el original. Añade también una etiqueta 'web' al array de tags sin mutar el original.",
        code: `const post = { id: 1, titulo: "Old", tags: ["js"] };

// Crea 'nuevoPost' clonando y modificando`,
        runway: `const nuevoPost = { 
    ...post, 
    titulo: "Update", 
    tags: [...post.tags, "web"] 
};

console.log(post.titulo); // "Old"
console.log(nuevoPost.titulo); // "Update"`
    },
    {
        id: 10,
        title: "Buscador de Usuarios (Find)",
        description: "Busca en la lista al usuario con id 2. Si lo encuentras, imprime su nombre. Si no, imprime 'No encontrado'.",
        code: `const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Beto" },
    { id: 3, nombre: "Carla" }
];

// Encuentra al usuario 2`,
        runway: `const user = usuarios.find(u => u.id === 2);
console.log(user ? user.nombre : "No encontrado"); // "Beto"`
    }
];
