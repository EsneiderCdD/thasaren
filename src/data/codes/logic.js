/* =========================
   LÓGICA (CONTROL DE FLUJO)
========================= */

export const ejemploIf = `let saldo = 100;

if (saldo >= 500) {
    console.log("Plan Premium");
} else if (saldo > 0) {
    console.log("Plan Básico");
} else {
    console.log("Sin fondos");
}`;

export const ejemploTernario = `const edad = 20;

const tipo = edad >= 18 ? "Adulto" : "Menor";
// (Condición) ? (Si Verdadero) : (Si Falso)

console.log(tipo); // "Adulto"`;

export const ejemploSwitch = `const rol = "admin";

switch (rol) {
    case "admin":
        console.log("Acceso total");
        break;
    case "editor":
        console.log("Puede editar");
        break;
    default:
        console.log("Solo lectura");
}`;

export const ejemploShortCircuit = `// && (AND): Retorna el primer falsy o el último valor
const usuario = { nombre: "Ana" };
const saludo = usuario && "Hola " + usuario.nombre;
// "Hola Ana"

// || (OR): Retorna el primer truthy (valor por defecto)
const config = null;
const puerto = config || 3000;
// 3000`;
