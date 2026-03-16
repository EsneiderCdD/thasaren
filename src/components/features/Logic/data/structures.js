export const arregloHeterogeneo = `const miColeccion = [
    "string", 
    123, 
    true, 
    null, 
    undefined, 
    { id: 1, estado: "activo" }, 
    [1, 2, 3],
    function() { return "hola"; }
];`;

export const arrayDeObjetos = `const usuarios = [
    { id: 1, nombre: "Ana", rol: "Admin" },
    { id: 2, nombre: "Juan", rol: "User" },
    { id: 3, nombre: "Maria", rol: "User" }
];`;

export const matriz = `const tablero = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];`;

export const objetosAnidados = `const configuracion = {
    tema: "dark",
    usuario: {
        nombre: "Carlos",
        preferencias: {
            notificaciones: true,
            idioma: "es"
        }
    }
};`;

export const arbol = `const menu = {
    id: "root",
    nombre: "Menú Principal",
    hijos: [
        {
            id: "productos",
            nombre: "Productos",
            hijos: [
                { id: "electronica", nombre: "Electrónica", hijos: [] },
                { id: "hogar", nombre: "Hogar", hijos: [] }
            ]
        },
        {
            id: "servicios",
            nombre: "Servicios",
            hijos: []
        }
    ]
};`;

export const entidadDiccionario = `const diccionarioUsuarios = {
    "usr_1001": { nombre: "Ana", estado: "activo" },
    "usr_1002": { nombre: "Juan", estado: "inactivo" },
    "usr_1003": { nombre: "Maria", estado: "activo" }
};

// Acceso directo y rápido
const ana = diccionarioUsuarios["usr_1001"];`;

export const diccionarioArrays = `const cursos = {
    "CSS": ["CSS Básico", "Selectores", "Flexbox"],
    "HTML": ["Estructura", "Atributos", "Formularios"],
    "JavaScript": ["Variables", "Estructuras de Datos", "Funciones"]
};

// Acceso directo a la lista
const temasJS = cursos["JavaScript"];`;
