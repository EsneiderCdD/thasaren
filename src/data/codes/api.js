/* =========================
   API (CONEXIÓN Y RED)
========================= */

export const ejemploFetchGet = `async function cargarUsuarios() {
    const respuesta = await fetch("https://api.ejemplo.com/usuarios");
    const datos = await respuesta.json();
    
    console.log(datos); // Array de usuarios
}

cargarUsuarios();`;

export const ejemploFetchPost = `async function crearUsuario(nuevoUsuario) {
    const respuesta = await fetch("https://api.ejemplo.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoUsuario)
    });

    const resultado = await respuesta.json();
    console.log("Creado:", resultado);
}`;

export const ejemploManejoErrores = `async function peticionSegura() {
    try {
        const respuesta = await fetch("https://api.invalida.com");

        if (!respuesta.ok) {
            throw new Error(\`Error HTTP: \${respuesta.status}\`);
        }

        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        console.error("Fallo en la red:", error.message);
    }
}`;
