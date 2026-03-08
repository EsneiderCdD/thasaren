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
