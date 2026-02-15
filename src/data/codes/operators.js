// === OPERADORES ===

export const ejemploAsignacion = `let x = 10;
x += 5; 
console.log(x); // 15

x -= 2; 
console.log(x); // 13`;

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

// Nota: ejemploExponenciacion estaba en el plan pero no lo migré en el paso anterior, lo añado ahora aquí.
export const ejemploExponenciacion = `console.log(2 ** 3); // 8 (2*2*2)`;

export const ejemploComparacion = `// Relacionales
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true`;

export const ejemploIgualdad = `// Estricta (Recomendada)
console.log(5 === "5"); // false (Tipos distintos)
console.log(5 === 5);   // true

// Débil (Evitar)
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
