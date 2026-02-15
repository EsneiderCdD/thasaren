/* =========================
   CICLOS (BUCLES)
========================= */

export const ejemploFor = `for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}
// Imprime del 0 al 4`;

export const ejemploWhile = `let energia = 3;

while (energia > 0) {
    console.log("Trabajando...");
    energia--;
}
console.log("Descansando");`;

export const ejemploForOf = `const frutas = ["Manzana", "Pera", "Uva"];

for (const fruta of frutas) {
    console.log("Procesando:", fruta);
}`;

export const ejemploBreakContinue = `for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // Salta esta iteración
    if (i === 5) break;    // Termina el bucle
    console.log(i);
}
// Imprime: 0, 1, 3, 4`;
