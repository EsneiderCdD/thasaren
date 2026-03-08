const miColeccion = ["string", 123, true, null, undefined, {nombre:"juan"}, [1,2,3]];
const saludar = function() { return "hola"};

miColeccion.push({id: 99, status: "nuevo"});
miColeccion.pop();
miColeccion.push(function miformula(valor){
    return valor;
});

console.log(miColeccion[7]("Magia"));
console.log(miColeccion.length);

miColeccion.unshift("Hello World");
console.log(miColeccion);

miColeccion