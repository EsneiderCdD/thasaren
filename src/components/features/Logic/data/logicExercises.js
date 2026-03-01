export const logicExercises = [
    {
        id: 1,
        title: "Exploración de Variables y Tipos",
        description: "",
        code: `var nombre = "Javascript";
let version = 2024;
let promedioExacto = 6.5;
let granNumero = 9007199254740991n; 
// BigInt se define con una 'n' al final
console.log(typeof granNumero); 
// "bigint"

let noEsUnNumero = "Texto" / 2;
console.log(noEsUnNumero); 
// NaN
console.log(typeof noEsUnNumero);
// "number"

const esGenial = true;
impliedGlobal = "No necesito ser declarada"
//impliedGlobal is not defined

let usuario;
console.log(usuario);
// undefined

let variable = null;
console.log(variable);
// null

var - = "Javascript";
//palabras reservadas no sirven para declarar 
console.log(-);
// Expected identifier but found "-"`,
        runway: ""
    },
    {
        id: 2,
        title: "Tipos de Datos Básicos",
        description: "En este ejercicio, crea variables que representen un texto (string), un número entero (number) y un valor lógico (boolean).",
        code: `let usuario = "Aprendiz";
let ejerciciosCompletados = 5;
let estaAprendiendo = true;`,
        runway: "Los strings van entre comillas, los números no, y los booleanos son true o false."
    },
    {
        id: 3,
        title: "Enteros y Decimales",
        description: "JavaScript no diferencia entre tipos de números enteros y decimales, todos son 'number'. Crea uno de cada uno.",
        code: `let puntuacionReferencia = 100;
let promedioExacto = 85.5;`,
        runway: "Usa el punto (.) para los decimales."
    },
    {
        id: 4,
        title: "El Operador typeof",
        description: "A veces no sabemos qué hay dentro de una variable. El operador 'typeof' nos permite interrogar al dato sobre su naturaleza.",
        code: `let misterio = "42";
console.log(typeof misterio); // "string"`,
        runway: "Agrega console.log(typeof ...) para ver el resultado en la consola del navegador."
    },
    {
        id: 5,
        title: "Nombres Prohibidos (Errores)",
        description: "¿Qué sucede si intentamos declarar una variable usando un símbolo reservado o un nombre inválido? Experimenta con el siguiente código.",
        code: `// Intenta ejecutar esto y observa el error en consola
let ( = "Error"; // Los paréntesis son para funciones o agrupaciones`,
        runway: "JavaScript te dará un 'SyntaxError' porque no puedes usar ( como nombre de variable."
    },
    {
        id: 6,
        title: "Interacción con el Usuario",
        description: "Además de la consola, podemos interactuar con el usuario mediante ventanas emergentes. Prueba el comando 'alert'.",
        code: `let mensaje = "¡Hola, estás aprendiendo Lógica!";
alert(mensaje);`,
        runway: "El comando alert() detiene la ejecución del código hasta que el usuario cierra la ventana."
    }
];