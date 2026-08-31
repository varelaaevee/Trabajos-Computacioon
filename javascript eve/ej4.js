const readline = require('readline-sync');
let temp = [];
for (let i = 0; i < 3; i++) {
temp[i] = [];
for (let j = 0; j < 3; j++) {
temp[i][j] = readline.questionFloat(`Temp [$
{i}][${j}]: `);
}
}
let max = temp[0][0];
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
if (temp[i][j] > max) max = temp[i][j];
}
}
console.log(`Temperatura máxima: ${max}°C`);