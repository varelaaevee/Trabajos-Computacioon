let correctas = 0;
let incorrectas = 0;
let respondidas = [false, false, false, false, false, false, false, false];
let terminado = false;

function comprobarRespuesta(numero, respuesta, correcta, explicacion) {
    if (terminado) {
        alert("El cuestionario terminó. Reinicialo para volver a intentarlo.");
        return;
    }

    if (respondidas[numero - 1]) {
        alert("Ya respondiste esta pregunta.");
        return;
    }

    respondidas[numero - 1] = true;

    if (respuesta === correcta) {
        correctas++;
        alert("¡Respuesta correcta! " + explicacion);
    } else {
        incorrectas++;
        alert("Respuesta incorrecta. ¡Seguí intentando!");
    }

    actualizarResultados();

    if (correctas + incorrectas === 8) {
        terminado = true;
        let promedio = (correctas / 8) * 100;
        let nota = (correctas / 8) * 10;
        alert("¡Cuestionario terminado!\n\nCorrectas: " + correctas + "\nIncorrectas: " + incorrectas + "\nPromedio: " + promedio + "%\nNota final: " + nota + "/10");
    }
}

function pregunta1(respuesta) { 
    comprobarRespuesta(1, respuesta, 'B', 
    "Un algoritmo tiene pasos ordenados para resolver una tarea."); 
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'A', 
    "Una condición permite elegir una acción según si se cumple o no."); 
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'B',
    "Un bucle permite repetir instrucciones."); 
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'A',
    "Un diagrama de flujo representa los pasos de un algoritmo.");
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'B',
    "Un error de sintaxis ocurre cuando una instrucción está mal escrita."); 
}

function pregunta6(respuesta) {
    comprobarRespuesta(6, respuesta, 'A',
    "101 en binario equivale a 5 en decimal."); 
}

function pregunta7(respuesta) {
    comprobarRespuesta(7, respuesta, 'B', 
    "110 en binario equivale a 6 en decimal."); 
}

function pregunta8(respuesta) {
    comprobarRespuesta(8, respuesta, 'A',
    "1000 en binario equivale a 8 en decimal."); 
}

function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent = correctas + incorrectas;
}

function reiniciarCuestionario() {
    if (correctas + incorrectas < 8) {
        alert("Tenés que responder las 8 preguntas antes de reiniciar el cuestionario.");
        return;
    }
    correctas = 0;
    incorrectas = 0;
    respondidas = [false, false, false, false, false, false, false, false];
    terminado = false;
    actualizarResultados();
    alert("¡Cuestionario reiniciado! Podés comenzar de nuevo.");
}
