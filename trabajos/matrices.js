
let correctas = 0;
let incorrectas = 0;
let respondidas = [false, false, false, false, false];
let terminado = false;

function comprobarRespuesta(numero, respuesta, correcta, explicacion) {

    if (terminado) {
        alert("El cuestionario terminó. Reinicialo para volver a intentarlo.");
        return;
    }

    if (respondidas[numero - 1]) {
        alert("Ya respondiste esta pregunta, no t hagas el vivo");
        return;
    }

    respondidas[numero - 1] = true;

    if (respuesta === correcta) {
        correctas++;
        alert("¡Respuesta correcta! " + explicacion);
    } else {
        incorrectas++;
        alert("Respuesta incorrecta pou. ");
    }

    actualizarResultados();

    if (correctas + incorrectas === 5) {
        terminado = true;

        let promedio = (correctas / 5) * 100;
        let nota = (correctas / 5) * 10;

        alert(
            "¡Cuestionario terminado! Felicidades lol\n\n" +
            "Correctas: " + correctas + "\n" +
            "Incorrectas: " + incorrectas + "\n" +
            "Promedio: " + promedio + "%\n" +
            "Nota final: " + nota + "/10"
        );
    }
}

function pregunta1(respuesta) {
    comprobarRespuesta(1, respuesta, 'A',
        "Una matriz necesita dos índices para ubicar un dato: uno para la fila y otro para la columna.");
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'B',
        "La palabra Dimension permite establecer el tamaño de la matriz antes de utilizarla.");
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'A',
        "El primer bucle recorre las filas y el bucle interno recorre las columnas.");
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'B',
        "Si una matriz se define como Entero, sus celdas deben guardar números enteros.");
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'A',
        "Los juegos con cuadrículas utilizan filas y columnas, como las matrices.");
}

function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent =
        correctas + incorrectas;
}

function reiniciarCuestionario() {

    if (correctas + incorrectas < 5) {
        alert("Tenés que responder las 5 preguntas antes de reiniciar el cuestionario tramposo JAJAJA.");
        return;
    }

    correctas = 0;
    incorrectas = 0;
    respondidas = [false, false, false, false, false];
    terminado = false;

    actualizarResultados();

    alert("¡Cuestionario reiniciado! Podés comenzar de nuevo.");
}

let matriz = [
    ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],

    ["Matemática", "Lengua", "Historia", "Inglés", "Biología"],

    ["Lengua", "Matemática", "Geografía", "Computación", "Historia"],

    ["Inglés", "Biología", "Matemática", "Lengua", "Geografía"],

    ["Historia", "Computación", "Inglés", "Biología", "Matemática"],

    ["Geografía", "Historia", "Computación", "Matemática", "Lengua"]
];

let tabla = document.getElementById("horario");

for (let fila = 0; fila < matriz.length; fila++) {

    let linea = "<tr>";

    for (let columna = 0; columna < matriz[fila].length; columna++) {

        if (fila == 0) {
            linea = linea + "<th>" + matriz[fila][columna] + "</th>";
        } else {
            linea = linea + "<td>" + matriz[fila][columna] + "</td>";
        }

    }

    linea = linea + "</tr>";

    tabla.innerHTML = tabla.innerHTML + linea;
}

