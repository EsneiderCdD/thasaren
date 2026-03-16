// Arbol de datos
export const tienda = {
    nombre: "mi tienda",
    direcccion: "calle falsa 123",
    insumos: {
        bebidas: {
            light: [
                { nombre: "coca-cola", precio: 3000, isDisponible: false },
                { nombre: "agua", precio: 1000, isDisponible: true },
                { nombre: "jugo", precio: 2000, isDisponible: true }
            ],
            azucaradas: [
                { nombre: "coca-cola", precio: 3500, isDisponible: false },
                { nombre: "jugo", precio: 2500, isDisponible: false }
            ]
        },
        limpieza: {
            aseo: [
                { nombre: "cloro", precio: 3500, isDisponible: false },
                { nombre: "detergente", precio: 2500, isDisponible: false }
            ]
        },
        alimentos: [
            { nombre: "arroz", precio: 3500, isDisponible: false },
            { nombre: "frijoles", precio: 2500, isDisponible: false }
        ]
    }
}