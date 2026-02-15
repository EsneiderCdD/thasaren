/* =========================
   ASINCRONÍA (TIEMPO Y FUTURO)
========================= */

export const ejemploSetTimeout = `console.log("Inicio");

setTimeout(() => {
    console.log("Esto aparece 2 segundos después");
}, 2000);

console.log("Fin (Se ejecuta antes del timeout)");`;

export const ejemploPromesa = `const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("Operación completada");
    } else {
        reject("Error detectado");
    }
});

promesa
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));`;

export const ejemploAsyncAwait = `async function obtenerDatos() {
    try {
        const resultado = await promesa; // Espera aquí
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

obtenerDatos();`;
