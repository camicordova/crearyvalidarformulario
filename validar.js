function esCorreo(correo) {
    var indice1 = correo.indexOf("@");
    var indice2 = correo.lastIndexOf(".");
    var esValido = true;

    if (indice1 == -1) {
        esValido = false;
    }
    if (indice2 == -1) {
        esValido = false;
    }
    if (indice2 < indice1) {
        esValido = false;
    }
    return esValido;
}

function validar() {
    var esValido = true;
    var error = "";
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;
    if (nombre == "" || nombre.length > 30) {
        esValido = false;
        error += "Nombre inválido\n";
    }
    if (apellidos == "" || apellidos.length > 80) {
        esValido = false;
        error += "Apellidos inválido\n";
    }
    if (correo == "" || !esCorreo(correo) || correo.length > 100) {
        esValido = false;
        error += "Correo inválido\n";
    }
    if (usuario == "" || usuario.length > 20) {
        esValido = false;
        error += "Usuario inválido\n";
    }
    if (telefono == "" || telefono.length > 15 || isNaN(telefono)) {
        esValido = false;
        error += "Telefono inválido\n";
    }

    if (esValido) {
        alert("Bienvenido: " + nombre + " " + usuario + " " + pass);
    } else {
        alert(error);
        return false;
    }

}