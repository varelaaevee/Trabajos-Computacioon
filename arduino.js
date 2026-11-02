
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
        "Arduino combina placas de circuitos económicas y software fácil de usar para crear inventos, robots y sistemas automáticos.");
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'A',
        "Arduino Uno es muy utilizado por su tamaño, cantidad de pines y facilidad de conexión.");
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'B',
        "Tinkercad permite simular circuitos y componentes electrónicos de forma visual.");
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'A',
        "Se recomienda usar negro para GND y rojo para VCC para mantener el orden de las conexiones.");
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'B',
        "El sitio guarda el progreso automáticamente en el perfil de usuario.");
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
