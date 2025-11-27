const verificacion = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
console.log(verificacion.test("01/01/2025"));
console.log(verificacion.test("41/01/2025"));
console.log(verificacion.test("01/41/2025"));
console.log(verificacion.test("01/4/2025"));