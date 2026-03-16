export const ejemploAsignacion = `let x;
x = "casa";
console.log(x); //casa`;

export const ejemploAsignacionCompuesta = `let n = 10;
n += 5; // n = n + 5 (15)
n -= 2; // n = n - 2 (13)
console.log(n); // 13`;

export const ejemploAritmetica = `console.log(10 + 5); // 15
console.log(10 - 2); // 8
console.log(10 * 2); // 20
console.log(10 / 2); // 5`;

export const ejemploModulo = `console.log(10 % 3); // 1 (Sobra 1)
console.log(10 % 2); // 0 (Es par)`;

export const ejemploUnarios = `let n = 5;
n++; 
console.log(n); // 6

n--; 
console.log(n); // 5`;

export const ejemploExponenciacion = `console.log(2 ** 3); // 8 (2*2*2)`;

export const ejemploComparacion = `console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true`;

export const ejemploIgualdad = `console.log(5 === "5"); // false (Tipos distintos)
console.log(5 === 5);   // true
console.log(5 == "5");  // true (Conversión implícita)`;

export const ejemploLogicos = `// AND (&&) - Ambos deben ser true
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||) - Al menos uno true
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - Invierte el valor
console.log(!true);  // false
console.log(!false); // true`;

export const ejemploShortCircuit = `const usuario = { nombre: "Ana" };

// AND (&&): Ejecuta si existe
usuario && console.log("Hola " + usuario.nombre);

// OR (||): Valor por defecto
const puerto = null || 3000;
console.log(puerto); // 3000`;

export const ejemploTernario = `const edad = 20;
// Sintaxis: Condición ? ValorTrue : ValorFalse
const tipo = edad >= 18 ? "Adulto" : "Menor";

console.log(tipo); // "Adulto"`;
