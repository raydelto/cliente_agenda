function obtenerDatos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(
        function(valor)
        {
            return valor.json();
        }
    ).then(function(valor)
    {
        var txtNombre = document.getElementById("txtNombre");
        var txtApellido = document.getElementById("txtApellido");
        var txtTelefono = document.getElementById("txtTelefono");
        txtNombre.innerHTML = valor[0].nombre;
        txtApellido.innerHTML = valor[0].apellido;
        txtTelefono.innerHTML = valor[0].telefono;
    }
    );
}
