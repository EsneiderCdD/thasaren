/* =========================
   CLASES (POO)
========================= */

export const ejemploClase = `class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
}

// Instanciar (Crear un objeto desde el molde)
const user1 = new Usuario("Ana", "ana@test.com");
console.log(user1.nombre); // "Ana"`;

export const ejemploMetodos = `class Contador {
    constructor() {
        this.valor = 0;
    }

    incrementar() {
        this.valor++;
        console.log("Valor:", this.valor);
    }
}

const miContador = new Contador();
miContador.incrementar(); // Valor: 1`;

export const ejemploHerencia = `class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return "Hola, soy " + this.nombre;
    }
}

// Herencia: Empleado expande a Persona
class Empleado extends Persona {
    constructor(nombre, cargo) {
        super(nombre); // Llama al constructor padre
        this.cargo = cargo;
    }

    // Sobrescribir o extender comportamiento
    informar() {
        return \`\${this.saludar()} y trabajo como \${this.cargo}\`;
    }
}

const dev = new Empleado("Esneider", "Developer");
console.log(dev.informar());`;
