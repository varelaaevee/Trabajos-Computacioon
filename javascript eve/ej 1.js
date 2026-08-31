let matriz = [
[10, 20],
[30, 40]
];
console.log("--- Matriz 2x2 ---");
for (let i = 0; i < matriz.length; i++) {
let filaTexto = "";
for (let j = 0; j < matriz[i].length; j++) {
filaTexto += matriz[i][j] + " ";
}
console.log(filaTexto);
}