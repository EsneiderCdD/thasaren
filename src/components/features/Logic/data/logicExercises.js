export const logicExercises = [
    {
        id: 1,
        title: "Control de Acceso (Tipado)",
        description: "Un Usuario para acceder tiene que tener exactamente 18 o mas años y revisar que el numero no sea un string. Ademas requiere estar registrado o tener una invitacion especial. Imprime por consola si se puede acceder o no.",
        code: `const edad = "20";
const estaRegistrado = true;
const tieneInvitacion = false;

// Determina si puede acceder (debe ser número, mayor de 18 y cumplir condición de registro/invitación)`,
        runway: `const esAdulto = typeof edad === 'number' && edad >= 18;
const puedeAcceder = esAdulto && (estaRegistrado || tieneInvitacion);

console.log(puedeAcceder); // false (edad es string)`
    },
    {
        id: 2,
        title: "Calculadora de Descuentos",
        description: "Un cliente compra un producto de 150 unidades. Si compra más de 10 unidades aplica un 10% de descuento. Si es cliente 'Premium' aplica un 20%. El descuento no es acumulable (gana el mayor). Imprime el precio final.",
        code: `const precioBase = 150;
const cantidad = 12;
const esPremium = false;

// Calcula el precio final aplicando el descuento correspondiente`,
        runway: `let descuento = 0;
if (esPremium) {
    descuento = 0.20;
} else if (cantidad > 10) {
    descuento = 0.10;
}

const total = (precioBase * cantidad) * (1 - descuento);
console.log(total); // 1620`
    },
    {
        id: 3,
        title: "Semáforo de Operaciones",
        description: "Recibes una variable 'accion' con valores: 'CREAR', 'EDITAR' o 'ELIMINAR'. Usa un switch para imprimir: 'Guardando...' para crear, 'Actualizando...' para editar y 'Borrando...' para eliminar. Cualquier otro valor imprime 'Acción no permitida'.",
        code: `const accion = "EDITAR";

// Implementa la lógica de respuesta según la acción`,
        runway: `switch (accion) {
    case 'CREAR': console.log("Guardando..."); break;
    case 'EDITAR': console.log("Actualizando..."); break;
    case 'ELIMINAR': console.log("Borrando..."); break;
    default: console.log("Acción no permitida");
}`
    },
    {
        id: 4,
        title: "Validador de Rango y Paridad",
        description: "Verifica si un número está dentro del rango de 10 a 50 (inclusive) y si además es un número par. Imprime true solo si se cumplen ambas condiciones.",
        code: `const numero = 24;

// Comprueba rango [10-50] y que sea par`,
        runway: `const enRango = numero >= 10 && numero <= 50;
const esPar = numero % 2 === 0;

console.log(enRango && esPar); // true`
    },
    {
        id: 5,
        title: "Identidad por Defecto (Short-Circuit)",
        description: "Tienes un nombre de usuario que puede ser null o undefined. Si existe, úsalo. Si no existe, verifica si tiene un apodo. Si tampoco hay apodo, usa 'Invitado'. Hazlo en una sola línea.",
        code: `const nombre = null;
const apodo = "Programmer99";

// Asigna a 'resultado' el primer valor válido disponible`,
        runway: `const resultado = nombre || apodo || "Invitado";
console.log(resultado); // "Programmer99"`
    },
    {
        id: 6,
        title: "Suscripción Dinámica",
        description: "Un contenido es 'premium'. Solo pueden verlo usuarios con plan 'PRO' que tengan la suscripción activa, O cualquier usuario que tenga el rol de 'ADMIN' (aunque no esté activo). Imprime si puede ver el contenido.",
        code: `const plan = "FREE";
const estaActivo = true;
const esAdmin = false;

// Lógica de visibilidad`,
        runway: `const puedeVer = esAdmin || (plan === 'PRO' && estaActivo);
console.log(puedeVer); // false`
    },
    {
        id: 7,
        title: "Aprobación de Crédito",
        description: "Para un crédito necesitas: ingresos > 2000 y (ser mayor de 25 años O tener un aval). Además, si tienes deudas pendientes, el crédito se rechaza automáticamente sin importar lo demás.",
        code: `const ingresos = 2500;
const edad = 22;
const tieneAval = true;
const tieneDeudas = false;

// Determina si el crédito es aprobado`,
        runway: `const cumpleRequisitos = ingresos > 2000 && (edad > 25 || tieneAval);
const creditoAprobado = cumpleRequisitos && !tieneDeudas;

console.log(creditoAprobado); // true`
    },
    {
        id: 8,
        title: "Guard Clauses: Flujo de Compra",
        description: "Simula el proceso de pago. Si el carrito está vacío, imprime 'Carrito vacío'. Si el usuario no está logueado, imprime 'Inicie sesión'. Si no hay saldo, imprime 'Saldo insuficiente'. Si todo está bien, imprime 'Compra exitosa'. Usa el patrón de salida temprana.",
        code: `const carritoVacio = false;
const estaLogueado = true;
const tieneSaldo = false;

// Aplica Guard Clauses para validar el proceso`,
        runway: `if (carritoVacio) return console.log("Carrito vacío");
if (!estaLogueado) return console.log("Inicie sesión");
if (!tieneSaldo) return console.log("Saldo insuficiente");

console.log("Compra exitosa");`
    },
    {
        id: 9,
        title: "Sistema de Alarma Inteligente",
        description: "La alarma suena si: (el sensor solar detecta movimiento Y es de noche) O si se activa el sensor manual de emergencia. Sin embargo, si el 'modo_vacaciones' está apagado, el sensor solar nunca dispara la alarma.",
        code: `const sensorMovimiento = true;
const esDeNoche = true;
const sensorManual = false;
const modoVacaciones = false;

// Determina si suena la alarma`,
        runway: `const activacionSolar = sensorMovimiento && esDeNoche && modoVacaciones;
const suenaAlarma = activacionSolar || sensorManual;

console.log(suenaAlarma); // false`
    },
    {
        id: 10,
        title: "Calculadora de Impuestos Estricta",
        description: "Calcula el impuesto de un salario. Si no es un número o es negativo, devuelve 'Error'. Si es < 1000 es exento (0). Entre 1000 y 3000 paga 10%. Más de 3000 paga 20%. Si tiene hijos, se le descuenta un 5% fijo sobre el impuesto calculado.",
        code: `const salario = 3500;
const tieneHijos = true;

// Reglas: <1000: 0% | 1k-3k: 10% | >3k: 20%. Si hijos: -5% al impuesto total.`,
        runway: `if (typeof salario !== 'number' || salario < 0) return console.log("Error");

let impuesto = 0;
if (salario > 3000) {
    impuesto = salario * 0.20;
} else if (salario >= 1000) {
    impuesto = salario * 0.10;
}

if (tieneHijos) {
    impuesto = impuesto * 0.95;
}

console.log(impuesto); // 665`
    }
];