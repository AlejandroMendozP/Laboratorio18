const verificacion = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(verificacion.test("https://www.ejemplo.com"));
console.log(verificacion.test("http://www.ejemplo.com"));