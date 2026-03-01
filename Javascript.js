var nombre = "Javascript";

let version = 2024;
let promedioExacto = 6.5;
let granNumero = 9007199254740991n;
console.log(typeof granNumero);
// "bigint"se define con una 'n' al final
let noEsUnNumero = "Texto" / 2;
console.log(noEsUnNumero, typeof noEsUnNumero); // NaN number

const esGenial = true;

impliedGlobal = "No necesito ser declarada"
//impliedGlobal is not defined

let usuario;
console.log(usuario); // undefined
let variable = null;
console.log(variable); // null

var - = "Javascript";
console.log(-);
// Expected identifier but found "-"

let miSuma = function (a, b) {
    return a + b;
};
console.log(miSuma(5, 10));