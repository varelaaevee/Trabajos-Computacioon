
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
        alert("Respuesta incorrecta pou.");
    }

    actualizarResultados();

    if (correctas + incorrectas === 5) {
        terminado = true;

        let promedio = (correctas / 5) * 100;
        let nota = (correctas / 5) * 10;

        alert(
            "¡Cuestionario terminado!\n\n" +
            "Correctas: " + correctas + "\n" +
            "Incorrectas: " + incorrectas + "\n" +
            "Promedio: " + promedio + "%\n" +
            "Nota final: " + nota + "/10"
        );
    }
}

function pregunta1(respuesta) {
    comprobarRespuesta(1, respuesta, 'B',
        "El router decide la mejor ruta para enviar los datos entre tu red e Internet.");
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'A',
        "LAN significa Red de Área Local y WAN significa Red de Área Amplia. Internet es un ejemplo de WAN.");
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'B',
        "El módem traduce las señales para que los dispositivos puedan comunicarse con Internet.");
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'A',
        "La dirección IP funciona como una dirección que permite identificar hacia dónde deben viajar los datos.");
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'B',
        "Las redes permiten compartir archivos, impresoras y conexión a Internet.");
}

function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent = correctas + incorrectas;
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
