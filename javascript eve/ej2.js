const readline = require('readline-sync');
let ventas = [3,3];
for (let i = 0; i < 3; i++) {
ventas[i] = [0];
for (let j = 0; j < 3; j++) {
ventas[i][j] = readline.questionIng
(`Venta Negocio ${i+1}, Dia ${j+1}: `);
}
}
console.log("--- Matriz de Ventas ---");
for (let i = 0; i < 3; i++) {
console.log(ventas[i].join(" "));
}