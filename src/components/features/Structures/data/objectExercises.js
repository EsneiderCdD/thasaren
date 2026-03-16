export const objectExercises = [
    {
        id: 1,
        title: "Buceo en Objetos",
        description: "Práctica de acceso a propiedades usando Dot Notation, Bracket Notation y acceso a arrays anidados.",
        code: `const curso = {
    titulo: "Master en JavaScript",
    instructor: {
        nombre: "Thasaren",
        experiencia: 10,
        redes: ["github", "linkedin"]
    },
    modulos: [
        { id: 1, nombre: "Fundamentos", completado: true },
        { id: 2, nombre: "Objetos y Arrays", completado: false }
    ],
    configuracion: {
        "acceso-total": true,
        idioma: "es"
    }
};
//Dot Notation
const nombreProfe = curso.instructor.nombre;
const añosExp = curso.instructor.experiencia;
console.log(nombreProfe, añosExp);

//Bracket Notation
const tieneAcceso = curso.configuracion["acceso-total"];
console.log(tieneAcceso);

//object + lista
const segundaRedSocial = curso.instructor.redes[1];
console.log(segundaRedSocial);`,
        runway: "En este ejercicio practicamos las tres formas de acceder a datos: punto para propiedades fijas, corchetes para claves con guiones y el acceso secuencial para llegar a un array dentro de un objeto."
    },
    {
        id: 2,
        title: "Estructuras Árbol y Acceso",
        description: "Ejemplo de árbol de datos y extracción de propiedades puntuales.",
        code: [
`// data.js
// Arbol de datos
export const tienda = {
    nombre: "mi tienda",
    direcccion: "calle falsa 123",
    insumos: {
        bebidas: {
            light: [
                { nombre: "coca-cola", precio: 3000, isDisponible: false },
                { nombre: "agua", precio: 1000, isDisponible: true },
                { nombre: "jugo", precio: 2000, isDisponible: true }
            ],
            azucaradas: [
                { nombre: "coca-cola", precio: 3500, isDisponible: false },
                { nombre: "jugo", precio: 2500, isDisponible: false }
            ]
        },
        limpieza: {
            aseo: [
                { nombre: "cloro", precio: 3500, isDisponible: false },
                { nombre: "detergente", precio: 2500, isDisponible: false }
            ]
        },
        alimentos: [
            { nombre: "arroz", precio: 3500, isDisponible: false },
            { nombre: "frijoles", precio: 2500, isDisponible: false }
        ]
    }
}`,
`// Javascript.js
import { tienda } from "./data.js";

const nombreTienda = tienda.nombre;
const insumos = tienda.insumos;
const bebidas = insumos.bebidas;
const bebidasLight = bebidas.light;
const precioAgua = bebidasLight[1].precio;

const nombrebeBebidasLight = [bebidasLight[0].nombre, bebidasLight[1].nombre, bebidasLight[2].nombre];

const isDisponibleJugoAzucarado = 
    bebidas.azucaradas[1].isDisponible;

const productoDosLimpieza = 
    insumos.limpieza.aseo[1];

const alimentosDisponibles ={ 
    arroz: insumos.alimentos[0].isDisponible, 
    frijoles: insumos.alimentos[1].isDisponible 
};
 
console.log("Hay arroz?", alimentosDisponibles.arroz);
console.log(\`Hay frijoles? \${alimentosDisponibles.frijoles}\`);`
        ],
        runway: "En este ejercicio navegamos por una estructura de árbol, practicando cómo extraer propiedades aisladas o cómo construir un nuevo objeto mapeando las propiedades de la estructura original."
    }
];
