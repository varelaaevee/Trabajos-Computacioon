
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
    comprobarRespuesta(
        1, respuesta, 'A',
        "CSS separa el contenido HTML del diseño visual de la página."
    );
}

function pregunta2(respuesta) {
    comprobarRespuesta(
        2, respuesta, 'B',
        "Una clase se puede utilizar en varios elementos para compartir el mismo diseño."
    );
}

function pregunta3(respuesta) {
    comprobarRespuesta(
        3, respuesta, 'A',
        "Padding es el espacio interior y margin es el espacio exterior de un elemento."
    );
}

function pregunta4(respuesta) {
    comprobarRespuesta(
        4, respuesta, 'B',
        "La propiedad background-color permite cambiar el color de fondo."
    );
}

function pregunta5(respuesta) {
    comprobarRespuesta(
        5, respuesta, 'B',
        "Display flex activa Flexbox para organizar y distribuir elementos."
    );
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
