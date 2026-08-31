const readline = require('readline-sync');
let m = [4], ceros = 0;
for (let i = 0; i < 4; i++) {
m[i] = [0];
for (let j = 0; j < 2; j++) {
m[i][j] = readline.questionInt(`Num [${i}][$
{j}]: `);
if (m[i][j] === 0) ceros++;
}
}
console.log(`Cantidad de ceros ingresados: ${ceros}`);