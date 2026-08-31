let m = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[10, 11, 12]
];
// Intercambio directo de arreglos en JS
let aux = m[0];
m[0] = m[3];
m[3] = aux;
console.log("--- Matriz con Filas Intercambiadas ---");
m.forEach(fila => console.log(fila.join(" ")));