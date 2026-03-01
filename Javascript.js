var nombre = "Javascript";
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
// Expected identifier but found "-"
