export const loop = [
    {
        id: 1,
        title: "Contador Ascendente",
        description: "Usa un bucle for para imprimir los números del 1 al 5, cada uno en una línea nueva.",
        code: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
        runway: ""
    },
    {
        id: 2,
        title: "Contador Descendente",
        description: "Usa un bucle for para imprimir los números del 10 al 1, cada uno en una línea nueva.",
        code: `for (let i = 10; i >= 1; i--) {
    console.log(i);
}`,
        runway: ""
    },
    {
        id: 3,
        title: "Tabla de Multiplicar",
        description: "Usa un bucle for para imprimir la tabla de multiplicar del 7, desde 7x1 hasta 7x10.",
        code: `for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
}`,
        runway: ""
    },
    {
        id: 4,
        title: "Suma de Números",
        description: "Usa un bucle for para calcular la suma de todos los números desde 1 hasta 100.",
        code: `let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);`,
        runway: ""
    },
    {
        id: 5,
        title: "Contador de Vocales",
        description: "Usa un bucle for para contar cuántas vocales (a, e, i, o, u) hay en la palabra 'javascript'.",
        code: `const palabra = "javascript";
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 6,
        title: "Contador de Números Pares",
        description: "Usa un bucle for para contar cuántos números pares hay entre 1 y 20.",
        code: `let contador = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 7,
        title: "Contador de Números Impares",
        description: "Usa un bucle for para contar cuántos números impares hay entre 1 y 20.",
        code: `let contador = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 8,
        title: "Contador de Números Primos",
        description: "Usa un bucle for para contar cuántos números primos hay entre 1 y 20.",
        code: `let contador = 0;
for (let i = 1; i <= 20; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 9,
        title: "Contador de Números Compuestos",
        description: "Usa un bucle for para contar cuántos números compuestos hay entre 1 y 20.",
        code: `let contador = 0;
for (let i = 1; i <= 20; i++) {
    let esCompuesto = false;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esCompuesto = true;
            break;
        }
    }
    if (esCompuesto) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 10,
        title: "Contador de Números Perfectos",
        description: "Usa un bucle for para contar cuántos números perfectos hay entre 1 y 1000.",
        code: `let contador = 0;
for (let i = 1; i <= 1000; i++) {
    let suma = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            suma += j;
        }
    }
    if (suma === i) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 11,
        title: "Contador de Números Amigos",
        description: "Usa un bucle for para contar cuántos números amigos hay entre 1 y 1000.",
        code: `let contador = 0;
for (let i = 1; i <= 1000; i++) {
    let suma = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            suma += j;
        }
    }
    if (suma === i) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 12,
        title: "Contador de Números Amigos",
        description: "Usa un bucle for para contar cuántos números amigos hay entre 1 y 1000.",
        code: `let contador = 0;
for (let i = 1; i <= 1000; i++) {
    let suma = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            suma += j;
        }
    }
    if (suma === i) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 13,
        title: "Contador de Números Amigos",
        description: "Usa un bucle for para contar cuántos números amigos hay entre 1 y 1000.",
        code: `let contador = 0;
for (let i = 1; i <= 1000; i++) {
    let suma = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            suma += j;
        }
    }
    if (suma === i) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    },
    {
        id: 14,
        title: "Contador de Números Amigos",
        description: "Usa un bucle for para contar cuántos números amigos hay entre 1 y 1000.",
        code: `let contador = 0;
for (let i = 1; i <= 1000; i++) {
    let suma = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            suma += j;
        }
    }
    if (suma === i) {
        contador++;
    }
}
console.log(contador);`,
        runway: ""
    }
]