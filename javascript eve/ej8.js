let m = [[2, 5, 8], [3, 7, 4], [10, 11, 6]];
let pares = 0, impares = 0;
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
if (m[i][j] % 2 === 0) {
pares++;
} else {
impares++;
}
}
}
console.log(`Pares: ${pares} | Impares: ${impares}`);