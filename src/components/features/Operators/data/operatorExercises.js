export const operatorExercises = [
    {
        id: 1,
        title: "Comprensión y Flujo de Operadores",
        description: "",
        code: `let coercionResta = false - 5;
console.log(coercionResta, typeof coercionResta); 
// -5 number, 0 es Falsy

let coercionSuma = true + 5;
console.log(coercionSuma, typeof coercionSuma); 
// 6 number, todo numero diferente de 0 es truthy

let truthyCheck = !5;
console.log(truthyCheck, typeof truthyCheck); 
// false boolean

let precedenciaLogica = true || false && false;
console.log(precedenciaLogica); 
// true, primero se resuelve && luego ||

let aritmeticaVsComparacion = 10 + 5 === 20 - 5 && 5 * 2 < 20;
console.log(aritmeticaVsComparacion); 
// true, Aritmética -> Comparación -> Lógica

let negacionLogica = !true || "JS" === "JS";
console.log(negacionLogica); 
// true, ! solo afecta al valor inmediato

let desafioFinal = (5 === "5" || 10 > 5) && !false && 10 % 2 === 0;
console.log(desafioFinal); 
// true, () agrupan y fuerzan el orden`,
        runway: ""
    }
];
