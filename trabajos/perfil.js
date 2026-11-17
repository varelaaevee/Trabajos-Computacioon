
let nombreGuardado = sessionStorage.getItem("nombreUsuario");
let cursoGuardado = sessionStorage.getItem("cursoUsuario");

if (nombreGuardado === null || cursoGuardado === null) {
    window.location.href = "index.html";
} else {
   
    document.getElementById("nombrePerfil").textContent = nombreGuardado;
    document.getElementById("cursoPerfil").textContent = cursoGuardado;
}
