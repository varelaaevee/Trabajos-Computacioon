
function iniciarSesion(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre.trim() !== "") {

        localStorage.setItem("usuario", nombre.trim());

        window.location.href = "paginaprincipal.html";

    } else {

        alert("Ingresá tu nombre para continuar.");

    }
}


function cerrarSesion() {

    localStorage.removeItem("nombreUsuario");

    document.getElementById("perfilUsuario").style.display = "none";
    document.getElementById("inicioSesion").style.display = "block";

    document.getElementById("nombreUsuario").value = "";
    document.getElementById("mensaje").textContent = "";

}

mostrarPerfil();
