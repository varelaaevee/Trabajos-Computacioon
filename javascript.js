

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
        alert("Ya respondiste esta pregunta. No podés responder la misma pregunta dos veces.");
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
    comprobarRespuesta(1, respuesta, 'B',
        "JavaScript permite agregar interactividad a una página web."
    );
}

function pregunta2(respuesta) {
    comprobarRespuesta( 2,respuesta, 'B',
        "El DOM permite que JavaScript interactúe con los elementos HTML."
    );
}

function pregunta3(respuesta) {
    comprobarRespuesta(3,respuesta, 'A',
        "addEventListener permite detectar eventos y ejecutar acciones."
    );
}

function pregunta4(respuesta) {
    comprobarRespuesta(4,respuesta, 'A',
        "JSON es un formato de texto utilizado para representar e intercambiar datos."
    );
}


function pregunta5(respuesta) {
    comprobarRespuesta(
        5,
        respuesta,
        'B',
        "Filter permite crear una lista con los elementos que cumplen una condición."
    );
}

function actualizarResultados() {
    document.getElementById("correctas").textContent = correctas
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("respondidas").textContent =
        correctas + incorrectas;
}

function reiniciarCuestionario() {

    if (correctas + incorrectas < 5) {
        alert("Tenés que responder las cinco preguntas antes de reiniciar.");
        return;
    }
    correctas = 0;
    incorrectas = 0;
    respondidas = [false, false, false, false, false];
    terminado = false;

    actualizarResultados();
    alert("Cuestionario reiniciado. Podés comenzar de nuevo.");
}
