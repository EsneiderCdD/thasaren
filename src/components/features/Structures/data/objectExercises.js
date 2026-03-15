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
    }
];
