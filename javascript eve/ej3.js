const readline = require('readline-sync');
let m = [], suma = 0;
for (let i = 0; i < 3; i++) {
m[i] = [];
for (let j = 0; j < 4; j++) {
m[i][j] = readline.questionInt(`Val [${i}][$
{j}]: `);
suma += m[i][j];
}
}
console.log(`
La suma total es: ${suma}`);