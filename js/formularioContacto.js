function validarDatos() {
    // Validar el nombre
    if (document.valido.Nombre.value.length == 0) {
        alert("Tiene que escribir su Nombre")
        document.valido.Nombre.focus()
        return 0;
    }

    //validar mail
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(document.valido.Email.value)
    if (esValido==false){
        alert ("El mail NO es válido")
        document.valido.Email.focus()
        return 0;
    }

    //validar teléfono
    if (document.valido.Telefono.value.length != 10){
        alert("El número de teléfono NO es válido")
        document.valido.Telefono.focus()
        return 0;
    }

    //validar mensaje
    if (document.valido.Mensaje.value.length == 0) {
        alert("Tiene que escribir un Mensaje")
        document.valido.Mensaje.focus()
        return 0;
    }

    alert ("Todos los datos válidos. Gracias por su mensaje")
}