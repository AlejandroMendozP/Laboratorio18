async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await respuesta.json();
        console.log("Name:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);

    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

cargarUsuario();