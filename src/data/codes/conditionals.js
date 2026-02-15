// === CONDICIONALES ===

export const ejemploIf = `let saldo = 100;

if (saldo >= 500) {
    console.log("Premium");
} else if (saldo > 0) {
    console.log("Básico"); // Se ejecuta esto
} else {
    console.log("Sin fondos");
}`;



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



export const ejemploGuardClauseProblema = `// FORMA TRADICIONAL (A evitar)
function procesar(usuario) {
  if (usuario) {                 
    if (usuario.activo) {        
      if (usuario.saldo > 0) {   
        // ... Lógica real aquí ...
        console.log("Procesando...");
      }
    }
  }
}`;

export const ejemploGuardClauseSolucion = `// FORMA CLEAN (Guard Clause)
function procesar(usuario) {
  // 1. Validar lo malo primero
  if (!usuario) return;
  if (!usuario.activo) return; 
  if (usuario.saldo <= 0) return; 

  // 2. Camino Feliz (Happy Path)
  console.log("Procesando...");
}`;
