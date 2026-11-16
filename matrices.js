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
        alert("Ya respondiste esta pregunta.");
        return;
    }

    respondidas[numero - 1] = true;

    if (respuesta === correcta) {
        correctas++;
        alert("¡Respuesta correcta! " + explicacion);
    } else {
        incorrectas++;
        alert("Respuesta incorrecta.  ¡Intentá con la siguiente pregunta!");
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
        "Una matriz organiza datos en filas y columnas."
    );
}

function pregunta2(respuesta) {
    comprobarRespuesta(2, respuesta, 'B', 
        "Dimension permite establecer la cantidad de filas y columnas."
    );
}

function pregunta3(respuesta) {
    comprobarRespuesta(3, respuesta, 'B', 
        "Se usan dos bucles Para: uno para las filas y otro para las columnas."
    );
}

function pregunta4(respuesta) {
    comprobarRespuesta(4, respuesta, 'B', 
        "Los elementos de una matriz tienen el tipo de dato definido."
    );
}

function pregunta5(respuesta) {
    comprobarRespuesta(5, respuesta, 'A', 
        "Un tablero se puede organizar en filas y columnas."
    );
}


function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent = correctas + incorrectas;
}


function reiniciarCuestionario() {

    if (correctas + incorrectas < 5) {
        alert("Tenés que responder las 5 preguntas antes de reiniciar el cuestionario.");
        return;
    }

    correctas = 0;
    incorrectas = 0;
    respondidas = [false, false, false, false, false];
    terminado = false;

    actualizarResultados();

    alert("¡Cuestionario reiniciado! Podés comenzar de nuevo.");
}
