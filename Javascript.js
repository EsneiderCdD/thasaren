import { tienda } from "./data.js";

const nombreTienda = tienda.nombre;
const insumos = tienda.insumos;
const bebidas = insumos.bebidas;
const bebidasLight = bebidas.light;
const precioAgua = bebidasLight[1].precio;

const nombrebeBebidasLight = [bebidasLight[0].nombre, bebidasLight[1].nombre, bebidasLight[2].nombre];

const isDisponibleJugoAzucarado = 
    bebidas.azucaradas[1].isDisponible;

const productoDosLimpieza = 
    insumos.limpieza.aseo[1];

const alimentosDisponibles ={ arroz: insumos.alimentos[0].isDisponible, frijoles: insumos.alimentos[1].isDisponible };
 
console.log("Hay arroz?",alimentosDisponibles.arroz);
console.log(`Hay frijoles?${alimentosDisponibles.frijoles}`);
