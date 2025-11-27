const boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
    fetch ("https://jsonplaceholder.typicode.com/users/2")
    .then (response => response.json())
    .then (datos =>{
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.textContent = datos.name;
        p2.textContent = datos.email;
        p3.textContent = datos.address.city;
        document.body.appendChild(p1);
        document.body.appendChild(p2);
        document.body.appendChild(p3);
})
.catch (error =>{
    console.log("Error"+error);
})
})