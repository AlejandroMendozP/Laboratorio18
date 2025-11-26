function cargarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(u => {
                console.log(u.name);
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

cargarUsuarios();