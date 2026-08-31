const readline = require('readline-sync');
let gastos = []; // 
for (let j = 0; j < 3; j++) {
let totalMes = 0;
for (let i = 0; i < 4; i++) {
totalMes += gastos[i][j];
}
console.log(`Total gastado en Mes ${j + 1}: $$
{totalMes}`);
}