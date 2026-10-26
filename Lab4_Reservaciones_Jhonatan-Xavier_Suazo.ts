
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// Reservaciones iniciales
let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Maria", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "Jose", personas: 5, zona: "Interior" },
    { id: 4, cliente: "Ana", personas: 7, zona: "Terraza" }
];

// Funcion para registrar reservaciones
function registrarReservacion(lista: Reservacion[], nueva: Reservacion): void {
    lista.push(nueva);
}

// Registrar una reservacion normal al final
registrarReservacion(reservaciones, {
    id: 5,
    cliente: "Pedro",
    personas: 3,
    zona: "Interior"
});

// Registrar una reservacion prioritaria al inicio
reservaciones.unshift({
    id: 6,
    cliente: "Sofia",
    personas: 8,
    zona: "Terraza"
});

console.log("Lista antes de atender:");
console.log(reservaciones);

// Atender la primera reservacion
let atendida: Reservacion | undefined = reservaciones.shift();

if (atendida !== undefined) {
    console.log("Reservacion atendida:");
    console.log("Cliente:", atendida.cliente);
    console.log("Personas:", atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

// Buscar por identificador
let idBuscar: number = 2;
let encontrada: Reservacion | undefined = reservaciones.find(
    (r: Reservacion): boolean => r.id === idBuscar
);

if (encontrada !== undefined) {
    console.log("Reservacion encontrada:");
    console.log(encontrada);
} else {
    console.log("No se encontro la reservacion con ID:", idBuscar);
}

// Demostrar una busqueda que no existe
let idNoExiste: number = 10;
let noEncontrada: Reservacion | undefined = reservaciones.find(
    (r: Reservacion): boolean => r.id === idNoExiste
);

if (noEncontrada !== undefined) {
    console.log(noEncontrada);
} else {
    console.log("No se encontro la reservacion con ID:", idNoExiste);
}

// Filtrar las reservaciones de terraza con 5 o mas personas
let cantidadAntes: number = reservaciones.length;

let filtro: Reservacion[] = reservaciones.filter(
    (r: Reservacion): boolean => r.zona === "Terraza" && r.personas >= 5
);

console.log("Reservaciones pendientes de terraza con 5 o mas personas:");
if (filtro.length > 0) {
    console.log(filtro);
} else {
    console.log("No hay reservaciones que cumplan las condiciones.");
}

// Cantidad de reservaciones despues del filtro
let cantidadDespues: number = reservaciones.length;

console.log("Cantidad original antes de filtrar:", cantidadAntes);
console.log("Cantidad despues de filtrar:", cantidadDespues);
console.log("Cantidad de coincidencias del filtro:", filtro.length);

// Comprobar el estado final
console.log("Reservaciones pendientes al final:");
console.log(reservaciones);
console.log("Total de reservaciones pendientes:", reservaciones.length);

// Ejecutar la funcion con un arreglo vacio para probar otra situacion
let listaPrueba: Reservacion[] = [];

registrarReservacion(listaPrueba, {
    id: 7,
    cliente: "Luis",
    personas: 4,
    zona: "Interior"
});

console.log("Lista de prueba despues de registrar:");
console.log(listaPrueba);
