function validarDatosReserva() {
    // Validar el nombre
    if (document.valido.Nombre.value.length == 0) {
        alert("Tiene que escribir su Nombre")
        document.valido.Nombre.focus()
        return 0;
    }

    //validar teléfono
    if (document.valido.Telefono.value.length != 10){
        alert("El número de teléfono NO es válido")
        document.valido.Telefono.focus()
        return 0;
    }

    // Validar Cantidad de comensales
    if (document.valido.Comensales.value <= 0){
        alert("El número de comensales NO es válido")
        document.valido.Comensales.focus()
        return 0;
    }

    // Validar fecha
    var today = new Date()
    today.setHours(0,0,0,0)
    var fechaForm = new Date (document.valido.Fecha.value)
    fechaForm.setMinutes(fechaForm.getMinutes() + fechaForm.getTimezoneOffset())
    
    if (fechaForm < today){
        alert("Fecha ingresada es incorrecta");
        document.valido.Fecha.focus()
        return 0;
    }

    alert("Su reserva está confirmada. Muchas gracias!");
    document.fvalida.submit();
}

