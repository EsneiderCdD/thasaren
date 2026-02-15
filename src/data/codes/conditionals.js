// === CONDICIONALES ===

export const ejemploIf = `let saldo = 100;

if (saldo >= 500) {
    console.log("Premium");
} else if (saldo > 0) {
    console.log("Básico"); // Se ejecuta esto
} else {
    console.log("Sin fondos");
}`;

export const ejemploTernario = `const edad = 20;
// Sintaxis: Condición ? ValorTrue : ValorFalse
const tipo = edad >= 18 ? "Adulto" : "Menor";

console.log(tipo); // "Adulto"`;

export const ejemploSwitch = `const rol = "admin";

switch (rol) {
    case "admin":
        console.log("Acceso total");
        break;
    case "editor":
        console.log("Edición");
        break;
    default:
        console.log("Lectura");
}`;

export const ejemploShortCircuit = `const usuario = { nombre: "Ana" };

// AND (&&): Ejecuta si existe
usuario && console.log("Hola " + usuario.nombre);

// OR (||): Valor por defecto
const puerto = null || 3000;
console.log(puerto); // 3000`;

export const ejemploGuardClause = `function procesar(usuario) {
    // Early Return: Validar lo malo primero
    if (!usuario) return;
    if (!usuario.activo) return;

    // Camino feliz
    console.log("Procesando...");
}

procesar({ activo: true }); // "Procesando..."`;
