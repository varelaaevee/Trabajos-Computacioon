
let formulario = document.getElementById("formularioIngreso");
let campoNombre = document.getElementById("nombre");
let campoCurso = document.getElementById("curso");
let mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", function(evento) {

   
    evento.preventDefault();

   
    let nombre = campoNombre.value.trim();
    let curso = campoCurso.value.trim();

   
    if (nombre === "" || curso === "") {
        mensaje.textContent = "Completá tu nombre y tu curso.";
        return;
    }

   
    sessionStorage.setItem("nombreUsuario", nombre);
    sessionStorage.setItem("cursoUsuario", curso);

    window.location.href = "paginaprincipal.html";
});
