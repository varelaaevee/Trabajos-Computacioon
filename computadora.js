
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
        alert("Ya respondiste esta pregunta, No podés responder la misma pregunta dos veces.");
        return;
    }

    respondidas[numero - 1] = true;

    if (respuesta === correcta) {
        correctas++;
        alert("¡Respuesta correcta! " + explicacion);
    } else {
        incorrectas++;
        alert("Respuesta incorrecta. Intentá con la siguiente pregunta.");
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
    comprobarRespuesta(1, respuesta, 'A',
        "La CPU procesa datos y ejecuta las instrucciones de los programas."
    );
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'B',
        "La memoria RAM pierde sus datos cuando se apaga la computadora."
    );
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'A',
        "La placa madre conecta los componentes de la computadora."
    );
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'B',
        "El teclado es un periférico de entrada."
    );
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'A',
        "El BIOS o UEFI realiza una comprobación inicial del sistema."
    );
}


function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent = correctas + incorrectas;
}



function reiniciarCuestionario() {

    if (correctas + incorrectas < 5) {
        alert("Tenés que responder las 5 preguntas antes de reiniciar el cuestionario ");
        return;
    }

    correctas = 0;
    incorrectas = 0;
    respondidas = [false, false, false, false, false];
    terminado = false;

    actualizarResultados();

    alert("¡Cuestionario reiniciado! Podés comenzar de nuevo.");
}
