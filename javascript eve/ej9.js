const readline = require('readline-sync');
let precios = [[100, 200, 150, 300], [50, 80, 120,
400]];
let factor = readline.questionFloat("Factor de aumento (ej 1.10): ");
for (let i = 0; i < 2; i++) {
for (let j = 0; j < 4; j++) {
precios[i][j] = Number((precios[i][j] * factor).toFixed(2));
}
}
console.log("--- Precios Actualizados ---");
precios.forEach(fila => console.log(fila.join(" ")));