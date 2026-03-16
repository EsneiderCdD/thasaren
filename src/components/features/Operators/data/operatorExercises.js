export const operatorExercises = [
    {
        id: 1,
        title: "Jerarquía de Operaciones (PEMDAS)",
        description: "El orden en que escribes las operaciones determina el resultado. JavaScript siempre resuelve primero paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.",
        code: `let operacionCompleja = (10 + 5) * 2 ** 3 / (4 - 2);
// 1. Paréntesis: (15) * 2 ** 3 / (2)
// 2. Exponentes: 15 * 8 / 2
// 3. Mult/Div: 60

console.log(operacionCompleja); // 60`,
        runway: "Recuerda: Paréntesis > Potencias > Multiplicación/División > Suma/Resta."
    },
    {
        id: 2,
        title: "El Objeto Math",
        description: "Math es una herramienta nativa para operaciones que van más allá de lo básico, como raíces, redondeos y trigonometría.",
        code: `let radio = 5;
let areaCirculo = Math.PI * Math.pow(radio, 2); 
console.log(areaCirculo); // 78.5398...

// Redondeos
console.log(Math.round(areaCirculo)); // 79
console.log(Math.floor(areaCirculo)); // 78
console.log(Math.ceil(areaCirculo));  // 79

// Funciones útiles
console.log(Math.sqrt(144)); // 12 (Raíz)
console.log(Math.abs(-50));  // 50 (Absoluto)`,
        runway: "Usa Math.round para el más cercano, floor para abajo y ceil para arriba."
    }
];
