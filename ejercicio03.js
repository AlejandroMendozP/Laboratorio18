function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log("Nombre:", datos.name);
            console.log("Username:", datos.username);
            console.log("Email:", datos.email);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

cargarUsuario();