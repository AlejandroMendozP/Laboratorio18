const verificar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(verificar.test("Abcdef12"));
console.log(verificar.test("abcdef12"));
console.log(verificar.test("ABCDEF12"));
console.log(verificar.test("Abcdefgh"));
console.log(verificar.test("A1b!"));