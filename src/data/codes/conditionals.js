// === CONDICIONALES ===

// 1. IF
export const ejemploIf = `let bateria = 15;

if (bateria < 20) {
    console.log("⚠️ Batería baja");
}`;

// 2. ELSE IF
export const ejemploElseIf = `let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
}`;

// 3. ELSE
export const ejemploElse = `let estaLloviendo = false;

if (estaLloviendo) {
    console.log("Lleva paraguas");
} else {
    console.log("Disfruta el día");
}`;

// 4. SWITCH
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
