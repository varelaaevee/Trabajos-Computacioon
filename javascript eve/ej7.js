const readline = require('readline-sync');
// Carga de matriz 3x4 m...
let buscado = readline.questionInt("Ingrese número a buscar: ");
let hallado = false;
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 4; j++) {
if (m[i][j] === buscado) {
console.log(` Tesoro encontrado en Fila [${i}], Columna [${j}]`); hallado = true;
}
}
}
if (!hallado) console.log(" El valor no existe en la matriz.");