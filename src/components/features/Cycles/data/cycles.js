
// === DEFINICION Y WHILE ===

export const definicionBucle = `// Repite instrucciones mientras se cumpla "i < 5"
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}`;

export const bucleWhile = `let contador = 0;

// Evalúa ANTES de ejecutar
while (contador < 3) {
    console.log(contador);
    contador++;
}
// Salida: 0, 1, 2`;

export const bucleDoWhile = `let contador = 5;

// Ejecuta al menos UNA vez, luego evalúa
do {
    console.log(contador); // Imprime 5
    contador++;
} while (contador < 3); // Condición falsa, se detiene`;


// === BUCLES TIPO FOR ===

export const bucleFor = `// (Inicio; Condición; Actualización)
for (let i = 1; i <= 3; i++) {
    console.log("Iteración " + i);
}`;

export const bucleForIn = `const persona = { nombre: "Ana", edad: 25 };

// Itera sobre las CLAVES (Keys) de un Objeto
for (let clave in persona) {
    console.log(clave, persona[clave]);
    // "nombre", "Ana"
    // "edad", 25
}`;

export const bucleForOf = `const frutas = ["Manzana", "Pera"];

// Itera sobre los VALORES de un Iterable (Array, String)
for (let fruta of frutas) {
    console.log(fruta);
}
// "Manzana"
// "Pera"`;


// === CONTROL DE CICLOS ===

export const breakContinue = `for (let i = 0; i < 10; i++) {
    
    if (i === 2) continue; // Salta esta vuelta (No imprime 2)
    
    if (i === 5) break;    // Rompe y termina el bucle (No llega a 5)

    console.log(i); 
}
// Salida: 0, 1, 3, 4`;
